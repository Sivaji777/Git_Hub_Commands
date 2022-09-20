import React from 'react'

function Git_Hub_Commands() {
  return (
    <div>
      <h1>Git Hub Commands</h1>
      
      <h1>How To Commit The Visual Studio Code Commands</h1>
      {/* 
         Steps:---
        1) git add .
        2) git commit -m "Dummy Data" 
        3) git push
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

    </div>
  )
}

export default Git_Hub_Commands
