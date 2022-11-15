const {Game} = require('./Data.js')
const {AddGame} = require('./Data.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.set("views", "/Users/venkatasrikarakella/Documents/supradeep/views")
app.get('/', (req, res) => {
    let game = new Game(req, res, "default")
    game.getGames()
})

app.post('/', (req, res) =>{
        let data = new Game(req, res,req.body.query)
        if(req.body.operation ==='read'){
            data.getRow()
        }
        else if(req.body.operation ==='delete'){
            data.deleteRow()
        }
        else if(req.body.operation ==='modify'){
            return res.redirect('modify.html')
        }
        else if(req.body.operation === 'add'){
            return res.redirect('add.html');
        }
})
app.get('/add.html', (req, res) =>{
    res.sendFile('/Users/venkatasrikarakella/Documents/supradeep/add.html')
})
app.post('/add.html', (req, res)=>{
    let values1 = [req.body.game_name, req.body.publisher, req.body.developer, req.body.date]
    let values2 = [req.body.game_name, req.body.description, req.body.tags, req.body.category]
    let data = new AddGame(req, res, values1, values2)
    data.addRow()
})
app.get('/modify.html', (req, res) =>{
    res.sendFile('/Users/venkatasrikarakella/Documents/supradeep/modify.html')
})
app.post('/modify.html', (req, res) => {
    let values1 = [req.body.game_name, req.body.publisher, req.body.developer, req.body.date]
    let values2 = [req.body.game_name, req.body.description, req.body.tags, req.body.category]
    let game = new Game(req, res, req.body.game_name)
    game.modifyRow(values1, values2)
})
app.listen(3000, function(){
    console.log('Server listening on port 3000')
})




/**
 * Zhang Bao - Officer Ticket / 張苞使用券


This Starry Void
GrabBag

Selene ~Apoptosis~
SPACE / MECH / PILOT
MECHBLAZE
Sunset Mall
Virtuverse
Cute Honey 2
Don't Cheat On Me
Hanako | 花子さん
LemWars
Cooking Simulator - Pizza
Castle Rock Beach, West Australia
When The Night Comes
Save the Date
Black Hole Simulator
World War 2: Strategy Simulator
破镜恐惧
Viking City Builder
Lust from Beyond: Scarlet
Chinatown Detective Agency: Day One
SCP: Labrat
Zenith MMO
Earth From Another Sun
Milo
Ultimate Admiral: Dreadnoughts
After I met that catgirl, my questlist got too long!
Echo Generation
Outrider Mako
Drill Man Rumble
Melon Journey 2
Dust to the End
Eudemons Online
Weaving Tides
TOHU
Dream Engines: Nomad Cities
Anilife - An Animal Survival Adventure
Syntherapy
Public Defense Corp
Ambrosia
Motorcycle Mechanic Simulator 2021
Sumerians
Cris Tales
Electrician Simulator
Swordbreaker: Origins
Naked and Afraid: The Game
Gold Hunter
Viking Vengeance
Destroy All Humans!
FOBIA - St. Dinfna Hotel
Hadr
Maze Qore Arena
Takorita Meets Fries
Claire de Lune
Bloodstone
Wanba Warriors
A Painter's Tale: Curon, 1950
Sword Game
Redout: Enhanced Edition
Body of Evidence
Xenon Racer
Detroit: Become Human
Uragun
Knight Squad 2
Strings Theory
FINAL FANTASY XV WINDOWS EDITION PLAYABLE DEMO
Pile Up!
Souls Lore
.hack//G.U. Last Recode
Landflix Odyssey
Circadian City
Sniper: Ghost Warrior 2
UPPERS
Mechs V Kaijus
Wira & Taksa: Against the Master of Gravity
Mazgeon
Hidden Protector : ROADTRIP
Call of the Sea
Spherical alliance
Football Manager 2020 Touch
Silence
Battlestations Pacific
Heart in the Dark
Warshmallows
HyperCore
SLEIGHT - Nerve Wracking Espionage Party Game
Roarr! The Adventures of Rampage Rex
A.N.N.E
Deathbound
Hunting Simulator
Martian Law
Exit Limbo: Opening
Rogue Aces Deluxe - 2D aerial combat with local multiplayer deathmatches
Niplheim's Hunter - Branded Azel
Farm Your Friends
迷雾竞技场 Mist Arena
Tomb Raider: Anniversary
SURVIVAL: Postapocalypse Now
Chernobyl Liquidators Simulator
CarX Streets
Blood Opera Crescendo
Will You Snail?
World of Guns VR: World War I
World of Guns VR: Pistols Pack #2
World of Guns VR: Bolt Action Rifles Pack #1
The Lost and The Wicked
Davigo
GONNER2
Cuphead - The Delicious Last Course
Lake
Paralives
Ranch Simulator - The Realistic Farm Building and Agriculture Management Sandbox
In Sound Mind
Builder Simulator
Roman Legionary
Mech Hunter
GRIME
Farm Manager 2021
Snowtopia: Ski Resort Tycoon
HUMANKIND™
Fallen Angel
Ancient Dungeon VR
Snacko
NEKOPARA Vol. 4
Spelunky 2
The Outer Worlds
BIOMUTANT
The Invincible
Hood: Outlaws & Legends
Chronos: Before the Ashes
Quantum Lock
art of rally
TUNIC
Phantom Brigade
3DMark VRS feature test
TILE
Dead by Daylight - Left Behind
Remnants
Perfect Gold - Yuri Visual Novel
End State
Super Meat Boy Forever
Rocksmith® 2014 Edition – Remastered – Classic Riff Song Pack
Rocksmith® 2014 Edition – Remastered – 70s Rock Song Pack
Ooblets
The Elder Scrolls V: Skyrim Special Edition - Creation Club
Boreal Blade
Unto The End
The Hand of Merlin
Lapso
Mortal Shell
ROBOTICS;NOTES ELITE
ROBOTICS;NOTES DaSH
Klang 2
Never BreakUp
HyperCore
Isles of Adalar
Calico
Chernobyl Liquidators Simulator
CarX Streets
Blood Opera Crescendo
Will You Snail?
World of Guns VR: World War I
World of Guns VR: Pistols Pack #2
World of Guns VR: Bolt Action Rifles Pack #1
The Lost and The Wicked
Davigo
GONNER2
Cuphead - The Delicious Last Course
Lake
Paralives
Ranch Simulator - The Realistic Farm Building and Agriculture Management Sandbox
In Sound Mind
Builder Simulator
Rocksmith® 2014 – Deftones Song Pack
Rocksmith® 2014 – Audioslave Song Pack
Rocksmith® 2014 – Tom Petty Song Pack
Rocksmith® 2014 – Bullet For My Valentine Song Pack
Rocksmith® 2014 – Bon Jovi Song Pack
Rocksmith® 2014 – Rage Against the Machine Song Pack (I-II)
Rocksmith® 2014 – Jimi Hendrix Song Pack (I-II-III-IV)
Rocksmith® 2014 – Linkin Park Song Pack
New Gunbound
Saints Row IV: Game of the Century Edition
Life is Strange - Episode 2
[Main] SteamVR
Refactor
Rocksmith® 2014 – Three Days Grace Song Pack
Rocksmith® 2014 – Seether Song Pack
Rocksmith® 2014 – Bush Song Pack
EITR
Fazbear Nightmare
Skull & Bones™
Infernax
Sparkour
Rubber Bandits
Medieval Farmer Simulator
Samurai Simulator
RC Service Simulator
Hammerting
Mr. Prepper
Maquette
Orphan Age
Truck Driver
SMALLAND
The Red Solstice 2: Survivors
Mushrooms: Forest Walker
Exo One
Rhythm Doctor
HoloFist
Crab Champions
乱战机动队 Past Due
Filmmaker Tycoon
The Riftbreaker
The Haunted House of Doom
Hush Hush - Only Your Love Can Save Them
RAWMEN
Massive Galaxy
Emergency Call 112 – The Fire Fighting Simulation 2
WHAT THE GOLF?
Remnants of Naezith OST
Rogue Heroes: Ruins of Tasos
Mask of Fury
Plastic Rebellion
WarZone
Figment: Creed Valley
Mondrian - Plastic Reality
Car Mechanic Simulator VR
911 FR
Distant Kingdoms
Cathedral 3-D
BOMJMAN
Inscryption
Savior
Dear My Friend
Airtight City 密闭之城
Solasta: Crown of the Magister
Vital Signs: Emergency Department
Twelve Minutes
Weird West
 */