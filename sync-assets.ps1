$srcDir = "C:\Users\namir\.gemini\antigravity-ide\brain\03c1a863-6222-4951-9062-fd13d2cc6633\.user_uploaded"
$destDir = "d:\neam\public\artifacts\atelier"

if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$mapping = @{
    "media_1790086245117.jpg" = "carpet-border.jpg"
    "media_1790086267512.png" = "botanical-flower.png"
    "media_1790086275081.jpg" = "celestial-sun.jpg"
    "media_1790086287759.png" = "pixel-jaali.png"
    "media_1790086374082.png" = "risograph-hand.png"
}

foreach ($item in $mapping.GetEnumerator()) {
    $src = Join-Path $srcDir $item.Key
    $dest = Join-Path $destDir $item.Value
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dest -Force
        Write-Host "Copied $($item.Key) -> $($item.Value)" -ForegroundColor Green
    } else {
        Write-Warning "Source not found: $src"
    }
}

Write-Host "Assets synced successfully to public/artifacts/atelier!" -ForegroundColor Cyan
