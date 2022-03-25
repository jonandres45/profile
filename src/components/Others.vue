<template>
    <div class='hero' id="home">
        <div class='promo'>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h1>I love the cats/dogs and the videogames</h1>
                        <h2>My nickname: <span class="nickname">jonandres45</span> on all platforms, add me and have fun together!</h2>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <v-icon large class="pr-5">mdi-sony-playstation</v-icon>
                        <v-btn x-large href="https://discordapp.com/users/jonandres45#7172">
                            <v-icon
                                large
                            >
                                mdi-discord
                            </v-icon>
                        </v-btn>
                        <v-icon large class="pl-5">mdi-microsoft-xbox</v-icon>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <img src="/static/pictures/videogame.png" class='image-video' alt='imageNotvideo'/>
        <video muted autoPlay loop class='image-video'>
            <source src="/static/videos/videogame.mp4" type="video/mp4"/>
        </video>
        <div class='capa'></div>
    </div>
</template>


<style>
.hero{
    min-height: 100vh;
    position: relative;
}

.promo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin:auto;
    position: relative;
    z-index: 2;
    color: white;
}

.promo h1{
    color: white;
    font-size: 8vh;
    font-family: 'NewYork';
    font-weight: 200;
    text-align: center;
    margin-bottom: 0px;
}
.promo h2{
    font-size: 5vh;
    font-family: 'NewYork';
    font-weight: 200;
    text-align: center;
    margin-bottom: 0px;
}

.image-video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.capa{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgb(31, 44, 78);
    opacity: 1;
    mix-blend-mode: overlay;
}
.nickname{
    color: rgb(194, 103, 182);
}
</style>
