## a Sails application

#Debug
node --debug `which sails` $@ lift
node-inspector &

#Watch
forever -w start app.js
