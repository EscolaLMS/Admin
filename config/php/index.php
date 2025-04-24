<?php

$content = file_get_contents("index.html");

if (is_file(dirname(__FILE__) . "/env_config.php")) {
    include_once "env_config.php";
    if (isset($domains) && key_exists($_SERVER['HTTP_HOST'], $domains)) {
        $setup = $domains[$_SERVER['HTTP_HOST']];

        if (isset($setup)) {
            if (isset($setup['REACT_APP_API_URL'])) {
                $content = preg_replace('/(?<=window.REACT_APP_API_URL=")(.*)(?=")/', $setup['REACT_APP_API_URL'], $content);
            }
            if (isset($setup['REACT_APP_SENTRYDSN'])) {
                $content = preg_replace('/(?<=window.REACT_APP_SENTRYDSN=")(.*)(?=")/', $setup['REACT_APP_SENTRYDSN'], $content);
            }
            if (isset($setup['REACT_APP_YBUG'])) {
                $content = preg_replace('/(?<=window.REACT_APP_YBUG=")(.*)(?=")/', $setup['REACT_APP_YBUG'], $content);
            }
            if (isset($setup['REACT_APP_USERWAY'])) {
                $content = preg_replace('/(?<=window.REACT_APP_USERWAY=")(.*)(?=")/', $setup['REACT_APP_USERWAY'], $content);
            }
        }
    }
}

echo $content;
