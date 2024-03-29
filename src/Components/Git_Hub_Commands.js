import React from 'react'

function Git_Hub_Commands() {
  return (
    <div>
      <h1>Git Hub Commands</h1>
      <h1>How to Delete Branch in Git hub</h1
      {/*
         Steps:----
         1) git push origin --delete main 
      */}
      <h1>How Push the Local Cangest To Main Branch</h1>
      {/*
         Steps:----
         1) git checkout master
         2) git pull               # to update the state to the latest remote master state
         3) git merge develop      # to bring changes to local master from your develop branch
         4) git push origin master # push current HEAD to remote master branch
      */}
    
      <h1>How To Commit The Visual Studio Code Commands</h1>
      {/* 
         Steps:---
        1) git add .
        2) git commit -m "Dummy Data" 
        3) git push
      */}
 
      <h1>how to take pull from main branch code to your local branch</h1>
      {/* 
        Steps:---
         1) git checkout dmgr2
         2) git pull origin master
      */}

      <h1>How to add add new origin URLS </h1>
      {/* 
        new project purpose whenever just created one(Git_Hub_Commands) reposiratory in git hub account
        and i have one new reposiratory link i need to do this step
        Step:-1
        1) git remote add origin https://github.com/Sivaji777/Git_Hub_Commands.git
        a) after enter this command 
        2) git push -u origin master 
        a) after clicking this command what ever we have all the project files will add git hub
      */}

       <h1> How to remove the origin git hub URL Access </h1>
       {/*
        Step:- 1
        1) git remote
        2) git remote remove origin
       */}

       <h1>How add git hub username and main </h1>
       {/*
       1) git config --global user.name "YOUR NAME"
       2) git config --global user.email "YOUR EMAIL ADDRESS"
       */}
       
       <h1>How check the current credentials</h1>
       {/*
        1) git config --global user.name
        2) git config --global user.email
       */}
 
       <h1>How to get back stashed changes without solving git pull merge conflicts</h1>
      {/*
        a) Senario : whenever you want take git pull from another branch and after taken git pull you got some merge conflicts you need resolve 
          that and you need to push that code in git hub but you dont know hoe to merge the two branches code that time use this connamd
        Step 1) you need to take pull from particulat branch
            a) git pull origin API-Service
            *  get back stashed changes without solving git pull merge conflicts
            
            b) git reset --hard 8bc00cd796c413c230dbc8f6f8e7acf09a392d18
            
            it will come back as`tess      
      */}
      
        <h1>How to crete local branch</h1>
         * only creting purpose
        a) git branch <branch-name>
         * Creting and switching brch
        b) git checkout -b <branch-name>
        * After creting push the code in respective branch
        c) git push -u origin <branch-name>

        <h1>How to update particular version in node js</h1>
          * Uninstall the current Node.js version
          * nvm uninstall 20.3.0
          
          * Install a supported Node.js version
          * nvm install 16.10.0
          
          * Switch to the installed version
          * nvm use 16.10.0
          
          * Verify the installation
          * node --version

          <h1>HOW TO REMOVE THE PARTICULAR FILE FRON THE COMMAND</h1> 
          * git rm -r --cached node_modules
          * git commit -m "Remove node_modules from the repository"
          * git push origin main
          
          <h1>HOW TO REMOVE PARTICULAR FILE</h1> 
          * Remove-Item -Recurse -Force -Path node_modules

          <h1>HOW TO SWITCH PARTICULAR COMMIT CODE</h1> 
          1) Use the git log command:Run git log to see a list of commits. Each commit has a unique identifier called a hash.
          * git log
          2) Checkout the specific commit:Once you have identified the commit, use the git checkout command to switch to that commit. Replace <commit-hash> with the actual commit hash or a unique part of it.
          * git checkout bc0b9d7867470f311b288bbebe7e2819980effe8
          3) Create a new branch (optional):If you want to make changes based on this commit, it's recommended to create a new branch.
          * git checkout -b Bug-Fix
          4) Return to the latest commit (optional):After you've retrieved the code you need, you may want to go back to the latest commit.
          * git checkout master  # or the name of your main branch
          

    </div>
  )
}

export default Git_Hub_Commands
