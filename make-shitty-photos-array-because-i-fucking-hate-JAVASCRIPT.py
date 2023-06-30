import os
from PIL import Image
import random

shit = os.listdir("./src/assets/gallery-shit")
fuck_imports = []
fuck_photos = []

for i, s in enumerate(shit):
  fuck_import = f"import Img{i} from \"../src/assets/gallery-shit/{s}\""
  fuck_imports.append(fuck_import)
  im = Image.open(f"./src/assets/gallery-shit/{s}")
  sz = im.size
  fuck_photos.append(f"[ src: Img{i}, width: {int(sz[0]/2)}, height: {int(sz[1]/2)} ],".replace("[", "{").replace("]", "}"))

random.shuffle(fuck_photos)
print("\n".join(fuck_imports))
photos_array_fuck = "const photos = [\n" + "\n".join(fuck_photos) + "\n];"
print(photos_array_fuck)
print("export default photos;")