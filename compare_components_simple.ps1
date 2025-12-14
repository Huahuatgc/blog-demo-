# 从 API 文档中提取组件名称（逐行处理）
$apiLines = Get-Content -Path "e:\viteblog\api\components.md"
$expectedComponents = @()

foreach ($line in $apiLines) {
    if ($line -match '\./\.\./components/([\w\.]+)\)') {
        $expectedComponents += $matches[1]
    }
}

$expectedComponents = $expectedComponents | Sort-Object

# 获取实际的组件文件
$actualComponents = Get-ChildItem -Path "e:\viteblog\components\*.md" -Name | Sort-Object

# 输出结果
Write-Host "预期的组件数量: $($expectedComponents.Count)"
Write-Host "实际的组件数量: $($actualComponents.Count)"
Write-Host "预期的组件:"
$expectedComponents | ForEach-Object { Write-Host "- $_" }
Write-Host "\n实际的组件:"
$actualComponents | ForEach-Object { Write-Host "- $_" }

# 比较预期和实际的组件
Write-Host "\n缺失的组件:"
foreach ($component in $expectedComponents) {
    if ($actualComponents -notcontains $component) {
        Write-Host "- $component"
    }
}

Write-Host "\n额外的组件:"
foreach ($component in $actualComponents) {
    if ($expectedComponents -notcontains $component) {
        Write-Host "- $component"
    }
}
