<template>

    <nav>

        <!-- the menu -->
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click=" drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>

            <!-- spacer will take the remaining space -->
            <v-spacer></v-spacer>

            <!-- dropdown start -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="grey" flat v-on="on">
                        Menu
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.route" router :to="link.route">
                        <v-list-tile-title>
                            <v-icon small left>{{ link.icon }}</v-icon>
                            {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>


            <!-- dropdown end -->

            <v-btn flat color="grey">
                <span>sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>


        <!-- 
            the sidebar:
            NB : we have to keep the app prop to get the background 
        -->
        <v-navigation-drawer v-model="drawer" app class="primary">

            <!-- tue top element of our menu-->
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">The Net Ninja</p>
                </v-flex>

                <v-flex class="mt-4 mb-3">
                    <popup />
                </v-flex>

            </v-layout>

            <!-- we loop on the menu to create our links -->
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text"> {{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>


    </nav>

</template>

<script>
    import Popup from './Popup';

    export default {
        components: {
            Popup
        },
        data() {
            return {
                drawer: false,
                links: [{
                        icon: 'dashboard',
                        text: 'Dashboard',
                        route: '/'
                    },
                    {
                        icon: 'folder',
                        text: 'My Projects',
                        route: '/projects'
                    },
                    {
                        icon: 'person',
                        text: 'Team',
                        route: '/team'
                    }
                ]
            }
        }
    }
</script>