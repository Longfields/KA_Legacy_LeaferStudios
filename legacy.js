/**
Copyright 2024 @LeaferStudios

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function KA_Legacy_LeaferStudios(min, max, perfect, link, minH, maxH, perfectH) {
	if (window.innerWidth < min || window.innerWidth > max || window.innerHeight > maxH || window.innerHeight < minH) {
		document.body.innerHTML = ` <div style='padding:25px;overflow:scroll;background-color:#FFF;position:fixed;top:0;left:0;right:0;bottom:0;'>
		<h1 style='font-size:35px;font-weight:500;font-family:arial;color:#000 !important;'>Error Detected</h1>
		<p style="font-size:25px;line-height:34px;font-family:arial;color:#000 !important;">Looks like your screen isn't the right size (W: ${window.innerWidth}px, H: ${window.innerHeight}px).<br> <br><a href='${link}?width=${perfect}px&height=${perfectH}px' target="_blank" style='color:rgb(10, 88, 204);font-size:30px;'>Click here to fix it</a><br>Or add<br><b style=''>?width=${perfect}px&height=${perfectH}px</b><br>to the end of the URL.</p>

		<sub style='font-family:arial;color:#555 !important;'>If there is a screen measurement issue, please report it in the Tips & Thanks below! Depending on your device width (especially on mobile), you may have to scroll to view the full program.<br><br><b> Screen size detection</b> powered by <em>KA_Legacy_LeaferStudios</em> version 1.0 by <a href='https://www.khanacademy.org/computer-programming/leaferstudios/4934504502870016' target='_blank' style='color:rgb(10, 88, 204);'>LeaferStudios</a>.</sub>
		</div>
		`;
	} else {
		console.log('Programmed by @LeaferStudios (https://www.khanacademy.org/profile/kaid_553656479258879622339276/)');
	}
};
