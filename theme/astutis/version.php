<?php
/**
 * Plugin version and other meta-data are defined here.
 *
 * @package     theme_astutis
 * @copyright   2022 Istvan Toth<istvan.toth@astutis.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
// Every file should have GPL and copyright in the header - we skip it in tutorials but you should not skip it for real.

// This line protects the file from being accessed by a URL directly.                                                               
defined('MOODLE_INTERNAL') || die();                                                                                                
                                                                                                                                    
$plugin->component = 'theme_astutis';
$plugin->release = '0.2.7';
$plugin->version = 2022082200;
$plugin->requires = 2021051700;
$plugin->maturity = MATURITY_BETA;
                                                                                             
                                                                                                                                    
// This is a list of plugins, this plugin depends on (and their versions).                                                          
$plugin->dependencies = [                                                                                                           
    'theme_boost' => '2022041900'                                                                                                   
];