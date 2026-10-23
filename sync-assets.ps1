# Source directory for current conversation uploaded assets
$srcDir = "C:\Users\namir\.gemini\antigravity-ide\brain\23e67b16-98c8-452e-974b-f4fb5b7cf986\.user_uploaded"
$destDir = "d:\neam\public\artifacts\creative"
$atelierDir = "d:\neam\public\artifacts\atelier"

if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$creativeMapping = @{
    "media_1792691998379.png" = "star-sketch.png"
    "media_1792692004310.png" = "exclamation-halftone.png"
    "media_1792692007401.png" = "not-ai-badge.png"
    "media_1792692010659.png" = "behind-the-scenes.png"
    "media_1792692021724.png" = "lightning-sparks.png"
    "media_1792692254501.png" = "f1-telemetry-car.png"
    "media_1792692258518.png" = "liquid-star-spine.png"
    "media_1792692261063.png" = "radial-starburst-halo.png"
    "media_1792692297304.jpg" = "gothic-corner-filigree.jpg"
}

foreach ($item in $creativeMapping.GetEnumerator()) {
    $src = Join-Path $srcDir $item.Key
    $dest = Join-Path $destDir $item.Value
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dest -Force
        Write-Host "Copied $($item.Key) -> $($item.Value)" -ForegroundColor Green
    } else {
        Write-Warning "Source not found: $src"
    }
}

Write-Host "Creative assets synced successfully to public/artifacts/creative!" -ForegroundColor Cyan
