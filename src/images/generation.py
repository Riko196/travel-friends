import os

path = 'cityPhotos'

files = []
# r=root, d=directories, f = files
for r, d, f in os.walk(path):
    for file in f:
        print("{")
        print("destinationName: \"" + file[:-4] + "\",")
        print("destinationPhoto: \"" + file + "\",")
        print("aboutDestination: \"" + "\",")
        print("},")
