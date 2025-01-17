/* eslint-disable unused-imports/no-unused-vars */
// Copyright 2021 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import i18next from "i18next";
import * as Provider from "./Provider";
import {getProviderLogoURL} from "../Setting";
import {GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import {authViaMetaMask, authViaWeb3Onboard} from "./Web3Auth";
import QqLoginButton from "./QqLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";
import WeiboLoginButton from "./WeiboLoginButton";
import GiteeLoginButton from "./GiteeLoginButton";
import WechatLoginButton from "./WechatLoginButton";
import DingTalkLoginButton from "./DingTalkLoginButton";
import LinkedInLoginButton from "./LinkedInLoginButton";
import WeComLoginButton from "./WeComLoginButton";
import LarkLoginButton from "./LarkLoginButton";
import GitLabLoginButton from "./GitLabLoginButton";
import AdfsLoginButton from "./AdfsLoginButton";
import CasdoorLoginButton from "./CasdoorLoginButton";
import BaiduLoginButton from "./BaiduLoginButton";
import AlipayLoginButton from "./AlipayLoginButton";
import InfoflowLoginButton from "./InfoflowLoginButton";
import AppleLoginButton from "./AppleLoginButton";
import AzureADLoginButton from "./AzureADLoginButton";
import SlackLoginButton from "./SlackLoginButton";
import SteamLoginButton from "./SteamLoginButton";
import BilibiliLoginButton from "./BilibiliLoginButton";
import OktaLoginButton from "./OktaLoginButton";
import DouyinLoginButton from "./DouyinLoginButton";
import LoginButton from "./LoginButton";
import * as AuthBackend from "./AuthBackend";
import {getEvent} from "./Util";
import * as Setting from "../Setting";
// eslint-disable-next-line unused-imports/no-unused-imports
import {Col, Modal, Row} from "antd";

function getSigninButton(provider) {
  const text = i18next.t("login:Sign in with {type}").replace("{type}", provider.displayName !== "" ? provider.displayName : provider.type);
  if (provider.type === "GitHub") {
    return <GithubLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Google") {
    return <GoogleLoginButton text={text} align={"center"} style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px 1px", backgroundColor: "#f2f2f2"}} />;
  } else if (provider.type === "QQ") {
    return <QqLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Facebook") {
    return <FacebookLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Weibo") {
    return <WeiboLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Gitee") {
    return <GiteeLoginButton text={text} align={"center"} />;
  } else if (provider.type === "WeChat") {
    return <WechatLoginButton text={text} align={"center"} />;
  } else if (provider.type === "DingTalk") {
    return <DingTalkLoginButton text={text} align={"center"} />;
  } else if (provider.type === "LinkedIn") {
    return <LinkedInLoginButton text={text} align={"center"} />;
  } else if (provider.type === "WeCom") {
    return <WeComLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Lark") {
    return <LarkLoginButton text={text} align={"center"} />;
  } else if (provider.type === "GitLab") {
    return <GitLabLoginButton text={text} align={"center"} />;
  } else if (provider.type === "ADFS") {
    return <AdfsLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Casdoor") {
    return <CasdoorLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Baidu") {
    return <BaiduLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Alipay") {
    return <AlipayLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Infoflow") {
    return <InfoflowLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Apple") {
    return <AppleLoginButton text={text} align={"center"} />;
  } else if (provider.type === "AzureAD") {
    return <AzureADLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Slack") {
    return <SlackLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Steam") {
    return <SteamLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Bilibili") {
    return <BilibiliLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Okta") {
    return <OktaLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Douyin") {
    return <DouyinLoginButton text={text} align={"center"} />;
  } else {
    return <LoginButton key={provider.type} type={provider.type} logoUrl={getProviderLogoURL(provider)} />;
  }
}

function getTextForProviderButton(provider, location) {
  // eslint-disable-next-line no-console
  const searchPattern = location.pathname.includes("signup") ? "login:Sign up with {type}" : "login:Sign in with {type}";
  const text = i18next.t(searchPattern).replace("{type}", provider.displayName !== "" ? provider.displayName : provider.type);
  return text;
}

function getSignupButton(provider) {
  const text = i18next.t("login:Sign up with {type}").replace("{type}", provider.displayName !== "" ? provider.displayName : provider.type);
  if (provider.type === "GitHub") {
    return <GithubLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Google") {

    return <GoogleLoginButton text={text} align={"center"} style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px 1px", backgroundColor: "#f2f2f2"}} />;
  } else if (provider.type === "QQ") {
    return <QqLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Facebook") {
    return <FacebookLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Weibo") {
    return <WeiboLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Gitee") {
    return <GiteeLoginButton text={text} align={"center"} />;
  } else if (provider.type === "WeChat") {
    return <WechatLoginButton text={text} align={"center"} />;
  } else if (provider.type === "DingTalk") {
    return <DingTalkLoginButton text={text} align={"center"} />;
  } else if (provider.type === "LinkedIn") {
    return <LinkedInLoginButton text={text} align={"center"} />;
  } else if (provider.type === "WeCom") {
    return <WeComLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Lark") {
    return <LarkLoginButton text={text} align={"center"} />;
  } else if (provider.type === "GitLab") {
    return <GitLabLoginButton text={text} align={"center"} />;
  } else if (provider.type === "ADFS") {
    return <AdfsLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Casdoor") {
    return <CasdoorLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Baidu") {
    return <BaiduLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Alipay") {
    return <AlipayLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Infoflow") {
    return <InfoflowLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Apple") {
    return <AppleLoginButton text={text} align={"center"} />;
  } else if (provider.type === "AzureAD") {
    return <AzureADLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Slack") {
    return <SlackLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Steam") {
    return <SteamLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Bilibili") {
    return <BilibiliLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Okta") {
    return <OktaLoginButton text={text} align={"center"} />;
  } else if (provider.type === "Douyin") {
    return <DouyinLoginButton text={text} align={"center"} />;
  } else {
    return <LoginButton key={provider.type} type={provider.type} logoUrl={getProviderLogoURL(provider)} />;
  }
}

function goToSamlUrl(provider, location) {
  const params = new URLSearchParams(location.search);
  const clientId = params.get("client_id") ?? "";
  const state = params.get("state");
  const realRedirectUri = params.get("redirect_uri");
  const redirectUri = `${window.location.origin}/callback/saml`;
  const providerName = provider.name;

  const relayState = `${clientId}&${state}&${providerName}&${realRedirectUri}&${redirectUri}`;
  AuthBackend.getSamlLogin(`${provider.owner}/${providerName}`, btoa(relayState)).then((res) => {
    if (res.data2 === "POST") {
      document.write(res.data);
    } else {
      window.location.href = res.data;
    }
  });
}

export function goToWeb3Url(application, provider, method) {
  if (provider.type === "MetaMask") {
    authViaMetaMask(application, provider, method);
  } else if (provider.type === "Web3Onboard") {
    authViaWeb3Onboard(application, provider, method);
  }
}

export const DividerComponent = (text, contStyle, hStyle, sStyle) => {
  let containerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20rem",
    marginBottom: "1.5rem",
    marginTop: "0.5rem",
  };
  if (contStyle !== undefined) {
    containerStyle = contStyle;
  }

  let hrStyle = {
    width: "20rem",
    height: "1px",
    marginLeft: "3rem",
    marginRight: "0.1rem",
    backgroundColor: "#878787", // Replace with your desired background color
    border: "0",
  };
  if (hStyle !== undefined) {
    hrStyle = hStyle;
  }
  let spanStyle = {
    position: "absolute",
    padding: "1rem", // Adjust as needed
    fontWeight: "bold",
    color: "#111827", // Replace with your desired text color
    transform: "translateX(-80%)",
    background: "white",
    left: "50%",
  };
  if (sStyle !== undefined) {
    spanStyle = sStyle;
  }
  if (Setting.isMobile()) {
    hrStyle.marginLeft = "0.1rem";
    hrStyle.marginRight = "0.1rem";
    spanStyle.left = "50%";
    hrStyle.width = "19rem";
  }

  return (
    <div style={containerStyle}>
      <hr style={hrStyle}></hr>
      <span style={spanStyle}>{text}</span>
    </div>
  );
};

export function renderProviderLogo(provider, application, width, margin, size, location, styles) {
  if (size === "small") {
    if (provider.category === "OAuth") {
      if (provider.type === "WeChat" && provider.clientId2 !== "" && provider.clientSecret2 !== "" && provider.content !== "" && provider.disableSsl === true && !navigator.userAgent.includes("MicroMessenger")) {
        const info = async() => {
          const t1 = setInterval(await getEvent, 1000, application, provider);
          {Modal.info({
            title: i18next.t("provider:Please use WeChat and scan the QR code to sign in"),
            content: (
              <div>
                <img width={256} height={256} src = {"data:image/png;base64," + provider.content} alt="Wechat QR code" style={{margin: margin}} />
              </div>
            ),
            onOk() {
              window.clearInterval(t1);
            },
          });}
        };
        return (
          <a key={provider.displayName} >
            <img width={width} height={width} src={getProviderLogoURL(provider)} alt={provider.displayName} style={{margin: margin}} onClick={info} />
          </a>
        );
      } else {
        const text = getTextForProviderButton(provider, location);
        let buttonStyle = {
          boxSizing: "border-box",
          fontFamily: "inherit",
          padding: "0px",
          display: "block",
          color: "inherit",
          textAlign: "inherit",
        };
        let divContainerStyle = {
          marginBottom: "1.2rem", marginLeft: "3rem", display: "flex", alignItems: "center", justifyContent: "center",
        };
        if (Setting.isMobile()) {
          divContainerStyle.marginLeft = "0.1rem";
        }
        let buttonWrapperStyle = {
          boxSizing: "border-box",
          position: "relative",
          borderRadius: "50px",
          backgroundColor: "#fff",
          border: "1px solid #b1b3b6",
          borderWidth: "1px",
          borderColor: "#b1b3b6",
          display: "flex",
          padding: "4px",
          width: "23rem",
          alignItems: "center",
          justifyContent: "center",
        };
        let iconStyle = {
          boxSizing: "border-box",
          display: "inline-block",
          marginRight: "8px",
          lineHeight: "28px",
        };
        let textStyle = {
          boxSizing: "border-box",
          display: "inline",
          marginLeft: "10px",
          lineHeight: "28px",
          color: "rgba(0, 0, 0, 0.88)",
        };
        if (styles !== undefined) {
          if (styles.buttonStyle !== undefined) {
            buttonStyle = styles.buttonStyle;
          }
          if (styles.buttonWrapperStyle !== undefined) {
            buttonWrapperStyle = styles.buttonWrapperStyle;
          }
          if (styles.iconStyle !== undefined) {
            iconStyle = styles.iconStyle;
          }
          if (styles.textStyle !== undefined) {
            textStyle = styles.textStyle;
          }
          if (styles.divContainerStyle !== undefined) {
            divContainerStyle = styles.divContainerStyle;
          }
        }
        return (
          <a key={provider.displayName} href={Provider.getAuthUrl(application, provider, "signup")} >
            <div style={divContainerStyle}>
              <div>
                <div
                  style={buttonStyle}
                >
                  <div style={buttonWrapperStyle}>
                    <div style={iconStyle}>
                      <span >
                        <span>
                          <img width={width} height={width} src={getProviderLogoURL(provider)} alt={provider.displayName} style={{margin: margin}}></img>
                        </span>
                      </span>
                      <div style={textStyle}>
                        {text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {
              location.pathname.includes("signup") ? getSignupButton(provider) : getSigninButton(provider)
            } */}
            {/* <img width={width} height={width} src={getProviderLogoURL(provider)} alt={provider.displayName} style={{margin: margin}} /> */}
          </a>
        );
      }
    } else if (provider.category === "SAML") {
      return (
        <a key={provider.displayName} onClick={() => goToSamlUrl(provider, location)}>
          <img width={width} height={width} src={getProviderLogoURL(provider)} alt={provider.displayName} style={{margin: margin}} />
        </a>
      );
    } else if (provider.category === "Web3") {
      return (
        <a key={provider.displayName} onClick={() => goToWeb3Url(application, provider, "signup")}>
          <img width={width} height={width} src={getProviderLogoURL(provider)} alt={provider.displayName} style={{margin: margin}} />
        </a>
      );
    }
  } else if (provider.type === "Custom") {
    // style definition
    const text = i18next.t("login:Sign in with {type}").replace("{type}", provider.displayName);
    const customAStyle = {display: "block", height: "55px", color: "#000"};
    const customButtonStyle = {display: "flex", alignItems: "center", width: "calc(100% - 10px)", height: "50px", margin: "5px", padding: "0 10px", backgroundColor: "transparent", boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", border: "0px", borderRadius: "3px", cursor: "pointer"};
    const customImgStyle = {justfyContent: "space-between"};
    const customSpanStyle = {textAlign: "center", lineHeight: "50px", width: "100%", fontSize: "19px"};
    if (provider.category === "OAuth") {
      return (
        <a key={provider.displayName} href={Provider.getAuthUrl(application, provider, "signup")} style={customAStyle}>
          <button style={customButtonStyle}>
            <img width={26} src={getProviderLogoURL(provider)} alt={provider.displayName} style={customImgStyle} />
            <span style={customSpanStyle}>{text}</span>
          </button>
        </a>
      );
    } else if (provider.category === "SAML") {
      return (
        <a key={provider.displayName} onClick={() => goToSamlUrl(provider, location)} style={customAStyle}>
          <button style={customButtonStyle}>
            <img width={26} src={getProviderLogoURL(provider)} alt={provider.displayName} style={customImgStyle} />
            <span style={customSpanStyle}>{text}</span>
          </button>
        </a>
      );
    }
  } else {
    // big button, for disable password signin
    if (provider.category === "SAML") {
      return (
        <div key={provider.displayName} style={{marginBottom: "10px"}}>
          <a onClick={() => goToSamlUrl(provider, location)}>
            {
              getSigninButton(provider)
            }
          </a>
        </div>
      );
    } else if (provider.category === "Web3") {
      return (
        <div key={provider.displayName} style={{marginBottom: "10px"}}>
          <a onClick={() => goToWeb3Url(application, provider, "signup")}>
            {
              getSigninButton(provider)
            }
          </a>
        </div>
      );
    } else {
      return (
        <div key={provider.displayName} style={{marginBottom: "10px"}}>
          <a href={Provider.getAuthUrl(application, provider, "signup")}>
            {
              getSigninButton(provider)
            }
          </a>
        </div>
      );
    }
  }
}
