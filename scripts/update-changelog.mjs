import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OWNER = 'sudoevolve'
const REPO = 'EvolveUI'
const TARGET_FILE = path.resolve(__dirname, '..', 'api', 'components.md')

async function fetchReleases() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/releases`
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': `${OWNER}-${REPO}-changelog-sync`
    }
  })

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
  }

  const releases = await res.json()
  // 只保留有 tag_name 的正式/预发布版本，按发布时间排序
  return releases
    .filter(r => r.tag_name)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function buildChangelogSection(releases) {
  const lines = []
  lines.push('## 组件更新日志')
  lines.push('')
  lines.push('以下内容由 GitHub Releases（`sudoevolve/EvolveUI` 仓库）自动同步生成：')
  lines.push('')

  for (const r of releases) {
    const version = r.tag_name
    const date = formatDate(r.published_at)
    const titleLine = date ? `### ${version} (${date})` : `### ${version}`
    lines.push(titleLine)
    lines.push('')

    const body = (r.body || '').trim()
    if (body) {
      // 将 release body 中的换行和列表保留下来，避免太生硬
      const bodyLines = body.split(/\r?\n/).map(line => {
        if (!line.trim()) return ''
        // 如果不是以列表符号开头，则转成 markdown 列表
        if (!/^[-*+]/.test(line.trim())) {
          return `- ${line.trim()}`
        }
        return line
      })
      lines.push(...bodyLines)
      lines.push('')
    } else {
      lines.push('- 无详细说明')
      lines.push('')
    }
  }

  return lines.join('\n').trimEnd() + '\n'
}

function replaceChangelogSection(fileContent, newSection) {
  const startHeading = '## 组件更新日志'
  const idx = fileContent.indexOf(startHeading)
  if (idx === -1) {
    // 末尾追加
    return fileContent.trimEnd() + '\n\n' + newSection
  }

  // 找到该段之后的下一个同级 heading（以 "## " 开头），用来截断旧内容
  const before = fileContent.slice(0, idx)
  const rest = fileContent.slice(idx)

  const nextHeadingMatch = rest.slice(startHeading.length).match(/\n## [^\n]*/)
  if (!nextHeadingMatch) {
    // 没有下一个 heading，直接用新 section 替换到结尾
    return before.trimEnd() + '\n\n' + newSection
  }

  const nextIdx = startHeading.length + nextHeadingMatch.index
  const after = rest.slice(nextIdx)

  return before.trimEnd() + '\n\n' + newSection + '\n' + after.replace(/^\n+/, '')
}

async function main() {
  try {
    const releases = await fetchReleases()
    if (!releases.length) {
      console.log('No releases found, skip.')
      return
    }

    const newSection = buildChangelogSection(releases)
    const original = fs.readFileSync(TARGET_FILE, 'utf-8')
    const updated = replaceChangelogSection(original, newSection)

    if (updated === original) {
      console.log('Changelog is already up to date.')
      return
    }

    fs.writeFileSync(TARGET_FILE, updated, 'utf-8')
    console.log('Changelog updated from GitHub Releases.')
  } catch (err) {
    console.error('Failed to update changelog:', err)
    process.exitCode = 1
  }
}

main()


