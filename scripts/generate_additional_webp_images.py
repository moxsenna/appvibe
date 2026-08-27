import os
import io
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image

DEMO_DIR = r"D:\Coding\AppVibe v2\public\images\demo"
ABOUT_DIR = r"D:\Coding\AppVibe v2\public\images\about"
BLOG_DIR = r"D:\Coding\AppVibe v2\public\images\blog"

os.makedirs(DEMO_DIR, exist_ok=True)
os.makedirs(ABOUT_DIR, exist_ok=True)
os.makedirs(BLOG_DIR, exist_ok=True)

# Format: (name, unsplash_id, (width, height), target_dir)
ADDITIONAL_IMAGES = [
    # --- Property Demo Listings (6 images) ---
    ("properti-arunika-residence", "1600585154340-be6161a56a0c", (1200, 900), DEMO_DIR),
    ("properti-ruko-nusa-avenue", "1541888946425-d0fbb18086f6", (1200, 900), DEMO_DIR),
    ("properti-kavling-bukit-asri", "1506744038136-46273834b3fb", (1200, 900), DEMO_DIR),
    ("properti-villa-sagara", "1540555700478-4be289fbecef", (1200, 900), DEMO_DIR),
    ("properti-renovasi-cendana", "1600607687939-ce8a6c25118c", (1200, 900), DEMO_DIR),
    ("properti-interior-senopati", "1618221195710-dd6b41faaea6", (1200, 900), DEMO_DIR),

    # --- Company Profile Projects (6 images) ---
    ("company-project-interior", "1616486338812-3dadae4b4ace", (1200, 900), DEMO_DIR),
    ("company-project-clinic", "1629909615184-74f495363b67", (1200, 900), DEMO_DIR),
    ("company-project-contractor", "1504307651254-35680f356dfd", (1200, 900), DEMO_DIR),
    ("company-project-agency", "1522071820081-009f0129c71c", (1200, 900), DEMO_DIR),
    ("company-project-fnb", "1442512595331-e89e73853f31", (1200, 900), DEMO_DIR),
    ("company-project-tax", "1497366811353-6870744d04b2", (1200, 900), DEMO_DIR),

    # --- Clinic Doctors (4 images, square portrait) ---
    ("doctor-amanda", "1594824813603-ee83a54d68e5", (800, 800), DEMO_DIR),
    ("doctor-budi", "1622253692010-333f2da6031d", (800, 800), DEMO_DIR),
    ("doctor-rahma", "1573496359142-b8d87734a5a2", (800, 800), DEMO_DIR),
    ("doctor-dian", "1580489944761-15a19d654956", (800, 800), DEMO_DIR),

    # --- Clinic Service Highlights (3 images) ---
    ("klinik-service-facial", "1570172619644-dfd03ed5d881", (1200, 900), DEMO_DIR),
    ("klinik-service-dental", "1606811841689-23dfddce3e95", (1200, 900), DEMO_DIR),
    ("klinik-service-wellness", "1540555700478-4be289fbecef", (1200, 900), DEMO_DIR),

    # --- Webinar Speakers (2 images, square portrait) ---
    ("speaker-alif", "1534528741775-53994a69daeb", (800, 800), DEMO_DIR),
    ("speaker-dina", "1567532939604-b6b5b0db2604", (800, 800), DEMO_DIR),

    # --- About Page (2 images) ---
    ("founder", "1507003211169-0a1dd7228f2d", (800, 800), ABOUT_DIR),
    ("studio", "1497366216548-37526070297c", (1200, 800), ABOUT_DIR),

    # --- Blog Featured Images (5 images) ---
    ("whatsapp-cta", "1516321318423-f06f85e504b3", (1200, 800), BLOG_DIR),
    ("landing-vs-homepage", "1531403009284-440f080d1e12", (1200, 800), BLOG_DIR),
    ("measure-conversion", "1551288049-bebda4e38f71", (1200, 800), BLOG_DIR),
    ("social-proof", "1522202176988-66273c2fd55f", (1200, 800), BLOG_DIR),
    ("whatsapp-copy", "1460925895917-afdab827c52f", (1200, 800), BLOG_DIR),
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
    
    url = f"https://images.unsplash.com/photo-{unsplash_id}?auto=format&fit=crop&w=1200&q=80"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
    
    last_err = None
    for attempt in range(3):
        try:
            resp = requests.get(url, headers=headers, timeout=15)
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
    print(f"Starting generation of {len(ADDITIONAL_IMAGES)} supporting WebP images...")
    success = 0
    failed = []
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(process_item, item): item for item in ADDITIONAL_IMAGES}
        for future in as_completed(futures):
            ok, name, info = future.result()
            if ok:
                success += 1
                print(f"[OK] {name}.webp -> {info}")
            else:
                failed.append((name, info))
                print(f"[FAIL] {name} -> {info}")
                
    print(f"\nDone: {success}/{len(ADDITIONAL_IMAGES)} generated successfully.")
    if failed:
        print("Failed list:")
        for name, err in failed:
            print(f" - {name}: {err}")

if __name__ == "__main__":
    main()
