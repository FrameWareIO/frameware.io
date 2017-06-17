import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const MainAppBar = () => ( <
    AppBar title = "Title"
    style={{ backgroundColor: '#2196F3' }}
    iconClassNameRight = "muidocs-icon-navigation-expand-more" /
    >
);

export default MainAppBar;