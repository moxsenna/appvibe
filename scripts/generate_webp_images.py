import os
import io
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image

PORTFOLIO_DIR = r"D:\Coding\AppVibe v2\public\images\portfolio"
DEMO_DIR = r"D:\Coding\AppVibe v2\public\images\demo"

os.makedirs(PORTFOLIO_DIR, exist_ok=True)
os.makedirs(DEMO_DIR, exist_ok=True)

# Format: (filename_without_ext, unsplash_photo_id, (width, height), target_dir)
IMAGES = [
    # --- Group A: Portfolio Covers (1600 x 1000) ---
    ("company-profile", "1497366216548-37526070297c", (1600, 1000), PORTFOLIO_DIR),
    ("webinar-landing", "1531403009284-440f080d1e12", (1600, 1000), PORTFOLIO_DIR),
    ("klinik", "1629909613654-28e377c37b09", (1600, 1000), PORTFOLIO_DIR),
    ("properti", "1600585154340-be6161a56a0c", (1600, 1000), PORTFOLIO_DIR),
    ("lead-dashboard", "1551288049-bebda4e38f71", (1600, 1000), PORTFOLIO_DIR),
    ("natura-skin-clinic", "1570172619644-dfd03ed5d881", (1600, 1000), PORTFOLIO_DIR),
    ("nusa-grove-residences", "1600585154526-990dced4db0d", (1600, 1000), PORTFOLIO_DIR),
    ("kelaspintar-ai", "1516321318423-f06f85e504b3", (1600, 1000), PORTFOLIO_DIR),
    ("leadloop-crm", "1551836022-d5d88e9218df", (1600, 1000), PORTFOLIO_DIR),
    ("banyu-villa", "1582719478250-c89cae4dc85b", (1600, 1000), PORTFOLIO_DIR),
    ("ruangtumbuh-interior", "1618221195710-dd6b41faaea6", (1600, 1000), PORTFOLIO_DIR),
    ("lunaria-wedding", "1519741497674-611481863552", (1600, 1000), PORTFOLIO_DIR),
    ("satria-print", "1563245372-f21724e3856d", (1600, 1000), PORTFOLIO_DIR),
    ("kopi-pagi", "1501339847302-ac426a4a7cbb", (1600, 1000), PORTFOLIO_DIR),
    ("mitra-legal", "1486406146926-c627a92ad1ab", (1600, 1000), PORTFOLIO_DIR),

    # --- Group B: Demo Galleries (1200 x 900) ---
    # Natura Skin Clinic
    ("natura-skin-clinic-treatment-room", "1519494026892-80bbd2d6fd0d", (1200, 900), DEMO_DIR),
    ("natura-skin-clinic-reception", "1629909615184-74f495363b67", (1200, 900), DEMO_DIR),
    ("natura-skin-clinic-product", "1608248597359-009904d90d81", (1200, 900), DEMO_DIR),

    # Nusa Grove Residences
    ("nusa-grove-residences-exterior", "1600596542815-ffad4c1539a9", (1200, 900), DEMO_DIR),
    ("nusa-grove-residences-interior", "1600607687920-4e2a09cf159d", (1200, 900), DEMO_DIR),
    ("nusa-grove-residences-courtyard", "1584738766473-61c083514bf4", (1200, 900), DEMO_DIR),

    # KelasPintar AI
    ("kelaspintar-ai-mentor-1", "1573496359142-b8d87734a5a2", (1200, 900), DEMO_DIR),
    ("kelaspintar-ai-mentor-2", "1534528741775-53994a69daeb", (1200, 900), DEMO_DIR),

    # LeadLoop CRM
    ("leadloop-crm-dashboard", "1551288049-bebda4e38f71", (1200, 900), DEMO_DIR),
    ("leadloop-crm-d", "1460925895917-afdab827c52f", (1200, 900), DEMO_DIR),
    ("leadloop-crm-S", "1504868584819-f8e8b4b6d7e3", (1200, 900), DEMO_DIR),

    # Banyu Villa
    ("banyu-villa-pool", "1540555700478-4be289fbecef", (1200, 900), DEMO_DIR),
    ("banyu-villa-bedroom", "1618773928121-c32242e63f39", (1200, 900), DEMO_DIR),
    ("banyu-villa-bathroom", "1584622650111-993a426fbf0a", (1200, 900), DEMO_DIR),

    # RuangTumbuh Interior
    ("ruangtumbuh-interior-casa-aira", "1616486338812-3dadae4b4ace", (1200, 900), DEMO_DIR),
    ("ruangtumbuh-interior-sora-workspace", "1497366754035-f200968a6e72", (1200, 900), DEMO_DIR),
    ("ruangtumbuh-interior-kosama-kitchen", "1556911220-e15b29be8c8f", (1200, 900), DEMO_DIR),
    ("ruangtumbuh-interior-ruma-rasa", "1554118811-1e0d58224f24", (1200, 900), DEMO_DIR),

    # Lunaria Wedding
    ("lunaria-wedding-ceremony", "1519741497674-611481863552", (1200, 900), DEMO_DIR),
    ("lunaria-wedding-reception", "1511285560929-80b456fea0bc", (1200, 900), DEMO_DIR),
    ("lunaria-wedding-detail", "1520854221256-17451cc331bf", (1200, 900), DEMO_DIR),

    # Satria Print
    ("satria-print-factory", "1581092160607-ee22621dd758", (1200, 900), DEMO_DIR),
    ("satria-print-apparel", "1503342217505-b0a15ec3261c", (1200, 900), DEMO_DIR),
    ("satria-print-packing", "1586528116311-ad8dd3c8310d", (1200, 900), DEMO_DIR),

    # Kopi Pagi
    ("kopi-pagi-es-kopi-pagi", "1517701550927-30cf4ba1dba5", (1200, 900), DEMO_DIR),
    ("kopi-pagi-butter-bun", "1509440159596-0249088772ff", (1200, 900), DEMO_DIR),
    ("kopi-pagi-interior", "1442512595331-e89e73853f31", (1200, 900), DEMO_DIR),
    ("kopi-pagi-cloud-latte", "1534778101976-62847782c213", (1200, 900), DEMO_DIR),

    # Mitra Legal
    ("mitra-legal-office", "1497366811353-6870744d04b2", (1200, 900), DEMO_DIR),
    ("mitra-legal-team", "1556761175-5973dc0f32e7", (1200, 900), DEMO_DIR),
]

def crop_center(img, target_ratio):
    w, h = img.size
    current_ratio = w / h
    if current_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        return img.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        return img.crop((0, top, w, top + new_h))

def process_item(item):
    name, unsplash_id, target_size, target_dir = item
    target_w, target_h = target_size
    target_ratio = target_w / target_h
    output_path = os.path.join(target_dir, f"{name}.webp")
    
    url = f"https://images.unsplash.com/photo-{unsplash_id}?auto=format&fit=crop&w=1600&q=80"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    last_err = None
    for attempt in range(3):
        try:
            resp = requests.get(url, headers=headers, timeout=12)
            if resp.status_code == 200:
                img = Image.open(io.BytesIO(resp.content)).convert("RGB")
                cropped = crop_center(img, target_ratio)
                resized = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
                resized.save(output_path, "WEBP", quality=82, method=6)
                file_size_kb = os.path.getsize(output_path) / 1024
                return (True, name, f"{target_w}x{target_h}, {file_size_kb:.1f} KB")
            else:
                last_err = f"HTTP {resp.status_code}"
        except Exception as e:
            last_err = str(e)
            time.sleep(1)
            
    return (False, name, last_err)

def main():
    print(f"Starting concurrent generation of {len(IMAGES)} WebP images...")
    success = 0
    failed = []
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(process_item, item): item for item in IMAGES}
        for future in as_completed(futures):
            ok, name, info = future.result()
            if ok:
                success += 1
                print(f"[OK] {name}.webp -> {info}")
            else:
                failed.append((name, info))
                print(f"[FAIL] {name} -> {info}")
                
    print(f"\nDone: {success}/{len(IMAGES)} generated successfully.")
    if failed:
        print("Failed list:")
        for name, err in failed:
            print(f" - {name}: {err}")

if __name__ == "__main__":
    main()
