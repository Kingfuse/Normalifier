##### :heavy_exclamation_mark: Status :heavy_exclamation_mark:
Should work on all regions as long as the opcodes are mapped. Works on Caali's and Pinkie Pie's tera-proxy.

##### :heavy_exclamation_mark: Installation :heavy_exclamation_mark:
1) Download Normalifier: https://github.com/TeraProxy/Normalifier/archive/master.zip
2) Extract the contents of the zip file into "\tera-proxy\mods\"
3) Done! (the module will auto-update on Caali's proxy when a new version is released)
  
Users of Pinkie's proxy also need to install tera-game-state: https://github.com/caali-hackerman/tera-game-state/archive/master.zip  
  
If you enjoy my work and wish to support future development, feel free to drop me a small donation: [![Donate](https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=A3KBZUCSEQ5RJ)

# Normalifier
A tera-proxy module that blocks specific abnormals in order to not trigger annoying screen effects on your client (e.g. Lein's Dark Root Beer).  
This is a fork of spaacecats' original no-drunk-screen.  

## Usage
The module is enabled by default and will block annoying screen effects.  
  
While in game, open a proxy chat session by typing "/proxy" or "/8" in chat and hitting the space bar.  
This serves as the script's command interface.  
The following commands are supported:  
  
* **norm** - enable/disable Normalifier
* **norm log** - enable/disable logging of abnormal IDs

## Safety
Whatever you send to the proxy chat in game is intercepted client-side. The chat is NOT sent to the server.  

## Credits
Original by spaacecats -> https://github.com/spaacecats

## Changelog
<details>

### 1.0.1
* [~] Minor definition update
### 1.0.0
* [*] Updated abnormal IDs
* [+] Added commands to disable the module and log abnormal IDs

</details>