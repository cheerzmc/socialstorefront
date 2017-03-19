# socialstorefront
Social Storefront Management

# Steps
1. create program on github
> socialstorefront
>> https://github.com/cheerzmc/socialstorefront.git

2. git clone https://github.com/cheerzmc/socialstorefront.git
3. express -c less app
4. cd app && npm install
5. Test run application
> run the app:
>> DEBUG=app:* npm start

6. cd ../  --> socialstorefront/socialstorefront
7. git remote -v --> check remote repository
8. git ls-tree --full-tree -r HEAD
      or git ls-files
--> check committed files in HEAD   
9. git add app/*
10. git commit -m "Initial commit"
11. git push -u origin master
12. git status
> On branch master
> Your branch is up-to-date with 'origin/master'
> nothing to commit, working tree clean

13. git checkout -b develop --> fork 'develop' branch when starting to develop
14. git push origin develop:develop --> push(create if not exist) local 'develop' to remote 'develop'
15. cd app && sudo npm install -g nodemon
16. export PATH=$PATH:/Users/thanakornpiroonsith/.npm-global/lib/node_modules/nodemon/bin
17. Test run application with nodemon
> run the app:
>> DEBUG=app:* nodemon.js npm start

## Developing, Testing, Releasing, Fixing Bugs
18. Development Lifecycle
18.1 Develop
18.2 Test
18.3 Release
18.4 [Fix bugs]

## Releasing candidate
19. git push origin stable/flubo --> pushing
20. git checkout master
21. git merge --no-ff stable/flubo
22. git push origin master:master --> pushing

## Production Deployment
23. brew install heroku
24. heroku --version
25. heroku login
> Email: cheerzmc@gmail.com
> Password: ZMC*cz21$

26. cd app
27. heroku create
> polar-falls-15972
> https://polar-falls-15972.herokuapp.com/ | https://git.heroku.com/polar-falls-15972.git

28. git push heroku master  --> Deploy to Heroku server

> remote:        https://polar-falls-15972.herokuapp.com/ deployed to Heroku
> remote:
> remote: Verifying deploy... done.
> To https://git.heroku.com/polar-falls-15972.git


# References
[x] http://nvie.com/posts/a-successful-git-branching-model/
[ ] http://stackoverflow.com/questions/8775850/how-do-i-add-files-and-folders-into-github-repos
[ ] http://rogerdudler.github.io/git-guide/
[ ] http://stackoverflow.com/questions/14168677/merge-development-branch-with-master
[ ] http://stackoverflow.com/questions/5195859/push-a-tag-to-a-remote-repository-using-git
[x] http://stackoverflow.com/questions/14348776/jade-how-to-include-a-javascript-file
[ ] https://git-scm.com/book/id/v2/Git-Basics-Viewing-the-Commit-History
[ ] http://google.co.th/search?site=&source=hp&q=jade+template+script+src&oq=jade+template+scr&gs_l=hp.3.1.0j0i22i30k1l4.845.7137.0.8672.27.20.3.4.5.0.137.1673.17j3.20.0....0...1c.1.64.hp..0.21.1294.0..35i39k1j0i131k1j33i160k1j0i13k1j0i22i10i30k1.YkY9vyuzgGQ
[x] https://webdesign.tutsplus.com/tutorials/baking-bootstrap-snippets-with-jade--cms-22798
[ ] http://holderjs.com
[x] http://code.runnable.com/U6IlNqsTu-cR6ZT8/holder-js-in-express-using-jade-for-node-js-and-hello-world
[x] https://html2jade.org

# Extra Tools
[ ] http://danielkummer.github.io/git-flow-cheatsheet/


# Phase
1. pre-Alpha : requirement analysis, design (milestone versions), develop, unit testing
> release-1.1.0-pa.1 or release-1.1.0
>> git checkout -b feature-apply-bootstrap develop
  >> git checkout -b feature-convert-css-to-less develop
  >> git checkout -b feature-convert-html-to-jade develop
>> git merge --no-ff develop
>> resolve conflicts
>> develop this feature
>> git commit -am "xxxx developing xxxx"
>> git commit -m "feature: feature-apply-bootstrap"
>> git checkout develop
>> git merge --no-ff feature-apply-bootstrap
>> complete these 3 features to develop to release pre-alpha.1
>> (on develop branch) git commit -m "release-1.1.0-pa.1 : feature-apply-bootstrap, feature-convert-css-to-less, feature-convert-html-to-jade"
>> git branch -d feature-apply-bootstrap
>> git branch -d feature-convert-css-to-less
>> git branch -d feature-convert-html-to-jade
>> git tag release-1.1.0-pa.1

> release-1.2.0-pa.2
>> git checkout -b feature-connect-mongodb develop
>> git checkout -b feature-create-database develop
>> git checkout -b feature-create-data-model develop
>> git checkout -b feature-add-image-preview develop

> release-1.2.0-pa.3
>> git checkout -b feature-integrate-facebook develop
>> git checkout -b feature-integrate-lineat develop

> release-1.2.0-pa.4
>> git checkout -b feature-add-chat develop
>> git checkout -b feature-burst-images develop
>> git checkout -b feature-log-chat develop

> release-1.2.0-pa.5
>> git checkout -b feature-add-inventory-counting develop
>> git checkout -b feature-add-msg-extraction develop
>> git checkout -b feature-add-msg-filtering develop
>> git checkout -b feature-convert-msg-to-sales develop

2. alpha : whitebox + blackbox + graybox testing with full features frozen but not bug-free especially usability
> release-1.1.1-alpha.1
>> git checkout -b release-1.1.0 release-1.1.0-pa.1
>> IT testing

>> (if bugs were found, fork new branch)
>> git checkout -b release-1.1.1 release-1.1.0
>> fix bugs
>> IT testing
>> git branch -d release-1.1.0  --> delete previous release(bug attached)
>> recursive if bugs are found

>> if no bugs found
>> (on current bug fixes release-1.1.1) git merge --no-ff develop
>> (on current bug fixes release-1.1.1) git checkout develop
>> (on develop) git merge --no-ff release-1.1.1
>> git tag release-1.1.1-alpha.1
>> git branch -d release-1.1.1


3. beta : UAT with full features frozen but not bug-free especially performance(stress/load) issue   
> release-1.1.1-beta.1
>> git checkout -b release-1.1.1 release-1.1.1-alpha.1
>> UAT testing

>> (if bugs were found, fork new branch)
>> git checkout -b release-1.1.2 release-1.1.1
>> fix bugs
>> UAT testing
>> git branch -d release-1.1.1 --> delete previous release(bug attached)
>> recursive if bugs are found

>> if no bugs found
>> (on current bug fixes release-1.1.2) git merge --no-ff develop
>> (on current bug fixes release-1.1.2) git checkout develop
>> (on develop) git merge --no-ff release-1.1.2
>> git tag release-1.1.2-beta.1
>> git branch -d release-1.1.2

4. release candidate : specific beta version with potential to be a final product = all product features were completely designed, coded, tested through 1 or more beta cycle(s) with no known showstopper bugs
> release-1.1.3-rc.1
>> git checkout -b release-1.1.2 release-1.1.2-beta.1
>> Performance/Security testing --> Open/Close Beta

>> (if bugs were found, fork new branch)
>> git checkout -b release-1.1.3 release-1.1.2
>> fix bugs
>> Performance/Security testing
>> git branch -d release-1.1.2 --> delete previous release(bug attached)
>> recursive if bugs are found

>> if no bugs found
>> (on current bug fixes release-1.1.3) git merge --no-ff develop
>> (on current bug fixes release-1.1.3) git checkout develop
>> (on develop) git merge --no-ff release-1.1.3
>> git tag release-1.1.3-rc.1
>> git branch -d release-1.1.3
>> git push origin release-1.1.3-rc.1

5. general availability : rc to be sold
> release-1.1.3-ga or release-1.ga
>> if Service with respect to Pricing is ready && no bugs found
>> (on develop) git tag release-1.1.3-ga
>> git push origin release-1.1.3-ga

6. stable : ga to be commercial
> release-1.1.3.stable or release-1.stable or stable/flubo
>> if ga operating for some certain period of time
>> (on develop) git tag release-1.1.3-stable
      or git tag release/flubo
>> git push origin release-1.1.3-stable
      or git push origin release/flubo
