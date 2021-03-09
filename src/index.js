import { name, version } from "../goosemodModule.json";

let settings = {
  userPopoutAnimation: true,
  scrollbars: false,
  avatarStatus: false,
  avatarWidthInModals: 130,
  serverRoundess: 8,
  coloredEmojiPicker: true,
  mentionColor: "#f04747",
  unreadColor: "#7289da",
  mentionColorBar: "#C66262",
  mentionColorBackground: "#c662621f",
  mentionColorHover: "#c6626226",
  userSettingsColor: "#096dc0",
  chatButtonsColor: "#6E85D3",
  circlesNextToRoleNames: true,
  tooltips: true,
  discordLogo: false,
};

let styleUserPopoutAnimation;
let styleScrollbars;
let styleAvatarStatus;
let styleAvatarWidthInModals;
let styleServerRoundess;
let styleColoredEmojiPicker;
let styleMentionColor;
let styleUnreadColor;
let styleMentionColorBar;
let styleMentionColorBackground;
let styleMentionColorHover;
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
      case "avatarStatus":
        try {
          styleAvatarStatus.remove();
        } catch {}

        if (value) {
          styleAvatarStatus = document.createElement("style");
          styleAvatarStatus.textContent = `:root {
            --avatar-mask: url(#svg-mask-avatar-status-round-32);
            --avatar-status: 5px;
          }`;
          document.head.appendChild(styleAvatarStatus);
        } else {
          styleAvatarStatus = document.createElement("style");
          styleAvatarStatus.textContent = `:root {
            --avatar-mask: none;
            --avatar-radius: 5px;
          }`;
          document.head.appendChild(styleAvatarStatus);
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
      case "circlesNextToRoleNames":
        try {
          styleCirclesNextToRoleNames.remove();
        } catch {}

        if (value) {
          styleCirclesNextToRoleNames = document.createElement("style");
          styleCirclesNextToRoleNames.textContent = `:root {
            --role-circle: 5px;
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
      style.textContent = `@import "https://nyri4.github.io/Comfy/betterdiscord/main.css";
      
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
          text: "No Scrollbars",
          onToggle: (value) => updateSetting("scrollbars", value),
          isToggled: () => settings.scrollbars,
        },
        {
          type: "toggle",
          text: "Avatar Without Status",
          onToggle: (value) => updateSetting("avatarStatus", value),
          isToggled: () => settings.avatarStatus,
        },
        {
          type: "toggle",
          text: "Colored Emoji Picker",
          onToggle: (value) => updateSetting("coloredEmojiPicker", value),
          isToggled: () => settings.coloredEmojiPicker,
        },
        {
          type: "header",
          text: "Other Settings",
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
