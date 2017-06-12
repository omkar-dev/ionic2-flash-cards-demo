This is a basic Flash card demo based on custom directive [Ionic](http://ionicframework.com/docs/) projects. credits to josh morony original idea .This is a remake tutorial for purpose of learning only.

## Basic Component


We create a basic flash card component 

```bash
<flash-card>
 
    <div class="flash-card-front">FLASH CARDS</div>
 
    <div class="flash-card-back">ARE COOL</div>
 
</flash-card>
```

Css for flipping

```bash
  .flipper {
            transition: 0.6s;
            transform-style: preserve-3d;
 
            position: relative;
        }
        
        
    .front, .back {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ecf0f1;
            backface-visibility: hidden;
            -webkit-box-shadow: 0px 8px 4px -4px rgba(163,163,163,0.25);
            -moz-box-shadow: 0px 8px 4px -4px rgba(163,163,163,0.25);
            box-shadow: 0px 8px 4px -4px rgba(163,163,163,0.25);
            border: 1px solid #dee2e3;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
        }
        
        
        
              .front {
            z-index: 2;
            /* for firefox 31 */
            transform: rotateY(0deg);
        }
        
        
        
         .back {
            transform: rotateY(180deg);
        }
```

Substitute ios for android if not on a Mac.




## Preview:


![alt text](https://github.com/omkar-dev/ionic2-flash-cards-demo/blob/master/src/assets/flash-card-gif-2.gif)
