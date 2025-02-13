#! /bin/sh

# directory where static export files will be generated
OUTPUT_DIR='out/'
# directory to copy the newly builded static export files to Deployed
DIST_DIR='dist/'

# alias for the remote git repo
REMOTE='origin'

# build static export files
npm run build

# cd into DIST_DIR
cd $DIST_DIR

# set Internal Field Separator to end of line '\n' to process files/directories with spaces
IFS=$'\n'
# get all the previous files and directories from DIST_DIR except .git/ directory
result=$(find . -mindepth 1 -maxdepth 1 -path "./.git" -prune -o -print)

# remove all the previous directories and files
if [[ -n $result ]]
then
  rm -r $result
fi

# copy the newly built static export files into DIST_DIR
cp -r "../$OUTPUT_DIR." .

# add new changes to github pages repo
git add .
git commit -m "Deployment $(date)"
git push -u $REMOTE

echo -e "\nWeb Page Deployed!\n"

