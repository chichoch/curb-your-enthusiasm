const player = () => 
    {
		setTimeout(() => {
		    try {
			    document.getElementById('audio').play();
		    }
		    catch (e) {
                alert('Click ok!');
				player();
			}
		}, 1000);
	};
player();

