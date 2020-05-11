# New Tab Wallpaper Carousel
Scroll through a wallpaper carousel on opening a new tab in Firefox

## Add-On link
You can find this add-on [here](https://addons.mozilla.org/en-US/firefox/addon/new-tab-wallpaper-carousel/).

## Description
On opening a new tab, 15 HD wallpapers using the random or the featured *Unsplash API* get displayed in a carousel with options for manual scrolling on click or auto scrolling by providing a time duration, along with day, month, date, year, and time shown.

## Features
1. 15 different wallpapers are set for every new tab.
1. One can scroll through the carousel on click i.e. manually, using the left right navigation icons.
1. The first wallpaper has the left navigation icon disabled and the last wallpaper has the right navigation icon disabled in the on click mode i.e. no wrap around from first to last and vice-versa.
1. One can choose to set auto scroll and specify a duration >= 2 s which results in automatic sliding of the carousel with wrap around.
1. If a duration < 2 s is specified, or if it is left unspecified, an error message gets displayed exactly below the options which lasts for 3 s and then disappears.
1. Once auto scroll has begun, the auto scroll option is disabled. To specify a different duration, first click on the on click option, which stops auto scroll and returns the carousel to the state used when navigating on click, and then a different duration can be specified for auto scroll again.
1. The Unsplash Gallery option has two galleries (*Unsplash APIs*) to select from, random and featured. To begin with, the wallpapers get selected from the random API.
1. If the featured API is selected, 15 new wallpapers replace the existing ones within the same tab. The random API can then be selected again to trigger said replacement again.
1. Selecting random API when the current wallpapers have been selected from the same API has no effect. Same goes with the featured API.
1. Every wallpaper displays day, month, date, year and current running time.
1. All the elements overlapping the wallpapers switch between dark and light styles dynamically depending upon the average brightness of the wallpaper sections behind them, to provide contrast.
1. A 'Click 2 s after current wallpaper load' message gets displayed when hovered over the navigation icons.
1. Clicking on the add-on icon in the Firefox/Chrome toolbar launches a new tab with the wallpaper carousel enabled.

## Images
*Unplash gallery dark style*
![Unplash gallery dark style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237603.png?modified=1589092726)

*Auto scroll light style*
![Auto scroll light style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237604.png?modified=1589092724)

*On click dark style*
![On click dark style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237605.png?modified=1589092728)

*Different styles for overlapping elements*
![Different styles for overlapping elements](https://addons.cdn.mozilla.net/user-media/previews/full/237/237606.png?modified=1589092727)
![Different styles for overlapping elements](https://addons.cdn.mozilla.net/user-media/previews/full/237/237607.png?modified=1589092723)
![Different styles for overlapping elements](https://addons.cdn.mozilla.net/user-media/previews/full/237/237608.png?modified=1589092724)

*Unplash gallery light style*
![Unplash gallery light style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237609.png?modified=1589092725)

*Dark style for overlapping elements*
![Dark style for overlapping elements](https://addons.cdn.mozilla.net/user-media/previews/full/237/237610.png?modified=1589092729)

*On click light style*
![On click light style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237611.png?modified=1589092725)

*Auto scroll dark style*
![Auto scroll dark style](https://addons.cdn.mozilla.net/user-media/previews/full/237/237612.png?modified=1589092727)

*Unplash gallery dark style - featured*
![Unplash gallery dark style - featured](https://addons.cdn.mozilla.net/user-media/previews/full/237/237613.png?modified=1589092725)

*Unplash gallery dark style - random*
![Unplash gallery dark style - random](https://addons.cdn.mozilla.net/user-media/previews/full/237/237614.png?modified=1589092727)

## Using the extension for Chrome
1. Git clone (or download and unzip) the repository locally.
1. Rename **manifest-chrome.json** to **manifest.json**.
1. Open Chrome settings, and from more tools, select extensions.
1. Enable the developer mode option.
1. Click on **Load Unpacked**.
1. Select the repository's local folder.
1. The extension has been enabled. You can launch a new tab and check it out for yourself!
