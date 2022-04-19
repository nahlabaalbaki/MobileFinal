<?php

inlcude("../../dbconnection.php");
?>
<ion-header>

</ion-header>

<ion-content class="root">
    <ion-card class="card" color="Light">

        <ion-card-header>
          <ion-card-title class="title">Sign Up</ion-card-title>
          <ion-card-subtitle class="subtitle">You are on the Right Track!</ion-card-subtitle>
        </ion-card-header>
      
        <ion-card-content>


            <ion-item class="item" color="Light">
                <ion-label position="floating">Name</ion-label>
                <ion-input type="name" name="name" required></ion-input>
            </ion-item>
          
            <ion-item class="item" color="Light">
                <ion-label position="floating">Username</ion-label>
                <ion-input type="name"name="username" required></ion-input>
            </ion-item>

            <ion-item class="item" color="Light">
                <ion-label position="floating">Password</ion-label>
                <ion-input type="password" name="password" required></ion-input>
            </ion-item>

            <ion-item class="item" color="Light">
                <ion-label position="floating">Email</ion-label>
                <ion-input type="email" name="email" required></ion-input>
            </ion-item>

                <ion-button class="button2" color="Light" size="large" (click)="register()">Sign Up</ion-button>
        
        </ion-card-content>

      </ion-card>
   

</ion-content>
