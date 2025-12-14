# 从 API 文档中提取组件名称
$apiContent = Get-Content -Path "e:\viteblog\api\components.md" -Raw
$componentMatches = [regex]::Matches($apiContent, '\./\.\./components/([\w\.]+)\)')
$expectedComponents = $componentMatches | ForEach-Object { $_.Groups[1].Value } | Sort-Object

# 获取实际的组件文件
$actualComponents = Get-ChildItem -Path "e:\viteblog\components\*.md" -Name | Sort-Object

# 比较预期和实际的组件
$missingComponents = Compare-Object -ReferenceObject $expectedComponents -DifferenceObject $actualComponents -PassThru | Where-Object { $_.SideIndicator -eq "<=" }

# 输出结果
Write-Host "预期的组件数量: $($expectedComponents.Count)"
Write-Host "实际的组件数量: $($actualComponents.Count)"
Write-Host "缺失的组件:"
$missingComponents | ForEach-Object { Write-Host "- $_" }
Write-Host "额外的组件:"
$extraComponents = Compare-Object -ReferenceObject $expectedComponents -DifferenceObject $actualComponents -PassThru | Where-Object { $_.SideIndicator -eq "=>" }
$extraComponents | ForEach-Object { Write-Host "- $_" }
