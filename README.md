https://www.youtube.com/watch?v=OUQsRuY2cp4&list=PLiUrl-SQRR7LuZzp1PDNbv9x9NCpsd8LX&index=2

vue create photography-vuetify

vue add vuetify

npm install vue-router



https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane

to deploy in github pages static    
update vue.config.js file    
npm run build    
git add dist -f    
git commit -m "Adding dist"    
git subtree push --prefix dist origin gh-pages



To remove folder/directory only from git repository and not from the local try 3 simple commands.   
Steps to remove directory    

git rm -r --cached FolderName   
git commit -m "Removed folder from repository"    
git push origin master   


https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch