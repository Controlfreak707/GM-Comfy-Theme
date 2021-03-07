import { name, version } from "../goosemodModule.json";

let settings = {
  userPopoutAnimation: true,
  unreadPillForChannelList: true,
  pingPillForChannelList: true,
  noScrollbars: true,
  comfySpotifyVersion: true,
  betterSpotifySeekBar: true,
  avatarWithoutStatus: true,
  avatarRoundess: 5,
  avatarWidthInModals: 130,
  serverRoundess: 8,
  coloredEmojiPicker: true,
  mentionColorBar: "#C66262",
  mentionColorBackground: "#c662621f",
  mentionColorHover: "#c6626226",
  spotifySeekBarColor: "#096dc0",
  userSettingsColor: "#096dc0",
  chatButtonsColor: "#6E85D3",
  circlesNextToRoleNames: true,
  tooltips: true,
  discordLogo: false,
};

let styleUserPopoutAnimation;
let styleUnreadPillForChannelList;
let stylePingPillForChannelList;
let styleNoScrollbars;
let styleComfySpotifyVersion;
let styleBetterSpotifySeekBar;
let styleAvatarWithoutStatus;
let styleAvatarRoundess;
let styleAvatarWidthInModals;
let styleServerRoundess;
let styleColoredEmojiPicker;
let styleMentionColorBar;
let styleMentionColorBackground;
let styleMentionColorHover;
let styleSpotifySeekBarColor;
let styleUserSettingsColor;
let styleChatButtonsColor;
let styleCirclesNextToRoleNames;
let styleTooltips;
let styleDiscordLogo;

function updateSetting(setting, value = settings[setting]) {
  try {
    settings[setting] = value;

    switch (setting) {
      case "userPopoutAnimation":
        try {
          styleUserPopoutAnimation.remove();
        } catch {}

        if (value) {
          styleUserPopoutAnimation = document.createElement("style");
          styleUserPopoutAnimation.textContent = `.headerPlaying-j0WQBV.header-2BwW8b, .headerSpotify-zpWxgT.header-2BwW8b, .headerStreaming-2FjmGz.header-2BwW8b, .headerXbox-3G-4PF.header-2BwW8b { padding-bottom: 30px;}
          .headerPlaying-j0WQBV.header-2BwW8b:after, .headerSpotify-zpWxgT.header-2BwW8b:after, .headerStreaming-2FjmGz.header-2BwW8b:after, .headerXbox-3G-4PF.header-2BwW8b:after { background: url('https://nyri4.github.io/Comfy/assets/wave.png'); background-size: 250px 20px; animation: animate 6s linear infinite !important; opacity: 1 !important;}
          .header-2BwW8b:after, .headerPlaying-j0WQBV:before, .headerSpotify-zpWxgT:before, .headerStreaming-2FjmGz:before, .headerXbox-3G-4PF:before { 
              position: absolute;
              content: "";
              bottom: -1px;
              left: 0;
              width: 250px;
              height: 20px;
              z-index: -1;
              animation: animate2 6s linear infinite;
              animation-delay: 0s;
              opacity: 0.5;
          }
          .headerPlaying-j0WQBV:before { background: url('https://nyri4.github.io/Comfy/assets/wave_playing.png'); background-size: 250px 20px;}
          .headerSpotify-zpWxgT:before { background: url('https://nyri4.github.io/Comfy/assets/wave_spotify.png'); background-size: 250px 20px;}
          .headerStreaming-2FjmGz:before { background: url('https://nyri4.github.io/Comfy/assets/wave_streaming.png'); background-size: 250px 20px;}
          .headerXbox-3G-4PF:before { background: url('https://nyri4.github.io/Comfy/assets/wave_xbox.png'); background-size: 250px 20px;}
          @keyframes animate { 0% { background-position-x: 0;} 100% { background-position-x: 250px;}}
          @keyframes animate2 {0% { background-position-x: 250px; } 100% { background-position-x: 0px;}}`;
          document.head.appendChild(styleUserPopoutAnimation);
        }
        break;
      case "unreadPillForChannelList":
        try {
          styleUnreadPillForChannelList.remove();
        } catch {}

        if (value) {
          styleUnreadPillForChannelList = document.createElement("style");
          styleUnreadPillForChannelList.textContent = `.unread-2lAfLh { top: 54%; left: 5px; border-radius: 10px;width: 6px; height: 6px; background-color: #7289da; box-shadow: 0 0 12px 0 #7289da;}`;
          document.head.appendChild(styleUnreadPillForChannelList);
        }
        break;
      case "pingPillForChannelList":
        try {
          stylePingPillForChannelList.remove();
        } catch {}

        if (value) {
          stylePingPillForChannelList = document.createElement("style");
          stylePingPillForChannelList.textContent = `.mentionsBadge-3tC7Mi {position: absolute; top: 26%;right: 0px;} .mentionsBadge-3tC7Mi .numberBadge-2s8kKX { color: #f04747; font-weight: bolder;background-color: transparent !important;}.modeUnread-1qO3K1:hover .iconItem-F7GRxr { display: none;}.content-1x5b-n:active { transform: none;}`;
          document.head.appendChild(stylePingPillForChannelList);
        }
        break;
      case "noScrollbars":
        try {
          styleNoScrollbars.remove();
        } catch {}

        if (value) {
          styleNoScrollbars = document.createElement("style");
          styleNoScrollbars.textContent = `::-webkit-scrollbar { display: none !important;}.note-3HfJZ5 { margin-right: 0; }.content-1x5b-n { margin: 0 !important; border-radius: 0; }.mainContent-u_9PKf { padding-left: 8px;}.member-3-YXUe, [id*="private-channels-"] { margin: 0; max-width: unset; }.layout-2DM8Md { border-radius: 0; padding: 0 16px;}.unread-2lAfLh { z-index: 1;}.content-1LAB8Z, .item-1tOPte { margin-right: 8px;}.scroller-2hZ97C { padding-left: 0;}.scroller-2hZ97C > .content-3YMskv, .buttons-3JBrkn, .messagesPopout-24nkyi { padding-right: 10px !important; }.inviteRow-2L02ae {border-radius: 0; padding-left: 15px;}`;
          document.head.appendChild(styleNoScrollbars);
        }
        break;
      case "comfySpotifyVersion":
        try {
          styleComfySpotifyVersion.remove();
        } catch {}

        if (value) {
          styleComfySpotifyVersion = document.createElement("style");
          styleComfySpotifyVersion.textContent = `.container-6sXIoE{position: fixed;transition: left 0.5s;bottom: 62px;left: -196px;z-index: 3;width: 265px;background: var(--background-secondary-alt);border-radius: 0 5px 5px 0;border-bottom: none !important;}.barText-lmqc5O { display: none !important;}.container-6sXIoE > .inner-WRV6k5 { flex-direction: row-reverse;}.inner-WRV6k5 > .flex-1xMQg5 > .button-14-BFJ { margin: 0;}.container-6sXIoE:hover { left: 0px;}`;
          document.head.appendChild(styleComfySpotifyVersion);
        }
        break;
      case "betterSpotifySeekBar":
        try {
          styleBetterSpotifySeekBar.remove();
        } catch {}

        if (value) {
          styleBetterSpotifySeekBar = document.createElement("style");
          styleBetterSpotifySeekBar.textContent = `.bar-g2ZMIm {position: absolute !important;left: -2px !important;bottom: -4px !important;width: 267px !important;height: 58px !important;-webkit-mask-image: linear-gradient(0.25turn, #0009, #0003);mask-image: linear-gradient(0.25turn, #0009, #0003);}.maximized-vv2Wr0 > .timeline-UWmgAx > .bar-g2ZMIm { height: 84px !important; }.barFill-Dhkah7, .timeline-UWmgAx:hover .barFill-Dhkah7 { background: var(--spotify-color) !important;}.inner-WRV6k5 { z-index: 1 !important;}.grabber-7sd5f5 { display: none !important;}.button-14-BFJ:hover { background: none !important;}.container-6sXIoE:not(.maximized-vv2Wr0) > .inner-WRV6k5 > .coverWrapper-YAplwJ { margin-right: 1px !important; margin-left:25px !important;width: 40px !important;height: 40px !important;}`;
          document.head.appendChild(styleBetterSpotifySeekBar);
        }
        break;
      case "avatarWithoutStatus":
        try {
          styleAvatarWithoutStatus.remove();
        } catch {}

        if (value) {
          styleAvatarWithoutStatus = document.createElement("style");
          styleAvatarWithoutStatus.textContent = `:root {
            --avatar-mask: none;
            --avatar-status: 0;
          }`;
          document.head.appendChild(styleAvatarWithoutStatus);
        } else {
          styleAvatarWithoutStatus = document.createElement("style");
          styleAvatarWithoutStatus.textContent = `:root {
            --avatar-mask: url(#svg-mask-avatar-status-round-32);
            --avatar-status: 1;
          }`;
          document.head.appendChild(styleAvatarWithoutStatus);
        }
        break;
      case "avatarRoundess":
        try {
          styleAvatarRoundess.remove();
        } catch {}

        if (value) {
          styleAvatarRoundess = document.createElement("style");
          styleAvatarRoundess.textContent = `:root {
            --avatar-radius: ${value}%;
          }`;
          document.head.appendChild(styleAvatarRoundess);
        }
        break;
      case "avatarWidthInModals":
        try {
          styleAvatarWidthInModals.remove();
        } catch {}

        if (value) {
          styleAvatarWidthInModals = document.createElement("style");
          styleAvatarWidthInModals.textContent = `:root {
            --avatar-width: ${value}px;
          }`;
          document.head.appendChild(styleAvatarWidthInModals);
        }
        break;
      case "serverRoundess":
        try {
          styleServerRoundess.remove();
        } catch {}

        if (value) {
          styleServerRoundess = document.createElement("style");
          styleServerRoundess.textContent = `:root {
            --server-radius: ${value}px;
          }`;
          document.head.appendChild(styleServerRoundess);
        }
        break;
      case "coloredEmojiPicker":
        try {
          styleColoredEmojiPicker.remove();
        } catch {}

        if (value) {
          styleColoredEmojiPicker = document.createElement("style");
          styleColoredEmojiPicker.textContent = `:root {
            --colored-emoji: grayscale(0%);
          }`;
          document.head.appendChild(styleColoredEmojiPicker);
        } else {
          styleColoredEmojiPicker = document.createElement("style");
          styleColoredEmojiPicker.textContent = `:root {
            --colored-emoji: grayscale(100%);
          }`;
          document.head.appendChild(styleColoredEmojiPicker);
        }
        break;
      case "mentionColorBar":
        try {
          styleMentionColorBar.remove();
        } catch {}

        if (value) {
          styleMentionColorBar = document.createElement("style");
          styleMentionColorBar.textContent = `:root {
            --mention-color-bar: ${value};
          }`;
          document.head.appendChild(styleMentionColorBar);
        }
        break;
      case "mentionColorBackground":
        try {
          styleMentionColorBackground.remove();
        } catch {}

        if (value) {
          styleMentionColorBackground = document.createElement("style");
          styleMentionColorBackground.textContent = `:root {
            --mention-color-background: ${value};
          }`;
          document.head.appendChild(styleMentionColorBackground);
        }
        break;
      case "mentionColorHover":
        try {
          styleMentionColorHover.remove();
        } catch {}

        if (value) {
          styleMentionColorHover = document.createElement("style");
          styleMentionColorHover.textContent = `:root {
            --mention-color-hover: ${value};
          }`;
          document.head.appendChild(styleMentionColorHover);
        }
        break;
      case "spotifySeekBarColor":
        try {
          styleSpotifySeekBarColor.remove();
        } catch {}

        if (value) {
          styleSpotifySeekBarColor = document.createElement("style");
          styleSpotifySeekBarColor.textContent = `:root {
            --spotify-color: ${value} !important;
          }`;
          document.head.appendChild(styleSpotifySeekBarColor);
        }
        break;
      case "userSettingsColor":
        try {
          styleUserSettingsColor.remove();
        } catch {}

        if (value) {
          styleUserSettingsColor = document.createElement("style");
          styleUserSettingsColor.textContent = `:root {
            --user-buttons-color: ${value};
          }`;
          document.head.appendChild(styleUserSettingsColor);
        }
        break;
      case "chatButtonsColor":
        try {
          styleChatButtonsColor.remove();
        } catch {}

        if (value) {
          styleChatButtonsColor = document.createElement("style");
          styleChatButtonsColor.textContent = `:root {
            --chat-buttons: ${value};
          }`;
          document.head.appendChild(styleChatButtonsColor);
        }
        break;
      case "circlesNextToRoleNames":
        try {
          styleCirclesNextToRoleNames.remove();
        } catch {}

        if (value) {
          styleCirclesNextToRoleNames = document.createElement("style");
          styleCirclesNextToRoleNames.textContent = `:root {
            --role-circle: 7px;
          }`;
          document.head.appendChild(styleCirclesNextToRoleNames);
        } else {
          styleCirclesNextToRoleNames = document.createElement("style");
          styleCirclesNextToRoleNames.textContent = `:root {
            --role-circle: 0px;
          }`;
          document.head.appendChild(styleCirclesNextToRoleNames);
        }
        break;
      case "tooltips":
        try {
          styleTooltips.remove();
        } catch {}

        if (value) {
          styleTooltips = document.createElement("style");
          styleTooltips.textContent = `:root {
            --tooltips: block;
          }`;
          document.head.appendChild(styleTooltips);
        } else {
          styleTooltips = document.createElement("style");
          styleTooltips.textContent = `:root {
            --tooltips: none;
          }`;
          document.head.appendChild(styleTooltips);
        }
        break;
      case "discordLogo":
        try {
          styleDiscordLogo.remove();
        } catch {}

        if (value) {
          styleDiscordLogo = document.createElement("style");
          styleDiscordLogo.textContent = `:root {
            --discord-logo: block;
          }`;
          document.head.appendChild(styleDiscordLogo);
        } else {
          styleDiscordLogo = document.createElement("style");
          styleDiscordLogo.textContent = `:root {
            --discord-logo: none;
          }`;
          document.head.appendChild(styleDiscordLogo);
        }
        break;

      default:
        goosemodScope.showToast(`Setting "${setting}" not found.`, {
          type: "error",
        });
        break;
    }
  } catch (error) {
    goosemodScope.logger.debug(name, error);
    goosemodScope.showToast(
      `Failed to set setting "${setting}" to "${value}".`,
      {
        type: "error",
      }
    );
  }
}

function updateSettings(value) {
  for (const setting in settings) {
    updateSetting(setting, value);
  }
}

let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document.createElement("style");
      style.textContent = `@import "https://nyri4.github.io/Comfy/main.css";
      
        .theme-dark {
          --background-tertiary: #101320;
          --background-secondary: #1e2233;
          --background-secondary-alt: #191f2e;
          --background-primary: #23283d;
          --background-mobile-primary: #23283d;
          --channeltextarea-background: #191f2e;
          --background-accent: #6E85D3;
          --background-modifier-hover: #1c2030;
          --background-modifier-active: #1a1e2e;
          --background-modifier-selected: #191f2e;
          --deprecated-card-bg: #12141f63;
          --background-floating: #101320;
          --deprecated-quickswitcher-input-background:#101320;
          --spotify-color: #096dc0;
          --elevation-low: none;
          --scrollbar-auto-thumb: #121722;
          --scrollbar-auto-track: #191f2e;
          --scrollbar-thin-thumb: #141925;
      }
      
      .theme-light { /* I don't support light theme it's just for the "Create a server" popup */
          --background-tertiary: #101320;
          --background-secondary: #1e2233;
          --background-secondary-alt: #191f2e;
          --background-primary: #23283d;
          --header-primary: #fff;
          --header-secondary: #b1b5b9;
          --text-normal: #8e9297;
      }`;
      document.head.appendChild(style);

      updateSettings();

      goosemodScope.settings.createItem(name, [
        `(v${version})`,
        {
          type: "header",
          text: "General Settings",
        },
        {
          type: "toggle",
          text: "User Popout Animation",
          onToggle: (value) => updateSetting("userPopoutAnimation", value),
          isToggled: () => settings.userPopoutAnimation,
        },
        {
          type: "toggle",
          text: "Unread Pill For Channel List",
          onToggle: (value) => updateSetting("unreadPillForChannelList", value),
          isToggled: () => settings.unreadPillForChannelList,
        },
        {
          type: "toggle",
          text: "Ping Pill For Channel List",
          onToggle: (value) => updateSetting("pingPillForChannelList", value),
          isToggled: () => settings.pingPillForChannelList,
        },
        {
          type: "toggle",
          text: "No Scrollbars",
          onToggle: (value) => updateSetting("noScrollbars", value),
          isToggled: () => settings.noScrollbars,
        },
        {
          type: "toggle",
          text: "Comfy Spotify Version",
          onToggle: (value) => updateSetting("comfySpotifyVersion", value),
          isToggled: () => settings.comfySpotifyVersion,
        },
        {
          type: "toggle",
          text: "Better Spotify Seek Bar",
          onToggle: (value) => updateSetting("betterSpotifySeekBar", value),
          isToggled: () => settings.betterSpotifySeekBar,
        },
        {
          type: "header",
          text: "Other Settings",
        },
        {
          type: "toggle",
          text: "Avatar Without Status",
          onToggle: (value) => updateSetting("avatarWithoutStatus", value),
          isToggled: () => settings.avatarWithoutStatus,
        },
        {
          type: "toggle",
          text: "Colored Emoji Picker",
          onToggle: (value) => updateSetting("coloredEmojiPicker", value),
          isToggled: () => settings.coloredEmojiPicker,
        },
        {
          type: "text-and-color",
          text: "Mention Color Bar",
          oninput: (value) => updateSetting("mentionColorBar", value),
          initialValue: () => settings.mentionColorBar,
        },
        {
          type: "text-and-color",
          text: "Mention Color Background",
          oninput: (value) => updateSetting("mentionColorBackground", value),
          initialValue: () => settings.mentionColorBackground,
        },
        {
          type: "text-and-color",
          text: "Mention Color Hover",
          oninput: (value) => updateSetting("mentionColorHover", value),
          initialValue: () => settings.mentionColorHover,
        },
        {
          type: "text-and-color",
          text: "Spotify Seek Bar Color",
          oninput: (value) => updateSetting("spotifySeekBarColor", value),
          initialValue: () => settings.spotifySeekBarColor,
        },
        {
          type: "text-and-color",
          text: "User Settings Color",
          oninput: (value) => updateSetting("userSettingsColor", value),
          initialValue: () => settings.userSettingsColor,
        },
        {
          type: "text-and-color",
          text: "Chat Buttons Color",
          oninput: (value) => updateSetting("chatButtonsColor", value),
          initialValue: () => settings.chatButtonsColor,
        },
        {
          type: "toggle",
          text: "Circles Next To Role Names",
          onToggle: (value) => updateSetting("circlesNextToRoleNames", value),
          isToggled: () => settings.circlesNextToRoleNames,
        },
        {
          type: "toggle",
          text: "Tooltips",
          onToggle: (value) => updateSetting("tooltips", value),
          isToggled: () => settings.tooltips,
        },
        {
          type: "toggle",
          text: "Discord Logo",
          onToggle: (value) => updateSetting("discordLogo", value),
          isToggled: () => settings.discordLogo,
        },
      ]);
    },

    getSettings: () => [settings],
    loadSettings: ([_settings]) => {
      settings = _settings;

      updateSettings();
    },

    onRemove: async () => {
      goosemodScope.settings.removeItem(name);

      style.remove();
      updateSettings(false);
    },
  },
};
