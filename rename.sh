find . -type f -name "*.*" -print0 | xargs -0 sed -i '' -e "s/$1/$2/g"
find . -iname "*$1*" | rename -v "s/$1/$2/g"

