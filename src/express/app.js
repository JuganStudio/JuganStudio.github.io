import express from 'express';

const app = express();

app.use(express.static(__dirname + '/../public'));

app.use('/api', (req, res) => {
	let async_ret = test_func2();
	res.send('Hello, World!' + async_ret);
})


const server = app.listen(3000, () => {
	console.log('Express listening on port 3000');
})

function test_func() {
	let promise = new Promise(function(resolve, reject) {
		setInterval( () => {
			resolve('return from test_func after 1sec');
		}, 1000)
	});

	return promise;
}

async function test_func2() {
	let ret = await test_func();

	return ret;
}
