import { name, version } from "../goosemodModule.json";

import showToast from "@goosemod/toast";
import { debug } from "@goosemod/logger";
import * as settingsPage from "@goosemod/settings";

let settings = {
  userPopoutAnimation: true,
  scrollbars: false,
  betterSpotifyPluginSeekBar: true,
  userButtonSpacing: 8,
  avatarRoundess: 5,
  statusRoundness: 3,
  serverRoundess: 8,
  avatarWidthInModals: 130,
  changeBonfireInModals: "https://nyri4.github.io/Comfy/assets/bonfire.gif",
  coloredEmojiPicker: true,
  mentionColor: "#f04747",
  unreadColor: "#7289da",
  mentionColorBar: "#C66262",
  mentionColorBackground: "#c662621f",
  mentionColorHover: "#c6626226",
  userSettingsColor: "#096dc0",
  chatButtonsColor: "#6E85D3",
  spotifyPluginSeekBar: "#1EDC62",
  onlineStatusColor: "#43B581",
  idleStatusColor: "#FAA61A",
  dndStatusColor: "#F04747",
  offlineStatusColor: "#747F8D",
  circlesNextToRoleNames: 5,
  tooltips: true,
  discordLogo: false,
};

let styleUserPopoutAnimation;
let styleScrollbars;
let styleBetterSpotifyPluginSeekBar;
let styleUserButtonSpacing;
let styleAvatarRoundess;
let styleStatusRoundness;
let styleServerRoundess;
let styleAvatarWidthInModals;
let styleChangeBonfireInModals;
let styleColoredEmojiPicker;
let styleMentionColor;
let styleUnreadColor;
let styleMentionColorBar;
let styleMentionColorBackground;
let styleMentionColorHover;
let styleUserSettingsColor;
let styleChatButtonsColor;
let styleSpotifyPluginSeekBar;
let styleOnlineStatusColor;
let styleIdleStatusColor;
let styleDndStatusColor;
let styleOfflineStatusColor;
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
          styleUserPopoutAnimation.textContent = `.headerPlaying-j0WQBV.header-2BwW8b, .headerSpotify-zpWxgT.header-2BwW8b, .headerStreaming-2FjmGz.header-2BwW8b, .headerXbox-3G-4PF.header-2BwW8b { padding-bottom: 30px;}.headerPlaying-j0WQBV.header-2BwW8b:after, .headerSpotify-zpWxgT.header-2BwW8b:after, .headerStreaming-2FjmGz.header-2BwW8b:after, .headerXbox-3G-4PF.header-2BwW8b:after { background: url('https://nyri4.github.io/Comfy/assets/wave.png'); background-size: 250px 20px; animation: animate 6s linear infinite !important; opacity: 1 !important;}.header-2BwW8b:after, .headerPlaying-j0WQBV:before, .headerSpotify-zpWxgT:before, .headerStreaming-2FjmGz:before, .headerXbox-3G-4PF:before { position: absolute;content: "";bottom: -1px;left: 0;width: 250px;height: 20px;z-index: -1;animation: animate2 6s linear infinite;animation-delay: 0s;opacity: 0.5;}.headerPlaying-j0WQBV:before { background: url('https://nyri4.github.io/Comfy/assets/wave_playing.png'); background-size: 250px 20px;}.headerSpotify-zpWxgT:before { background: url('https://nyri4.github.io/Comfy/assets/wave_spotify.png'); background-size: 250px 20px;}.headerStreaming-2FjmGz:before { background: url('https://nyri4.github.io/Comfy/assets/wave_streaming.png'); background-size: 250px 20px;}.headerXbox-3G-4PF:before { background: url('https://nyri4.github.io/Comfy/assets/wave_xbox.png'); background-size: 250px 20px;}@keyframes animate { 0% { background-position-x: 0;} 100% { background-position-x: 250px;}}@keyframes animate2 {0% { background-position-x: 250px; } 100% { background-position-x: 0px;}}`;
          document.head.appendChild(styleUserPopoutAnimation);
        }
        break;
      case "scrollbars":
        try {
          styleScrollbars.remove();
        } catch {}

        if (value) {
          // Nothing :V
        } else {
          styleScrollbars = document.createElement("style");
          styleScrollbars.textContent = `::-webkit-scrollbar { display: none !important;}.note-3HfJZ5 { margin-right: 0; }.content-1x5b-n { margin: 0 !important; border-radius: 0; }.mainContent-u_9PKf { padding-left: 8px;}.member-3-YXUe, [id*="private-channels-"] { margin: 0; max-width: unset; }.layout-2DM8Md { border-radius: 0; padding: 0 16px;}.unread-2lAfLh { z-index: 1;}.content-1LAB8Z, .item-1tOPte { margin-right: 8px;}.scroller-2hZ97C { padding-left: 0;}.scroller-2hZ97C > .content-3YMskv, .buttons-3JBrkn, .messagesPopout-24nkyi { padding-right: 10px !important; }.inviteRow-2L02ae {border-radius: 0; padding-left: 15px;}`;
          document.head.appendChild(styleScrollbars);
        }
        break;
      case "betterSpotifyPluginSeekBar":
        try {
          styleBetterSpotifyPluginSeekBar.remove();
        } catch {}

        if (value) {
          styleBetterSpotifyPluginSeekBar = document.createElement("style");
          styleBetterSpotifyPluginSeekBar.textContent = `.container-6sXIoE { border-bottom: none !important;}.container-6sXIoE .bar-g2ZMIm {position: absolute !important;bottom: 0 !important; left: 0 !important;width: 240px !important; height: 54px !important;margin-bottom: 0 !important;-webkit-mask-image: linear-gradient(0.25turn, #0008, #0002) !important;mask-image: linear-gradient(0.25turn, #0008, #0002) !important;border-radius: 0 !important;}.bar-g2ZMIm .barFill-Dhkah7 { border-radius: 0 !important;}.container-6sXIoE.maximized-vv2Wr0 .bar-g2ZMIm { height: 87px !important;}.container-6sXIoE .button-14-BFJ:hover { background-color: transparent !important;}.barFill-Dhkah7, .timeline-UWmgAx:hover .barFill-Dhkah7 { background: var(--spotify-color) !important;}.inner-WRV6k5 { z-index: 1 !important;}.barText-lmqc5O, .grabber-7sd5f5 { display: none !important;}`;
          document.head.appendChild(styleBetterSpotifyPluginSeekBar);
        }
        break;
      case "userButtonSpacing":
        try {
          styleUserButtonSpacing.remove();
        } catch {}

        if (value) {
          styleUserButtonSpacing = document.createElement("style");
          styleUserButtonSpacing.textContent = `:root {
            --user-buttons-spacing: ${value}px;
          }`;
          document.head.appendChild(styleUserButtonSpacing);
        }
        break;
      case "avatarRoundess":
        try {
          styleAvatarRoundess.remove();
        } catch {}

        if (value) {
          styleAvatarRoundess = document.createElement("style");
          styleAvatarRoundess.textContent = `:root {
            --avatar-radius: ${value}px;
          }`;
          document.head.appendChild(styleAvatarRoundess);
        }
        break;
      case "statusRoundness":
        try {
          styleStatusRoundness.remove();
        } catch {}

        if (value) {
          styleStatusRoundness = document.createElement("style");
          styleStatusRoundness.textContent = `:root {
            --status-radius: ${value}px;
          }`;
          document.head.appendChild(styleStatusRoundness);
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
      case "changeBonfireInModals":
        try {
          styleChangeBonfireInModals.remove();
        } catch {}

        if (value) {
          styleChangeBonfireInModals = document.createElement("style");
          styleChangeBonfireInModals.textContent = `:root {
            --bonfire: url('${value}');
          }`;
          document.head.appendChild(styleChangeBonfireInModals);
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
      case "mentionColor":
        try {
          styleMentionColor.remove();
        } catch {}

        if (value) {
          styleMentionColor = document.createElement("style");
          styleMentionColor.textContent = `:root {
            --mention-color: ${value};
          }`;
          document.head.appendChild(styleMentionColor);
        }
        break;
      case "unreadColor":
        try {
          styleUnreadColor.remove();
        } catch {}

        if (value) {
          styleUnreadColor = document.createElement("style");
          styleUnreadColor.textContent = `:root {
              --unread-color: ${value};
            }`;
          document.head.appendChild(styleUnreadColor);
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
      case "spotifyPluginSeekBar":
        try {
          styleSpotifyPluginSeekBar.remove();
        } catch {}

        if (value) {
          styleSpotifyPluginSeekBar = document.createElement("style");
          styleSpotifyPluginSeekBar.textContent = `:root {
            --spotify-color: ${value};
          }`;
          document.head.appendChild(styleSpotifyPluginSeekBar);
        }
        break;
      case "onlineStatusColor":
        try {
          styleOnlineStatusColor.remove();
        } catch {}

        if (value) {
          styleOnlineStatusColor = document.createElement("style");
          styleOnlineStatusColor.textContent = `:root {
            --online: ${value};
          }`;
          document.head.appendChild(styleOnlineStatusColor);
        }
        break;
      case "idleStatusColor":
        try {
          styleIdleStatusColor.remove();
        } catch {}

        if (value) {
          styleIdleStatusColor = document.createElement("style");
          styleIdleStatusColor.textContent = `:root {
            --iddle: ${value};
          }`;
          document.head.appendChild(styleIdleStatusColor);
        }
        break;
      case "dndStatusColor":
        try {
          styleDndStatusColor.remove();
        } catch {}

        if (value) {
          styleDndStatusColor = document.createElement("style");
          styleDndStatusColor.textContent = `:root {
            --dnd: ${value};
          }`;
          document.head.appendChild(styleDndStatusColor);
        }
        break;
      case "offlineStatusColor":
        try {
          styleOfflineStatusColor.remove();
        } catch {}

        if (value) {
          styleOfflineStatusColor = document.createElement("style");
          styleOfflineStatusColor.textContent = `:root {
            --offline: ${value};
          }`;
          document.head.appendChild(styleOfflineStatusColor);
        }
        break;
      case "circlesNextToRoleNames":
        try {
          styleCirclesNextToRoleNames.remove();
        } catch {}

        if (value) {
          styleCirclesNextToRoleNames = document.createElement("style");
          styleCirclesNextToRoleNames.textContent = `:root {
            --role-circle: ${value}px;
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
        showToast(`Setting "${setting}" not found.`, {
          type: "error",
        });
        break;
    }
  } catch (error) {
    debug(name, error);
    showToast(`Failed to set setting "${setting}" to "${value}".`, {
      type: "error",
    });
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
      style.textContent = `@import "https://nyri4.github.io/Comfy/betterdiscord/main.css";
      
      .theme-dark {
        --background-tertiary: #101320;
        --background-secondary: #1e2233;
        --background-secondary-alt: #191f2e;
        --background-primary: #23283d;
        --background-mobile-primary: #23283d;
        --background-mobile-secondary: #1e2233;
        --channeltextarea-background: #191f2e;
        --background-accent: #6E85D3;
        --background-modifier-hover: #1c2030;
        --background-modifier-active: #1a1e2e;
        --background-modifier-selected: #191f2e;
        --deprecated-card-bg: #12141f63;
        --background-floating: #101320;
        --deprecated-quickswitcher-input-background:#101320;
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
        --background-accent: #6E85D3;
        --background-modifier-hover: #262b41;
        --background-modifier-active: #262b41;
        --header-primary: #fff;
        --header-secondary: #b1b5b9;
        --text-normal: #8e9297;
      }`;
      document.head.appendChild(style);

      updateSettings();

      settingsPage.createItem(name, [
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
          text: "Scrollbars",
          onToggle: (value) => updateSetting("scrollbars", value),
          isToggled: () => settings.scrollbars,
        },
        {
          type: "toggle",
          text: "Better Spotify Plugin Seek Bar",
          onToggle: (value) =>
            updateSetting("betterSpotifyPluginSeekBar", value),
          isToggled: () => settings.betterSpotifyPluginSeekBar,
        },
        {
          type: "header",
          text: "Other Settings",
        },
        {
          type: "toggle",
          text: "Colored Emoji Picker",
          onToggle: (value) => updateSetting("coloredEmojiPicker", value),
          isToggled: () => settings.coloredEmojiPicker,
        },
        {
          type: "text-and-color",
          text: "Mention Color",
          oninput: (value) => updateSetting("mentionColor", value),
          initialValue: () => settings.mentionColor,
        },
        {
          type: "text-and-color",
          text: "Unread Color",
          oninput: (value) => updateSetting("unreadColor", value),
          initialValue: () => settings.unreadColor,
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
          type: "text-and-color",
          text: "Spotify Plugin Seek Bar",
          oninput: (value) => updateSetting("spotifyPluginSeekBar", value),
          initialValue: () => settings.spotifyPluginSeekBar,
        },
        {
          type: "text-and-color",
          text: "Online Status Color",
          oninput: (value) => updateSetting("onlineStatusColor", value),
          initialValue: () => settings.onlineStatusColor,
        },
        {
          type: "text-and-color",
          text: "Idle Status Color",
          oninput: (value) => updateSetting("idleStatusColor", value),
          initialValue: () => settings.idleStatusColor,
        },
        {
          type: "text-and-color",
          text: "Dnd Status Color",
          oninput: (value) => updateSetting("dndStatusColor", value),
          initialValue: () => settings.dndStatusColor,
        },
        {
          type: "text-and-color",
          text: "Offline Status Color",
          oninput: (value) => updateSetting("offlineStatusColor", value),
          initialValue: () => settings.offlineStatusColor,
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
      settingsPage.removeItem(name);

      style.remove();
      updateSettings(false);
    },
  },
};
