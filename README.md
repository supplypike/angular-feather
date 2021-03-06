## angular-feather

[![npm](https://img.shields.io/npm/v/angular-feather.svg?style=flat-square)]()
[![license](https://img.shields.io/npm/l/angular-feather.svg?style=flat-square)]()
[![stars](https://img.shields.io/github/stars/michaelbazos/angular-feather.svg?style=flat-square)]()
[![deps status](https://david-dm.org/michaelbazos/angular-feather/status.svg?style=flat-square)](https://david-dm.org/michaelbazos/angular-feather)

### Description

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis.
Import only the icons that you need.

### Demo
<h4>
  <a href="https://stackblitz.com/edit/angular-feather?file=src%2Fapp%2Fapp.component.html">
    >> See live demo <<
  </a>
</h4>

### Usage

_1. Install the package_

```sh
npm install angular-feather
```

_2. Generate a module to host the icons you'll import_
 
```sh
ng generate module icons
```
  
_3. Import only the components you need_
  
Declare the icons that your application depends on in _IconsModule_, and export them so that the consumer of _IconsModule_ has access to them.

```ts  
import { NgModule } from '@angular/core';
import { IconCamera, IconHeart, IconGithub } from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub
];

@NgModule({
  exports: icons
})
export class IconsModule { }
```

_3. Use it in template_

After importing the _IconsModule_ where appropriate, use the icons.

```html
<i-heart></i-heart>
<i-github class="someclass"></i-github>
<i-camera style="fill: red;"></i-camera>
```



### Styling icons

As per angular-feather 5.1.0, icons can be customised with any CSS property that you can apply on a SVG element.

```html
<i-heart class="big fill-red"></i-heart>
```

```css
.big {
  height: 50px;
  width: 50px;
}

.fill-red {
  fill: red;
}
```

### Available icons

Refer to the table below for the list of all available icons.

|     | Symbol to import | Component selector |
| --- | ---------------- | ------------------ |
| ![activity](https://unpkg.com/feather-icons@4.19.0/dist/icons/activity.svg) | `IconActivity` | `<i-activity>` |
| ![airplay](https://unpkg.com/feather-icons@4.19.0/dist/icons/airplay.svg) | `IconAirplay` | `<i-airplay>` |
| ![alert-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/alert-circle.svg) | `IconAlertCircle` | `<i-alert-circle>` |
| ![alert-octagon](https://unpkg.com/feather-icons@4.19.0/dist/icons/alert-octagon.svg) | `IconAlertOctagon` | `<i-alert-octagon>` |
| ![alert-triangle](https://unpkg.com/feather-icons@4.19.0/dist/icons/alert-triangle.svg) | `IconAlertTriangle` | `<i-alert-triangle>` |
| ![align-center](https://unpkg.com/feather-icons@4.19.0/dist/icons/align-center.svg) | `IconAlignCenter` | `<i-align-center>` |
| ![align-justify](https://unpkg.com/feather-icons@4.19.0/dist/icons/align-justify.svg) | `IconAlignJustify` | `<i-align-justify>` |
| ![align-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/align-left.svg) | `IconAlignLeft` | `<i-align-left>` |
| ![align-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/align-right.svg) | `IconAlignRight` | `<i-align-right>` |
| ![anchor](https://unpkg.com/feather-icons@4.19.0/dist/icons/anchor.svg) | `IconAnchor` | `<i-anchor>` |
| ![aperture](https://unpkg.com/feather-icons@4.19.0/dist/icons/aperture.svg) | `IconAperture` | `<i-aperture>` |
| ![archive](https://unpkg.com/feather-icons@4.19.0/dist/icons/archive.svg) | `IconArchive` | `<i-archive>` |
| ![arrow-down-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-down-circle.svg) | `IconArrowDownCircle` | `<i-arrow-down-circle>` |
| ![arrow-down-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-down-left.svg) | `IconArrowDownLeft` | `<i-arrow-down-left>` |
| ![arrow-down-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-down-right.svg) | `IconArrowDownRight` | `<i-arrow-down-right>` |
| ![arrow-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-down.svg) | `IconArrowDown` | `<i-arrow-down>` |
| ![arrow-left-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-left-circle.svg) | `IconArrowLeftCircle` | `<i-arrow-left-circle>` |
| ![arrow-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-left.svg) | `IconArrowLeft` | `<i-arrow-left>` |
| ![arrow-right-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-right-circle.svg) | `IconArrowRightCircle` | `<i-arrow-right-circle>` |
| ![arrow-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-right.svg) | `IconArrowRight` | `<i-arrow-right>` |
| ![arrow-up-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-up-circle.svg) | `IconArrowUpCircle` | `<i-arrow-up-circle>` |
| ![arrow-up-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-up-left.svg) | `IconArrowUpLeft` | `<i-arrow-up-left>` |
| ![arrow-up-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-up-right.svg) | `IconArrowUpRight` | `<i-arrow-up-right>` |
| ![arrow-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/arrow-up.svg) | `IconArrowUp` | `<i-arrow-up>` |
| ![at-sign](https://unpkg.com/feather-icons@4.19.0/dist/icons/at-sign.svg) | `IconAtSign` | `<i-at-sign>` |
| ![award](https://unpkg.com/feather-icons@4.19.0/dist/icons/award.svg) | `IconAward` | `<i-award>` |
| ![bar-chart-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/bar-chart-2.svg) | `IconBarChart2` | `<i-bar-chart-2>` |
| ![bar-chart](https://unpkg.com/feather-icons@4.19.0/dist/icons/bar-chart.svg) | `IconBarChart` | `<i-bar-chart>` |
| ![battery-charging](https://unpkg.com/feather-icons@4.19.0/dist/icons/battery-charging.svg) | `IconBatteryCharging` | `<i-battery-charging>` |
| ![battery](https://unpkg.com/feather-icons@4.19.0/dist/icons/battery.svg) | `IconBattery` | `<i-battery>` |
| ![bell-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/bell-off.svg) | `IconBellOff` | `<i-bell-off>` |
| ![bell](https://unpkg.com/feather-icons@4.19.0/dist/icons/bell.svg) | `IconBell` | `<i-bell>` |
| ![bluetooth](https://unpkg.com/feather-icons@4.19.0/dist/icons/bluetooth.svg) | `IconBluetooth` | `<i-bluetooth>` |
| ![bold](https://unpkg.com/feather-icons@4.19.0/dist/icons/bold.svg) | `IconBold` | `<i-bold>` |
| ![book-open](https://unpkg.com/feather-icons@4.19.0/dist/icons/book-open.svg) | `IconBookOpen` | `<i-book-open>` |
| ![book](https://unpkg.com/feather-icons@4.19.0/dist/icons/book.svg) | `IconBook` | `<i-book>` |
| ![bookmark](https://unpkg.com/feather-icons@4.19.0/dist/icons/bookmark.svg) | `IconBookmark` | `<i-bookmark>` |
| ![box](https://unpkg.com/feather-icons@4.19.0/dist/icons/box.svg) | `IconBox` | `<i-box>` |
| ![briefcase](https://unpkg.com/feather-icons@4.19.0/dist/icons/briefcase.svg) | `IconBriefcase` | `<i-briefcase>` |
| ![calendar](https://unpkg.com/feather-icons@4.19.0/dist/icons/calendar.svg) | `IconCalendar` | `<i-calendar>` |
| ![camera-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/camera-off.svg) | `IconCameraOff` | `<i-camera-off>` |
| ![camera](https://unpkg.com/feather-icons@4.19.0/dist/icons/camera.svg) | `IconCamera` | `<i-camera>` |
| ![cast](https://unpkg.com/feather-icons@4.19.0/dist/icons/cast.svg) | `IconCast` | `<i-cast>` |
| ![check-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/check-circle.svg) | `IconCheckCircle` | `<i-check-circle>` |
| ![check-square](https://unpkg.com/feather-icons@4.19.0/dist/icons/check-square.svg) | `IconCheckSquare` | `<i-check-square>` |
| ![check](https://unpkg.com/feather-icons@4.19.0/dist/icons/check.svg) | `IconCheck` | `<i-check>` |
| ![chevron-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevron-down.svg) | `IconChevronDown` | `<i-chevron-down>` |
| ![chevron-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevron-left.svg) | `IconChevronLeft` | `<i-chevron-left>` |
| ![chevron-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevron-right.svg) | `IconChevronRight` | `<i-chevron-right>` |
| ![chevron-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevron-up.svg) | `IconChevronUp` | `<i-chevron-up>` |
| ![chevrons-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevrons-down.svg) | `IconChevronsDown` | `<i-chevrons-down>` |
| ![chevrons-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevrons-left.svg) | `IconChevronsLeft` | `<i-chevrons-left>` |
| ![chevrons-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevrons-right.svg) | `IconChevronsRight` | `<i-chevrons-right>` |
| ![chevrons-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/chevrons-up.svg) | `IconChevronsUp` | `<i-chevrons-up>` |
| ![chrome](https://unpkg.com/feather-icons@4.19.0/dist/icons/chrome.svg) | `IconChrome` | `<i-chrome>` |
| ![circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/circle.svg) | `IconCircle` | `<i-circle>` |
| ![clipboard](https://unpkg.com/feather-icons@4.19.0/dist/icons/clipboard.svg) | `IconClipboard` | `<i-clipboard>` |
| ![clock](https://unpkg.com/feather-icons@4.19.0/dist/icons/clock.svg) | `IconClock` | `<i-clock>` |
| ![cloud-drizzle](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud-drizzle.svg) | `IconCloudDrizzle` | `<i-cloud-drizzle>` |
| ![cloud-lightning](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud-lightning.svg) | `IconCloudLightning` | `<i-cloud-lightning>` |
| ![cloud-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud-off.svg) | `IconCloudOff` | `<i-cloud-off>` |
| ![cloud-rain](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud-rain.svg) | `IconCloudRain` | `<i-cloud-rain>` |
| ![cloud-snow](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud-snow.svg) | `IconCloudSnow` | `<i-cloud-snow>` |
| ![cloud](https://unpkg.com/feather-icons@4.19.0/dist/icons/cloud.svg) | `IconCloud` | `<i-cloud>` |
| ![code](https://unpkg.com/feather-icons@4.19.0/dist/icons/code.svg) | `IconCode` | `<i-code>` |
| ![codepen](https://unpkg.com/feather-icons@4.19.0/dist/icons/codepen.svg) | `IconCodepen` | `<i-codepen>` |
| ![coffee](https://unpkg.com/feather-icons@4.19.0/dist/icons/coffee.svg) | `IconCoffee` | `<i-coffee>` |
| ![command](https://unpkg.com/feather-icons@4.19.0/dist/icons/command.svg) | `IconCommand` | `<i-command>` |
| ![compass](https://unpkg.com/feather-icons@4.19.0/dist/icons/compass.svg) | `IconCompass` | `<i-compass>` |
| ![copy](https://unpkg.com/feather-icons@4.19.0/dist/icons/copy.svg) | `IconCopy` | `<i-copy>` |
| ![corner-down-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-down-left.svg) | `IconCornerDownLeft` | `<i-corner-down-left>` |
| ![corner-down-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-down-right.svg) | `IconCornerDownRight` | `<i-corner-down-right>` |
| ![corner-left-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-left-down.svg) | `IconCornerLeftDown` | `<i-corner-left-down>` |
| ![corner-left-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-left-up.svg) | `IconCornerLeftUp` | `<i-corner-left-up>` |
| ![corner-right-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-right-down.svg) | `IconCornerRightDown` | `<i-corner-right-down>` |
| ![corner-right-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-right-up.svg) | `IconCornerRightUp` | `<i-corner-right-up>` |
| ![corner-up-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-up-left.svg) | `IconCornerUpLeft` | `<i-corner-up-left>` |
| ![corner-up-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/corner-up-right.svg) | `IconCornerUpRight` | `<i-corner-up-right>` |
| ![cpu](https://unpkg.com/feather-icons@4.19.0/dist/icons/cpu.svg) | `IconCpu` | `<i-cpu>` |
| ![credit-card](https://unpkg.com/feather-icons@4.19.0/dist/icons/credit-card.svg) | `IconCreditCard` | `<i-credit-card>` |
| ![crop](https://unpkg.com/feather-icons@4.19.0/dist/icons/crop.svg) | `IconCrop` | `<i-crop>` |
| ![crosshair](https://unpkg.com/feather-icons@4.19.0/dist/icons/crosshair.svg) | `IconCrosshair` | `<i-crosshair>` |
| ![database](https://unpkg.com/feather-icons@4.19.0/dist/icons/database.svg) | `IconDatabase` | `<i-database>` |
| ![delete](https://unpkg.com/feather-icons@4.19.0/dist/icons/delete.svg) | `IconDelete` | `<i-delete>` |
| ![disc](https://unpkg.com/feather-icons@4.19.0/dist/icons/disc.svg) | `IconDisc` | `<i-disc>` |
| ![dollar-sign](https://unpkg.com/feather-icons@4.19.0/dist/icons/dollar-sign.svg) | `IconDollarSign` | `<i-dollar-sign>` |
| ![download-cloud](https://unpkg.com/feather-icons@4.19.0/dist/icons/download-cloud.svg) | `IconDownloadCloud` | `<i-download-cloud>` |
| ![download](https://unpkg.com/feather-icons@4.19.0/dist/icons/download.svg) | `IconDownload` | `<i-download>` |
| ![droplet](https://unpkg.com/feather-icons@4.19.0/dist/icons/droplet.svg) | `IconDroplet` | `<i-droplet>` |
| ![edit-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/edit-2.svg) | `IconEdit2` | `<i-edit-2>` |
| ![edit-3](https://unpkg.com/feather-icons@4.19.0/dist/icons/edit-3.svg) | `IconEdit3` | `<i-edit-3>` |
| ![edit](https://unpkg.com/feather-icons@4.19.0/dist/icons/edit.svg) | `IconEdit` | `<i-edit>` |
| ![external-link](https://unpkg.com/feather-icons@4.19.0/dist/icons/external-link.svg) | `IconExternalLink` | `<i-external-link>` |
| ![eye-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/eye-off.svg) | `IconEyeOff` | `<i-eye-off>` |
| ![eye](https://unpkg.com/feather-icons@4.19.0/dist/icons/eye.svg) | `IconEye` | `<i-eye>` |
| ![facebook](https://unpkg.com/feather-icons@4.19.0/dist/icons/facebook.svg) | `IconFacebook` | `<i-facebook>` |
| ![fast-forward](https://unpkg.com/feather-icons@4.19.0/dist/icons/fast-forward.svg) | `IconFastForward` | `<i-fast-forward>` |
| ![feather](https://unpkg.com/feather-icons@4.19.0/dist/icons/feather.svg) | `IconFeather` | `<i-feather>` |
| ![figma](https://unpkg.com/feather-icons@4.19.0/dist/icons/figma.svg) | `IconFigma` | `<i-figma>` |
| ![file-minus](https://unpkg.com/feather-icons@4.19.0/dist/icons/file-minus.svg) | `IconFileMinus` | `<i-file-minus>` |
| ![file-plus](https://unpkg.com/feather-icons@4.19.0/dist/icons/file-plus.svg) | `IconFilePlus` | `<i-file-plus>` |
| ![file-text](https://unpkg.com/feather-icons@4.19.0/dist/icons/file-text.svg) | `IconFileText` | `<i-file-text>` |
| ![file](https://unpkg.com/feather-icons@4.19.0/dist/icons/file.svg) | `IconFile` | `<i-file>` |
| ![film](https://unpkg.com/feather-icons@4.19.0/dist/icons/film.svg) | `IconFilm` | `<i-film>` |
| ![filter](https://unpkg.com/feather-icons@4.19.0/dist/icons/filter.svg) | `IconFilter` | `<i-filter>` |
| ![flag](https://unpkg.com/feather-icons@4.19.0/dist/icons/flag.svg) | `IconFlag` | `<i-flag>` |
| ![folder-minus](https://unpkg.com/feather-icons@4.19.0/dist/icons/folder-minus.svg) | `IconFolderMinus` | `<i-folder-minus>` |
| ![folder-plus](https://unpkg.com/feather-icons@4.19.0/dist/icons/folder-plus.svg) | `IconFolderPlus` | `<i-folder-plus>` |
| ![folder](https://unpkg.com/feather-icons@4.19.0/dist/icons/folder.svg) | `IconFolder` | `<i-folder>` |
| ![frown](https://unpkg.com/feather-icons@4.19.0/dist/icons/frown.svg) | `IconFrown` | `<i-frown>` |
| ![gift](https://unpkg.com/feather-icons@4.19.0/dist/icons/gift.svg) | `IconGift` | `<i-gift>` |
| ![git-branch](https://unpkg.com/feather-icons@4.19.0/dist/icons/git-branch.svg) | `IconGitBranch` | `<i-git-branch>` |
| ![git-commit](https://unpkg.com/feather-icons@4.19.0/dist/icons/git-commit.svg) | `IconGitCommit` | `<i-git-commit>` |
| ![git-merge](https://unpkg.com/feather-icons@4.19.0/dist/icons/git-merge.svg) | `IconGitMerge` | `<i-git-merge>` |
| ![git-pull-request](https://unpkg.com/feather-icons@4.19.0/dist/icons/git-pull-request.svg) | `IconGitPullRequest` | `<i-git-pull-request>` |
| ![github](https://unpkg.com/feather-icons@4.19.0/dist/icons/github.svg) | `IconGithub` | `<i-github>` |
| ![gitlab](https://unpkg.com/feather-icons@4.19.0/dist/icons/gitlab.svg) | `IconGitlab` | `<i-gitlab>` |
| ![globe](https://unpkg.com/feather-icons@4.19.0/dist/icons/globe.svg) | `IconGlobe` | `<i-globe>` |
| ![grid](https://unpkg.com/feather-icons@4.19.0/dist/icons/grid.svg) | `IconGrid` | `<i-grid>` |
| ![hard-drive](https://unpkg.com/feather-icons@4.19.0/dist/icons/hard-drive.svg) | `IconHardDrive` | `<i-hard-drive>` |
| ![hash](https://unpkg.com/feather-icons@4.19.0/dist/icons/hash.svg) | `IconHash` | `<i-hash>` |
| ![headphones](https://unpkg.com/feather-icons@4.19.0/dist/icons/headphones.svg) | `IconHeadphones` | `<i-headphones>` |
| ![heart](https://unpkg.com/feather-icons@4.19.0/dist/icons/heart.svg) | `IconHeart` | `<i-heart>` |
| ![help-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/help-circle.svg) | `IconHelpCircle` | `<i-help-circle>` |
| ![home](https://unpkg.com/feather-icons@4.19.0/dist/icons/home.svg) | `IconHome` | `<i-home>` |
| ![image](https://unpkg.com/feather-icons@4.19.0/dist/icons/image.svg) | `IconImage` | `<i-image>` |
| ![inbox](https://unpkg.com/feather-icons@4.19.0/dist/icons/inbox.svg) | `IconInbox` | `<i-inbox>` |
| ![info](https://unpkg.com/feather-icons@4.19.0/dist/icons/info.svg) | `IconInfo` | `<i-info>` |
| ![instagram](https://unpkg.com/feather-icons@4.19.0/dist/icons/instagram.svg) | `IconInstagram` | `<i-instagram>` |
| ![italic](https://unpkg.com/feather-icons@4.19.0/dist/icons/italic.svg) | `IconItalic` | `<i-italic>` |
| ![key](https://unpkg.com/feather-icons@4.19.0/dist/icons/key.svg) | `IconKey` | `<i-key>` |
| ![layers](https://unpkg.com/feather-icons@4.19.0/dist/icons/layers.svg) | `IconLayers` | `<i-layers>` |
| ![layout](https://unpkg.com/feather-icons@4.19.0/dist/icons/layout.svg) | `IconLayout` | `<i-layout>` |
| ![life-buoy](https://unpkg.com/feather-icons@4.19.0/dist/icons/life-buoy.svg) | `IconLifeBuoy` | `<i-life-buoy>` |
| ![link-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/link-2.svg) | `IconLink2` | `<i-link-2>` |
| ![link](https://unpkg.com/feather-icons@4.19.0/dist/icons/link.svg) | `IconLink` | `<i-link>` |
| ![linkedin](https://unpkg.com/feather-icons@4.19.0/dist/icons/linkedin.svg) | `IconLinkedin` | `<i-linkedin>` |
| ![list](https://unpkg.com/feather-icons@4.19.0/dist/icons/list.svg) | `IconList` | `<i-list>` |
| ![loader](https://unpkg.com/feather-icons@4.19.0/dist/icons/loader.svg) | `IconLoader` | `<i-loader>` |
| ![lock](https://unpkg.com/feather-icons@4.19.0/dist/icons/lock.svg) | `IconLock` | `<i-lock>` |
| ![log-in](https://unpkg.com/feather-icons@4.19.0/dist/icons/log-in.svg) | `IconLogIn` | `<i-log-in>` |
| ![log-out](https://unpkg.com/feather-icons@4.19.0/dist/icons/log-out.svg) | `IconLogOut` | `<i-log-out>` |
| ![mail](https://unpkg.com/feather-icons@4.19.0/dist/icons/mail.svg) | `IconMail` | `<i-mail>` |
| ![map-pin](https://unpkg.com/feather-icons@4.19.0/dist/icons/map-pin.svg) | `IconMapPin` | `<i-map-pin>` |
| ![map](https://unpkg.com/feather-icons@4.19.0/dist/icons/map.svg) | `IconMap` | `<i-map>` |
| ![maximize-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/maximize-2.svg) | `IconMaximize2` | `<i-maximize-2>` |
| ![maximize](https://unpkg.com/feather-icons@4.19.0/dist/icons/maximize.svg) | `IconMaximize` | `<i-maximize>` |
| ![meh](https://unpkg.com/feather-icons@4.19.0/dist/icons/meh.svg) | `IconMeh` | `<i-meh>` |
| ![menu](https://unpkg.com/feather-icons@4.19.0/dist/icons/menu.svg) | `IconMenu` | `<i-menu>` |
| ![message-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/message-circle.svg) | `IconMessageCircle` | `<i-message-circle>` |
| ![message-square](https://unpkg.com/feather-icons@4.19.0/dist/icons/message-square.svg) | `IconMessageSquare` | `<i-message-square>` |
| ![mic-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/mic-off.svg) | `IconMicOff` | `<i-mic-off>` |
| ![mic](https://unpkg.com/feather-icons@4.19.0/dist/icons/mic.svg) | `IconMic` | `<i-mic>` |
| ![minimize-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/minimize-2.svg) | `IconMinimize2` | `<i-minimize-2>` |
| ![minimize](https://unpkg.com/feather-icons@4.19.0/dist/icons/minimize.svg) | `IconMinimize` | `<i-minimize>` |
| ![minus-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/minus-circle.svg) | `IconMinusCircle` | `<i-minus-circle>` |
| ![minus-square](https://unpkg.com/feather-icons@4.19.0/dist/icons/minus-square.svg) | `IconMinusSquare` | `<i-minus-square>` |
| ![minus](https://unpkg.com/feather-icons@4.19.0/dist/icons/minus.svg) | `IconMinus` | `<i-minus>` |
| ![monitor](https://unpkg.com/feather-icons@4.19.0/dist/icons/monitor.svg) | `IconMonitor` | `<i-monitor>` |
| ![moon](https://unpkg.com/feather-icons@4.19.0/dist/icons/moon.svg) | `IconMoon` | `<i-moon>` |
| ![more-horizontal](https://unpkg.com/feather-icons@4.19.0/dist/icons/more-horizontal.svg) | `IconMoreHorizontal` | `<i-more-horizontal>` |
| ![more-vertical](https://unpkg.com/feather-icons@4.19.0/dist/icons/more-vertical.svg) | `IconMoreVertical` | `<i-more-vertical>` |
| ![mouse-pointer](https://unpkg.com/feather-icons@4.19.0/dist/icons/mouse-pointer.svg) | `IconMousePointer` | `<i-mouse-pointer>` |
| ![move](https://unpkg.com/feather-icons@4.19.0/dist/icons/move.svg) | `IconMove` | `<i-move>` |
| ![music](https://unpkg.com/feather-icons@4.19.0/dist/icons/music.svg) | `IconMusic` | `<i-music>` |
| ![navigation-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/navigation-2.svg) | `IconNavigation2` | `<i-navigation-2>` |
| ![navigation](https://unpkg.com/feather-icons@4.19.0/dist/icons/navigation.svg) | `IconNavigation` | `<i-navigation>` |
| ![octagon](https://unpkg.com/feather-icons@4.19.0/dist/icons/octagon.svg) | `IconOctagon` | `<i-octagon>` |
| ![package](https://unpkg.com/feather-icons@4.19.0/dist/icons/package.svg) | `IconPackage` | `<i-package>` |
| ![paperclip](https://unpkg.com/feather-icons@4.19.0/dist/icons/paperclip.svg) | `IconPaperclip` | `<i-paperclip>` |
| ![pause-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/pause-circle.svg) | `IconPauseCircle` | `<i-pause-circle>` |
| ![pause](https://unpkg.com/feather-icons@4.19.0/dist/icons/pause.svg) | `IconPause` | `<i-pause>` |
| ![pen-tool](https://unpkg.com/feather-icons@4.19.0/dist/icons/pen-tool.svg) | `IconPenTool` | `<i-pen-tool>` |
| ![percent](https://unpkg.com/feather-icons@4.19.0/dist/icons/percent.svg) | `IconPercent` | `<i-percent>` |
| ![phone-call](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-call.svg) | `IconPhoneCall` | `<i-phone-call>` |
| ![phone-forwarded](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-forwarded.svg) | `IconPhoneForwarded` | `<i-phone-forwarded>` |
| ![phone-incoming](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-incoming.svg) | `IconPhoneIncoming` | `<i-phone-incoming>` |
| ![phone-missed](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-missed.svg) | `IconPhoneMissed` | `<i-phone-missed>` |
| ![phone-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-off.svg) | `IconPhoneOff` | `<i-phone-off>` |
| ![phone-outgoing](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone-outgoing.svg) | `IconPhoneOutgoing` | `<i-phone-outgoing>` |
| ![phone](https://unpkg.com/feather-icons@4.19.0/dist/icons/phone.svg) | `IconPhone` | `<i-phone>` |
| ![pie-chart](https://unpkg.com/feather-icons@4.19.0/dist/icons/pie-chart.svg) | `IconPieChart` | `<i-pie-chart>` |
| ![play-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/play-circle.svg) | `IconPlayCircle` | `<i-play-circle>` |
| ![play](https://unpkg.com/feather-icons@4.19.0/dist/icons/play.svg) | `IconPlay` | `<i-play>` |
| ![plus-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/plus-circle.svg) | `IconPlusCircle` | `<i-plus-circle>` |
| ![plus-square](https://unpkg.com/feather-icons@4.19.0/dist/icons/plus-square.svg) | `IconPlusSquare` | `<i-plus-square>` |
| ![plus](https://unpkg.com/feather-icons@4.19.0/dist/icons/plus.svg) | `IconPlus` | `<i-plus>` |
| ![pocket](https://unpkg.com/feather-icons@4.19.0/dist/icons/pocket.svg) | `IconPocket` | `<i-pocket>` |
| ![power](https://unpkg.com/feather-icons@4.19.0/dist/icons/power.svg) | `IconPower` | `<i-power>` |
| ![printer](https://unpkg.com/feather-icons@4.19.0/dist/icons/printer.svg) | `IconPrinter` | `<i-printer>` |
| ![radio](https://unpkg.com/feather-icons@4.19.0/dist/icons/radio.svg) | `IconRadio` | `<i-radio>` |
| ![refresh-ccw](https://unpkg.com/feather-icons@4.19.0/dist/icons/refresh-ccw.svg) | `IconRefreshCcw` | `<i-refresh-ccw>` |
| ![refresh-cw](https://unpkg.com/feather-icons@4.19.0/dist/icons/refresh-cw.svg) | `IconRefreshCw` | `<i-refresh-cw>` |
| ![repeat](https://unpkg.com/feather-icons@4.19.0/dist/icons/repeat.svg) | `IconRepeat` | `<i-repeat>` |
| ![rewind](https://unpkg.com/feather-icons@4.19.0/dist/icons/rewind.svg) | `IconRewind` | `<i-rewind>` |
| ![rotate-ccw](https://unpkg.com/feather-icons@4.19.0/dist/icons/rotate-ccw.svg) | `IconRotateCcw` | `<i-rotate-ccw>` |
| ![rotate-cw](https://unpkg.com/feather-icons@4.19.0/dist/icons/rotate-cw.svg) | `IconRotateCw` | `<i-rotate-cw>` |
| ![rss](https://unpkg.com/feather-icons@4.19.0/dist/icons/rss.svg) | `IconRss` | `<i-rss>` |
| ![save](https://unpkg.com/feather-icons@4.19.0/dist/icons/save.svg) | `IconSave` | `<i-save>` |
| ![scissors](https://unpkg.com/feather-icons@4.19.0/dist/icons/scissors.svg) | `IconScissors` | `<i-scissors>` |
| ![search](https://unpkg.com/feather-icons@4.19.0/dist/icons/search.svg) | `IconSearch` | `<i-search>` |
| ![send](https://unpkg.com/feather-icons@4.19.0/dist/icons/send.svg) | `IconSend` | `<i-send>` |
| ![server](https://unpkg.com/feather-icons@4.19.0/dist/icons/server.svg) | `IconServer` | `<i-server>` |
| ![settings](https://unpkg.com/feather-icons@4.19.0/dist/icons/settings.svg) | `IconSettings` | `<i-settings>` |
| ![share-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/share-2.svg) | `IconShare2` | `<i-share-2>` |
| ![share](https://unpkg.com/feather-icons@4.19.0/dist/icons/share.svg) | `IconShare` | `<i-share>` |
| ![shield-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/shield-off.svg) | `IconShieldOff` | `<i-shield-off>` |
| ![shield](https://unpkg.com/feather-icons@4.19.0/dist/icons/shield.svg) | `IconShield` | `<i-shield>` |
| ![shopping-bag](https://unpkg.com/feather-icons@4.19.0/dist/icons/shopping-bag.svg) | `IconShoppingBag` | `<i-shopping-bag>` |
| ![shopping-cart](https://unpkg.com/feather-icons@4.19.0/dist/icons/shopping-cart.svg) | `IconShoppingCart` | `<i-shopping-cart>` |
| ![shuffle](https://unpkg.com/feather-icons@4.19.0/dist/icons/shuffle.svg) | `IconShuffle` | `<i-shuffle>` |
| ![sidebar](https://unpkg.com/feather-icons@4.19.0/dist/icons/sidebar.svg) | `IconSidebar` | `<i-sidebar>` |
| ![skip-back](https://unpkg.com/feather-icons@4.19.0/dist/icons/skip-back.svg) | `IconSkipBack` | `<i-skip-back>` |
| ![skip-forward](https://unpkg.com/feather-icons@4.19.0/dist/icons/skip-forward.svg) | `IconSkipForward` | `<i-skip-forward>` |
| ![slack](https://unpkg.com/feather-icons@4.19.0/dist/icons/slack.svg) | `IconSlack` | `<i-slack>` |
| ![slash](https://unpkg.com/feather-icons@4.19.0/dist/icons/slash.svg) | `IconSlash` | `<i-slash>` |
| ![sliders](https://unpkg.com/feather-icons@4.19.0/dist/icons/sliders.svg) | `IconSliders` | `<i-sliders>` |
| ![smartphone](https://unpkg.com/feather-icons@4.19.0/dist/icons/smartphone.svg) | `IconSmartphone` | `<i-smartphone>` |
| ![smile](https://unpkg.com/feather-icons@4.19.0/dist/icons/smile.svg) | `IconSmile` | `<i-smile>` |
| ![speaker](https://unpkg.com/feather-icons@4.19.0/dist/icons/speaker.svg) | `IconSpeaker` | `<i-speaker>` |
| ![square](https://unpkg.com/feather-icons@4.19.0/dist/icons/square.svg) | `IconSquare` | `<i-square>` |
| ![star](https://unpkg.com/feather-icons@4.19.0/dist/icons/star.svg) | `IconStar` | `<i-star>` |
| ![stop-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/stop-circle.svg) | `IconStopCircle` | `<i-stop-circle>` |
| ![sun](https://unpkg.com/feather-icons@4.19.0/dist/icons/sun.svg) | `IconSun` | `<i-sun>` |
| ![sunrise](https://unpkg.com/feather-icons@4.19.0/dist/icons/sunrise.svg) | `IconSunrise` | `<i-sunrise>` |
| ![sunset](https://unpkg.com/feather-icons@4.19.0/dist/icons/sunset.svg) | `IconSunset` | `<i-sunset>` |
| ![tablet](https://unpkg.com/feather-icons@4.19.0/dist/icons/tablet.svg) | `IconTablet` | `<i-tablet>` |
| ![tag](https://unpkg.com/feather-icons@4.19.0/dist/icons/tag.svg) | `IconTag` | `<i-tag>` |
| ![target](https://unpkg.com/feather-icons@4.19.0/dist/icons/target.svg) | `IconTarget` | `<i-target>` |
| ![terminal](https://unpkg.com/feather-icons@4.19.0/dist/icons/terminal.svg) | `IconTerminal` | `<i-terminal>` |
| ![thermometer](https://unpkg.com/feather-icons@4.19.0/dist/icons/thermometer.svg) | `IconThermometer` | `<i-thermometer>` |
| ![thumbs-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/thumbs-down.svg) | `IconThumbsDown` | `<i-thumbs-down>` |
| ![thumbs-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/thumbs-up.svg) | `IconThumbsUp` | `<i-thumbs-up>` |
| ![toggle-left](https://unpkg.com/feather-icons@4.19.0/dist/icons/toggle-left.svg) | `IconToggleLeft` | `<i-toggle-left>` |
| ![toggle-right](https://unpkg.com/feather-icons@4.19.0/dist/icons/toggle-right.svg) | `IconToggleRight` | `<i-toggle-right>` |
| ![trash-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/trash-2.svg) | `IconTrash2` | `<i-trash-2>` |
| ![trash](https://unpkg.com/feather-icons@4.19.0/dist/icons/trash.svg) | `IconTrash` | `<i-trash>` |
| ![trello](https://unpkg.com/feather-icons@4.19.0/dist/icons/trello.svg) | `IconTrello` | `<i-trello>` |
| ![trending-down](https://unpkg.com/feather-icons@4.19.0/dist/icons/trending-down.svg) | `IconTrendingDown` | `<i-trending-down>` |
| ![trending-up](https://unpkg.com/feather-icons@4.19.0/dist/icons/trending-up.svg) | `IconTrendingUp` | `<i-trending-up>` |
| ![triangle](https://unpkg.com/feather-icons@4.19.0/dist/icons/triangle.svg) | `IconTriangle` | `<i-triangle>` |
| ![truck](https://unpkg.com/feather-icons@4.19.0/dist/icons/truck.svg) | `IconTruck` | `<i-truck>` |
| ![tv](https://unpkg.com/feather-icons@4.19.0/dist/icons/tv.svg) | `IconTv` | `<i-tv>` |
| ![twitter](https://unpkg.com/feather-icons@4.19.0/dist/icons/twitter.svg) | `IconTwitter` | `<i-twitter>` |
| ![type](https://unpkg.com/feather-icons@4.19.0/dist/icons/type.svg) | `IconType` | `<i-type>` |
| ![umbrella](https://unpkg.com/feather-icons@4.19.0/dist/icons/umbrella.svg) | `IconUmbrella` | `<i-umbrella>` |
| ![underline](https://unpkg.com/feather-icons@4.19.0/dist/icons/underline.svg) | `IconUnderline` | `<i-underline>` |
| ![unlock](https://unpkg.com/feather-icons@4.19.0/dist/icons/unlock.svg) | `IconUnlock` | `<i-unlock>` |
| ![upload-cloud](https://unpkg.com/feather-icons@4.19.0/dist/icons/upload-cloud.svg) | `IconUploadCloud` | `<i-upload-cloud>` |
| ![upload](https://unpkg.com/feather-icons@4.19.0/dist/icons/upload.svg) | `IconUpload` | `<i-upload>` |
| ![user-check](https://unpkg.com/feather-icons@4.19.0/dist/icons/user-check.svg) | `IconUserCheck` | `<i-user-check>` |
| ![user-minus](https://unpkg.com/feather-icons@4.19.0/dist/icons/user-minus.svg) | `IconUserMinus` | `<i-user-minus>` |
| ![user-plus](https://unpkg.com/feather-icons@4.19.0/dist/icons/user-plus.svg) | `IconUserPlus` | `<i-user-plus>` |
| ![user-x](https://unpkg.com/feather-icons@4.19.0/dist/icons/user-x.svg) | `IconUserX` | `<i-user-x>` |
| ![user](https://unpkg.com/feather-icons@4.19.0/dist/icons/user.svg) | `IconUser` | `<i-user>` |
| ![users](https://unpkg.com/feather-icons@4.19.0/dist/icons/users.svg) | `IconUsers` | `<i-users>` |
| ![video-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/video-off.svg) | `IconVideoOff` | `<i-video-off>` |
| ![video](https://unpkg.com/feather-icons@4.19.0/dist/icons/video.svg) | `IconVideo` | `<i-video>` |
| ![voicemail](https://unpkg.com/feather-icons@4.19.0/dist/icons/voicemail.svg) | `IconVoicemail` | `<i-voicemail>` |
| ![volume-1](https://unpkg.com/feather-icons@4.19.0/dist/icons/volume-1.svg) | `IconVolume1` | `<i-volume-1>` |
| ![volume-2](https://unpkg.com/feather-icons@4.19.0/dist/icons/volume-2.svg) | `IconVolume2` | `<i-volume-2>` |
| ![volume-x](https://unpkg.com/feather-icons@4.19.0/dist/icons/volume-x.svg) | `IconVolumeX` | `<i-volume-x>` |
| ![volume](https://unpkg.com/feather-icons@4.19.0/dist/icons/volume.svg) | `IconVolume` | `<i-volume>` |
| ![watch](https://unpkg.com/feather-icons@4.19.0/dist/icons/watch.svg) | `IconWatch` | `<i-watch>` |
| ![wifi-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/wifi-off.svg) | `IconWifiOff` | `<i-wifi-off>` |
| ![wifi](https://unpkg.com/feather-icons@4.19.0/dist/icons/wifi.svg) | `IconWifi` | `<i-wifi>` |
| ![wind](https://unpkg.com/feather-icons@4.19.0/dist/icons/wind.svg) | `IconWind` | `<i-wind>` |
| ![x-circle](https://unpkg.com/feather-icons@4.19.0/dist/icons/x-circle.svg) | `IconXCircle` | `<i-x-circle>` |
| ![x-octagon](https://unpkg.com/feather-icons@4.19.0/dist/icons/x-octagon.svg) | `IconXOctagon` | `<i-x-octagon>` |
| ![x-square](https://unpkg.com/feather-icons@4.19.0/dist/icons/x-square.svg) | `IconXSquare` | `<i-x-square>` |
| ![x](https://unpkg.com/feather-icons@4.19.0/dist/icons/x.svg) | `IconX` | `<i-x>` |
| ![youtube](https://unpkg.com/feather-icons@4.19.0/dist/icons/youtube.svg) | `IconYoutube` | `<i-youtube>` |
| ![zap-off](https://unpkg.com/feather-icons@4.19.0/dist/icons/zap-off.svg) | `IconZapOff` | `<i-zap-off>` |
| ![zap](https://unpkg.com/feather-icons@4.19.0/dist/icons/zap.svg) | `IconZap` | `<i-zap>` |
| ![zoom-in](https://unpkg.com/feather-icons@4.19.0/dist/icons/zoom-in.svg) | `IconZoomIn` | `<i-zoom-in>` |
| ![zoom-out](https://unpkg.com/feather-icons@4.19.0/dist/icons/zoom-out.svg) | `IconZoomOut` | `<i-zoom-out>` |



### FAQ

_1. Can I import all icons at once?_

See [issue 1](https://github.com/michaelbazos/angular-feather/issues/1)

### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
