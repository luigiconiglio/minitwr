function hacktest(message){
	return (message.search('Hacked') != -1 && message.search('<script>') != -1);
}

module.exports = hacktest;
