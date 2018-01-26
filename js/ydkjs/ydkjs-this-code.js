





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-98cac35b43fab8341490a2623fdaa7b696bbaea87bccf8f485fd5cdb4996cd9b52bdb24709fb3bab0a0dcff4a29187d65028ee693d609ce5c0c3283c77a247a9.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f84b09929e4d948a5727c0c312da25f89ded0439c0e17586ebfabd3b1a40c104c8ccd4f0b2dd5f44ec7c916d4e64a008a3916640b39e225d7afe17d2ae681591.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-e1e1bc98a53e47d4009cc4307d22206e8db8852fa7517c52b94b391b92cc430fb9c230b54d229f83125bda3eb53d7c9af78fb0330375393eebecc179adb754bf.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>You-Dont-Know-JS/this &amp; object prototypes at master · getify/You-Dont-Know-JS · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/150330?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="getify/You-Dont-Know-JS" property="og:title" /><meta content="https://github.com/getify/You-Dont-Know-JS" property="og:url" /><meta content="You-Dont-Know-JS - A book series on JavaScript. @YDKJS on twitter." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="DEB5:12488:2A14C05:460448A:5A6A0F10" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="DEB5:12488:2A14C05:460448A:5A6A0F10" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="https://github.com/hydro_browser_events" name="hydro-events-url" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NDlkOTVjZWVlNmY3MTdlMmM1MWMwNjQyMDQ3ODE1N2Q3MWZjYjEzMjQ1YjhiYWRiNTYwZmY3OWM1NTg5YzJmOHx7InJlbW90ZV9hZGRyZXNzIjoiMTc4LjIzNy4xMzEuNTkiLCJyZXF1ZXN0X2lkIjoiREVCNToxMjQ4ODoyQTE0QzA1OjQ2MDQ0OEE6NUE2QTBGMTAiLCJ0aW1lc3RhbXAiOjE1MTY5MDAxMTMsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="b44f2c0a0e3a9493a99589e34720031882bd1a6d">

  <meta http-equiv="x-pjax-version" content="c31024c2918fbffe720f64d97cbfbada">
  

      <link href="https://github.com/getify/You-Dont-Know-JS/commits/master.atom" rel="alternate" title="Recent Commits to You-Dont-Know-JS:master" type="application/atom+xml">

  <meta name="description" content="You-Dont-Know-JS - A book series on JavaScript. @YDKJS on twitter.">
  <meta name="go-import" content="github.com/getify/You-Dont-Know-JS git https://github.com/getify/You-Dont-Know-JS.git">

  <meta content="150330" name="octolytics-dimension-user_id" /><meta content="getify" name="octolytics-dimension-user_login" /><meta content="14440270" name="octolytics-dimension-repository_id" /><meta content="getify/You-Dont-Know-JS" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14440270" name="octolytics-dimension-repository_network_root_id" /><meta content="getify/You-Dont-Know-JS" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/getify/You-Dont-Know-JS/search" class="js-site-search-form" data-scoped-search-url="/getify/You-Dont-Know-JS/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/getify/You-Dont-Know-JS/tree/master/this%20&amp;%20object%20prototypes" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fgetify%2FYou-Dont-Know-JS%2Ftree%2Fmaster%2Fthis%2520%26%2520object%2520prototypes" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fgetify%2FYou-Dont-Know-JS"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/getify/You-Dont-Know-JS/watchers"
     aria-label="4041 users are watching this repository">
    4,041
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgetify%2FYou-Dont-Know-JS"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/getify/You-Dont-Know-JS/stargazers"
      aria-label="74338 users starred this repository">
      74,338
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgetify%2FYou-Dont-Know-JS"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/getify/You-Dont-Know-JS/network" class="social-count"
       aria-label="13306 users forked this repository">
      13,306
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/getify" class="url fn" rel="author">getify</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/getify/You-Dont-Know-JS" data-pjax="#js-repo-pjax-container">You-Dont-Know-JS</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/getify/You-Dont-Know-JS" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /getify/You-Dont-Know-JS" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/getify/You-Dont-Know-JS/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /getify/You-Dont-Know-JS/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">106</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/getify/You-Dont-Know-JS/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /getify/You-Dont-Know-JS/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">61</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/getify/You-Dont-Know-JS/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /getify/You-Dont-Know-JS/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >1</span>
</a>
    <a href="/getify/You-Dont-Know-JS/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /getify/You-Dont-Know-JS/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/getify/You-Dont-Know-JS/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /getify/You-Dont-Know-JS/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/getify/You-Dont-Know-JS/tree/1ed-zh-CN/this%20&amp;%20object%20prototypes"
               data-name="1ed-zh-CN"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1ed-zh-CN
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/getify/You-Dont-Know-JS/tree/master/this%20&amp;%20object%20prototypes"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      
  <button class="btn btn-sm BtnGroup-item disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes" type="button">
    Create new file
  </button>



      <a href="/getify/You-Dont-Know-JS/find/master" data-pjax data-hotkey="t" class="js-pjax-capture-input btn btn-sm BtnGroup-item empty-icon">
        Find file
      </a>
      <a href="/getify/You-Dont-Know-JS/commits/master/this%20%26%20object%20prototypes" class="btn btn-sm BtnGroup-item empty-icon tooltipped tooltipped-nw" aria-label="Browse commits for this branch">
        History
      </a>
    </div>
    <div class="breadcrumb"><span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/getify/You-Dont-Know-JS"><span>You-Dont-Know-JS</span></a></span></span><span class="separator">/</span><strong class="final-path">this &amp; object prototypes</strong><span class="separator">/</span></div>
  </div>

  


  <div class="commit-tease js-details-container Details">
    <span class="float-right">
      Latest commit
      <a class="commit-tease-sha" href="/getify/You-Dont-Know-JS/commit/6efd08c9db8e9808a9046204c719c99cb4702c18" data-pjax>
        6efd08c
      </a>
      <span itemprop="dateModified"><relative-time datetime="2017-08-15T15:40:04Z">Aug 15, 2017</relative-time></span>
    </span>


      <span class="commit-author-section">
          <a href="/getify" class="d-inline-block">
            <img src="https://avatars3.githubusercontent.com/u/150330?s=40&amp;v=4" width="20" height="20" class="avatar avatar-small" alt="@getify">
          </a>
        
  <a href="/getify" class="user-mention">getify</a>

      </span>

      <a href="/getify/You-Dont-Know-JS/commit/6efd08c9db8e9808a9046204c719c99cb4702c18" class="message" data-pjax="true" title="Merge pull request #990 from whitepear/master

Fix typos">Merge pull request</a> <a href="https://github.com/getify/You-Dont-Know-JS/pull/990" class="issue-link js-issue-link" data-url="https://github.com/getify/You-Dont-Know-JS/issues/990" data-id="214563509" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#990</a> <a href="/getify/You-Dont-Know-JS/commit/6efd08c9db8e9808a9046204c719c99cb4702c18" class="message" data-pjax="true" title="Merge pull request #990 from whitepear/master

Fix typos">from whitepear/master</a>
        <span class="hidden-text-expander inline">
          <button type="button" class="ellipsis-expander js-details-target" aria-expanded="false">&hellip;</button>
        </span>

      <div class="commit-desc"><pre class="text-small">Fix typos</pre></div>

  </div>



<div class="file-wrap">

  <a href="/getify/You-Dont-Know-JS/tree/3f9efe8aefb6d2b8ff9db983802acf62f7905edb/this%20%26%20object%20prototypes" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>
      <tr class="up-tree js-navigation-item">
        <td></td>
        <td><a href="/getify/You-Dont-Know-JS" class="js-navigation-open" rel="nofollow" title="Go to parent directory">..</a></td>
        <td></td>
        <td></td>
      </tr>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/README.md" class="js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-3a3f49e6f65b8cb94a27b270d297e6e722d98a92" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/cad0d7333ac547eb0cc9e506220baf9e9b12df8c" class="message" data-pjax="true" title="fixing/tweaking all the title readmes/toc&#39;s">fixing/tweaking all the title readmes/toc's</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-02-11T18:36:57Z">Feb 11, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/apA.md" class="js-navigation-open" id="af9c13de45fa4eac87a0d146d834c825-63fca998ad299ae93fcae808f5af82d62d73e511" title="apA.md">apA.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f4a0a6226e28ebc44b32e3b8c7c82834517c918f" class="message" data-pjax="true" title="fix typos">fix typos</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-03-16T00:12:25Z">Mar 16, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/apB.md" class="js-navigation-open" id="e965f113293a84b5866718187e319ac0-d1fb9f95667145f1f1fcb39642bdeef481f4207a" title="apB.md">apB.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/ce4c9f5cc0fb912619b87be01ba8d8a080c69e8f" class="message" data-pjax="true" title="all: correcting &#39;thank yous&#39; appendix title to &#39;acknowledgements&#39; to match the published versions">all: correcting 'thank yous' appendix title to 'acknowledgements' to …</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-03-01T17:08:58Z">Mar 1, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md" class="js-navigation-open" id="5b013e7010b1f8e4f6932dd6fb002bdf-4bd18fb181c7cd26212492eefc4a125bcebb9c73" title="ch1.md">ch1.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/e174929eec5b2840c6ef5bc07d6387ae61200b2d" class="message" data-pjax="true" title="Correct the result of code snippet

The snippet just simply logs `undefined` to the console, rather than throws a ReferenceError.">Correct the result of code snippet</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-07-21T03:24:32Z">Jul 21, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md" class="js-navigation-open" id="cea4600a73acf1f021dfce01227a34f6-1039120b717f063b2bc41a4c891b9370e0250cab" title="ch2.md">ch2.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/ed9ce893d6d8ee78c28279ac770cb4def030de7d" class="message" data-pjax="true" title="fixed typo">fixed typo</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-08-05T11:58:42Z">Aug 5, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md" class="js-navigation-open" id="a16f07cf1b9887e2344a96df4bc886a4-8821d862efc588d84dbf824f171d2aceaefaf1fa" title="ch3.md">ch3.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/6efd08c9db8e9808a9046204c719c99cb4702c18" class="message" data-pjax="true" title="Merge pull request #990 from whitepear/master

Fix typos">Merge pull request</a> <a href="https://github.com/getify/You-Dont-Know-JS/pull/990" class="issue-link js-issue-link" data-url="https://github.com/getify/You-Dont-Know-JS/issues/990" data-id="214563509" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#990</a> <a href="/getify/You-Dont-Know-JS/commit/6efd08c9db8e9808a9046204c719c99cb4702c18" class="message" data-pjax="true" title="Merge pull request #990 from whitepear/master

Fix typos">from whitepear/master</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-08-15T15:40:04Z">Aug 15, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md" class="js-navigation-open" id="eca58e722edd3254515254f62175aac0-6b1a1460a12cfcd57c3802414d7eeb137fd2f9c4" title="ch4.md">ch4.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/cb5021ae4db09c9bc400e8a3dd07731fa6efa09c" class="message" data-pjax="true" title="fix grammar in &quot;this &amp; object prototypes&quot; chap. 4">fix grammar in "this &amp; object prototypes" chap. 4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-02-14T22:55:43Z">Feb 14, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md" class="js-navigation-open" id="dd72bb5bf130294aa40a22d0de8d77c8-9d1272a6d6f69fe3183633708a690c2bbb68b916" title="ch5.md">ch5.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/bd3cc965cba4c13590cb2529d26a7fff798408ec" class="message" data-pjax="true" title="fix typos, wording">fix typos, wording</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-03-15T18:57:02Z">Mar 15, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md" class="js-navigation-open" id="bb2951ab48b4393d411112c3d2f917ee-dd4bbbe8d88ca87e9bf1d7a66d0a90aad9c422b2" title="ch6.md">ch6.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/bd3cc965cba4c13590cb2529d26a7fff798408ec" class="message" data-pjax="true" title="fix typos, wording">fix typos, wording</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2017-03-15T18:57:02Z">Mar 15, 2017</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/cover.jpg" class="js-navigation-open" id="4b1c59c7728e2b1cb65f6cb20aaf5cf9-a9b9365b23c3e4da79da4c05120038c697490f06" title="cover.jpg">cover.jpg</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/066ee18de9aa182992e5e9e4542ffcca6612c62e" class="message" data-pjax="true" title="this+object prototypes: adding final cover art">this+object prototypes: adding final cover art</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-07-18T15:27:13Z">Jul 18, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig1.png" class="js-navigation-open" id="083d6bc762610e1ae75d926a5c1aa998-bc67e0c029d0748f9743ec0b30990b0a924becba" title="fig1.png">fig1.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig2.png" class="js-navigation-open" id="31320a35aa87a8bd8b65e793a6b41d02-d5c6eed1375046ae5bc265b023e71f2f5225e094" title="fig2.png">fig2.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig3.png" class="js-navigation-open" id="c9509f75093e1e09daaba684b9e13621-836112c27d090c26646fdffaa8d238bedf28d1b1" title="fig3.png">fig3.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig4.png" class="js-navigation-open" id="8aa8557f131b553bd27b4352f9742638-b3c8907da508142f85efc6f7406544689e5450fd" title="fig4.png">fig4.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig5.png" class="js-navigation-open" id="754553c2a136261bed122b798f93d647-6c3c1e50aaf2479911cdcc1395bdae406591820c" title="fig5.png">fig5.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/fig6.png" class="js-navigation-open" id="a581195fbaeb64cad29b73b89fe791bd-b6a3c1e0448ea70fd7d5c1ce201c54e314b0216b" title="fig6.png">fig6.png</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/f572b557e652b1cf7302fa5d85a22ddc85daa4a5" class="message" data-pjax="true" title="this+object prototypes: added preliminary figures (1-6)">this+object prototypes: added preliminary figures (1-6)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T17:07:04Z">Apr 2, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/foreword.md" class="js-navigation-open" id="ad812ee0e3faeaa001ac4f6aa5300b6e-edfa6c47d9d4e2f2537f1658cc0c8de432527ba5" title="foreword.md">foreword.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/662ee95ac05e627680119f0386c1feb2ea566a24" class="message" data-pjax="true" title="fix all line-broken words in foreword">fix all line-broken words in foreword</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-08-11T16:40:25Z">Aug 11, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/toc.md" class="js-navigation-open" id="238ab96260bdf422aa9a88a86db1dda8-f61d916ae76bbd73a52c33b3a7838775481a1068" title="toc.md">toc.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/getify/You-Dont-Know-JS/commit/ce4c9f5cc0fb912619b87be01ba8d8a080c69e8f" class="message" data-pjax="true" title="all: correcting &#39;thank yous&#39; appendix title to &#39;acknowledgements&#39; to match the published versions">all: correcting 'thank yous' appendix title to 'acknowledgements' to …</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-03-01T17:08:58Z">Mar 1, 2015</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a href="#you-dont-know-js-this--object-prototypes" aria-hidden="true" class="anchor" id="user-content-you-dont-know-js-this--object-prototypes"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>You Don't Know JS: <em>this</em> &amp; Object Prototypes</h1>
<p><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/cover.jpg" target="_blank"><img src="/getify/You-Dont-Know-JS/raw/master/this%20%26%20object%20prototypes/cover.jpg" width="300" style="max-width:100%;"></a></p>
<hr>
<p><strong><a href="http://shop.oreilly.com/product/0636920033738.do">Purchase digital/print copy from O'Reilly</a></strong></p>
<hr>
<p><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/toc.md">Table of Contents</a></p>
<ul>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/foreword.md">Foreword</a> (by <a href="https://github.com/nberardi">Nick Berardi</a>)</li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/preface.md">Preface</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md">Chapter 1: <em>this</em> Or That?</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md">Chapter 2: <em>this</em> All Makes Sense Now!</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md">Chapter 3: Objects</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md">Chapter 4: Mixing (Up) "Class" Objects</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md">Chapter 5: Prototypes</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md">Chapter 6: Behavior Delegation</a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/apA.md">Appendix A: ES6 <em>class</em></a></li>
<li><a href="/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/apB.md">Appendix B: Thank You's!</a></li>
</ul>
</article>
  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.15326s from unicorn-1702413367-hnj8q">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-1378513244796959154de41db23c9593f69d95bfbc36e726129c610a32bc4f0f8fbc10c7dd974ff06d5b3c251e32ed0c3a7cf9317c9bcf1dbfff0dbd642e31fc.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-b92955d0a669da49b24ae11e55d967ec0e4ae4914c27e351338cd1eda57c3ef8b1106e2c3e9704cdf3602b24c39f2d86196d3f0b1d77a5a15b3e75de78636a2b.js"></script>
    
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-1bec0718373cc57a3b2beb7e2314d59577dab6ee841ec35f4384b7e546b697de736dee2017b6352ad3e6e685d4740a3da55089d943445eb511db6cb79a07d7f1.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

