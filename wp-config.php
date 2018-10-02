<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cl38-a-wordp-ux0');

/** MySQL database username */
define('DB_USER', 'cl38-a-wordp-ux0');

/** MySQL database password */
define('DB_PASSWORD', 'UmyC7.9de');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uUvVL-uTN9v8U/lFq)uiVg(nY4y3/#CQTUT80UPQuPfT7HtlLTz7luZhGM-vzyex');
define('SECURE_AUTH_KEY',  '9UBf9Gxn=)-OUzf4(!/QS-ucOvWr_0v^2RtAlJhOIFf(d--z0HWe^w(OD8b+_SzL');
define('LOGGED_IN_KEY',    'QW#wuKWywS+NGu#D7fKz(K-bvACn3CO+gvlfxjPx_i0RMr_NhhaVg5xSxW#+_Tos');
define('NONCE_KEY',        'hx!Zjkpp-!3sXwm1/iYw!+bZ_NH1_YX1Pxww+qsIH/K22pUqNpIcCM0R097pzy5d');
define('AUTH_SALT',        'w=PqHLyp6nDOyFIHHE8Ph!PKJbye/FJ+)MSD=8qysq+TKEhwW07ITKdaagN1XQOy');
define('SECURE_AUTH_SALT', '0XTYfPxOWbn)+5(I_t!zY_84_qu/4l8^Vndl#uD37D6_0jZoehEn-#j0y47Gp_Ea');
define('LOGGED_IN_SALT',   'n6lL!aaqq9t1o3vc7lolg/Qxq5)bKwA0AHhLen4j3SoJXv7d#3MO+_#R=f6qv+xr');
define('NONCE_SALT',       'VtYHHGUa1i0/HdHepExm7s(d0WcIWAZ#lbJP56)J)NDVpdUuQ_51G6OuNdCphM)Q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 *  Change this to true to run multiple blogs on this installation.
 *  Then login as admin and go to Tools -> Network
 */
define('WP_ALLOW_MULTISITE', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/* Destination directory for file streaming */
define('WP_TEMP_DIR', ABSPATH . 'wp-content/');

