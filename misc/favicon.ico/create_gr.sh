inkscape master.svg --export-png=16.png -w 16 -h 16 --without-gui
inkscape master.svg --export-png=24.png -w 24 -h 24 --without-gui
inkscape master.svg --export-png=32.png -w 32 -h 32 --without-gui
inkscape master.svg --export-png=48.png -w 48 -h 48 --without-gui
inkscape master.svg --export-png=logo192.png -w 192 -h 192 --without-gui
inkscape master.svg --export-png=logo512.png -w 512 -h 512 --without-gui
convert 16.png 24.png 32.png 48.png favicon.ico
