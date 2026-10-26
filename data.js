// A-Senior 2027 Course Reference: shared data
// Loaded by every page; edit here once, all pages update.
// Sources: A-Senior Course Guide 2027 (Final), A Senior Assignments and Rubrics (Oct 26, 2026),
// A-Senior 2027 Course Orientation deck (Oct 27, 2026), Assessment Philosophy, Learning & Development Framework.

const ACOLOR = {A1:"#000D62",A2:"#005CFF",A3:"#F20023",A4:"#16247A",MC1:"#16247A",MC2:"#16247A",MC3:"#16247A"};

// Domain colors are locked: The Player = Unifying Red, The Game = Enduring Blue, The Environment = Brilliant Blue
const DOMAINS = [
  {id:"player", name:"The Player", color:"#F20023"},
  {id:"game", name:"The Game", color:"#000D62"},
  {id:"env", name:"The Environment", color:"#005CFF"}
];

// The schedule. scripts/sync-schedule.mjs replaces this array at build time
// when SHEET_CSV_URL is set; until then it holds the dates from the orientation deck.
const ROWS = [{"grp":"Course","date":"Oct, 27, 2026","time":"Virtual","name":"Course Orientation Meeting","dur":"","core":"","int":"","asg":"","fac":"Gareth Smith/Kate Ainsworth/Joe DeMay"},{"grp":"Course","date":"Dec, 07, 2026","time":"TBC","name":"Virtual Week Day 1","dur":"","core":"","int":"","asg":"","fac":"TBC"},{"grp":"Course","date":"Dec, 08, 2026","time":"TBC","name":"Virtual Week Day 2","dur":"","core":"","int":"","asg":"","fac":"TBC"},{"grp":"Course","date":"Dec, 09, 2026","time":"TBC","name":"Virtual Week Day 3","dur":"","core":"","int":"","asg":"","fac":"TBC"},{"grp":"Course","date":"Dec, 10, 2026","time":"TBC","name":"Virtual Week Day 4","dur":"","core":"","int":"","asg":"","fac":"TBC"},{"grp":"Course","date":"Dec, 11, 2026","time":"TBC","name":"Virtual Week Day 5","dur":"","core":"","int":"","asg":"","fac":"TBC"},{"grp":"In-Person","date":"Jan, 11, 2027","time":"Jan 11–14","name":"IPM 1: Teaching Plan and Interactions","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"College group"},{"grp":"In-Person","date":"Jan, 25, 2027","time":"Jan 25–28","name":"IPM 1: Teaching Plan and Interactions","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"Pro group"},{"grp":"In-Person","date":"May, 17, 2027","time":"May 17–20","name":"IPM 2: Assess and Adjust","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"College group"},{"grp":"In-Person","date":"Jun, 07, 2027","time":"Jun 7–10","name":"IPM 2: Assess and Adjust","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"Pro group"},{"grp":"In-Person","date":"Dec, 06, 2027","time":"Dec 6–9","name":"IPM 3: Account and Transfer","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"College group"},{"grp":"In-Person","date":"Dec, 13, 2027","time":"Dec 13–16","name":"IPM 3: Account and Transfer","dur":"4 days","core":"","int":"","asg":"","fac":"Coach Educators","coh":"Pro group"}];

// The learning journey, from the orientation deck (slide 10) with descriptions from the Course Guide (7.2)
const PHASES = [
  {n:1, kind:"virtual", name:"Orientation", when:"October 27, 2026", text:"A virtual meeting before the course begins. Gain a clear picture of the course, what is expected of you and who will support you, so you can plan your season around it."},
  {n:2, kind:"virtual", name:"Virtual Week", when:"December 7–11, 2026", text:"The course begins. Virtual sessions across the week build a shared understanding of the Player, the Game and the Environment and how they support player development and your course experience."},
  {n:3, kind:"inperson", name:"In-Person Meeting 1", when:"College Jan 11–14 · Pro Jan 25–28, 2027", text:"Teaching plan and interactions: develop and implement a teaching plan from an activity you design before arriving. Build the foundation for each cycle by turning a plan into coaching that influences individual players within a connected group."},
  {n:4, kind:"virtual", name:"Online and Virtual", when:"February–April 2027", text:"Apply your learning in your own environment, with virtual meetings and an individual meeting with your Coach Educator after each assignment submission and each Applied Coaching cycle. Use feedback to reflect on your practice and adapt your approach."},
  {n:5, kind:"inperson", name:"In-Person Meeting 2", when:"College May 17–20 · Pro Jun 7–10, 2027", text:"Assess and adjust: analyze your Cycle 1 evidence and adjust your coaching live in response to the profiles and qualities of the players on site. Strengthen your ability to read evidence, respond to the players in front of you and influence your next cycle."},
  {n:6, kind:"virtual", name:"Online and Virtual", when:"June–August 2027", text:"Continue applied coaching, virtual meetings and individual meetings after each Applied Coaching cycle."},
  {n:7, kind:"virtual", name:"Online and Virtual", when:"September–November 2027", text:"Repeated cycles let you build on feedback; Cycle 3 is the final opportunity to demonstrate your coaching practice and development."},
  {n:8, kind:"inperson", name:"In-Person Meeting 3", when:"College Dec 6–9 · Pro Dec 13–16, 2027", text:"Account and transfer: explain your season, coach a problem from it live and reason across seasons with peers. Consolidate your learning and carry it beyond the course."},
  {n:9, kind:"summative", name:"Summative Assessment", when:"Micro-cycle 3 feedback", text:"Summative assessment comes through your Cycle 3 feedback."}
];

// Learning hours, from the orientation deck (slide 11)
const HOURS = [
  ["Three four-day in-person meetings", 90],
  ["Virtual meetings (1–2 per week)", 40],
  ["Live expert webinars", 20],
  ["Individual meetings with Coach Educator", 10],
  ["Applied coaching and independent study", 120]
];

// The nine competencies and the A Senior expected competency outcomes (Course Guide section 6, verbatim)
const COMP = [
  {name:"Relationship Building & Player Support", domain:"player", outcome:"Build and sustain relationships that respond to individual player needs, strengthen belonging and trust, and support player ownership and development over time."},
  {name:"Understanding Human Development", domain:"player", outcome:"Integrate an understanding of individual developmental characteristics, readiness and changing needs into coaching decisions, balancing long-term player development with performance demands."},
  {name:"Player Profiling & Team Management", domain:"player", outcome:"Develop, implement and adapt individualized player development processes, using player profiles, ongoing dialogue and evidence of progress to inform individual and team decisions over time."},
  {name:"Game Understanding", domain:"game", outcome:"Develop and implement a coherent game model that connects playing principles, individual player qualities and team development, adapting its application to the team’s evolving needs."},
  {name:"Observation & Analysis", domain:"game", outcome:"Systematically collect, interpret and integrate evidence of individual player development, team behaviors and opposition characteristics to evaluate progress and inform coaching decisions over time."},
  {name:"Tactical Adaptability", domain:"game", outcome:"Evaluate and adapt game plans and coaching strategies in response to player development, team performance and opposition demands, maintaining coherence with the game model and longer-term development priorities."},
  {name:"Coaching Approach", domain:"env", outcome:"Intentionally select, integrate and adapt coaching behaviors, communication, interactions and feedback to support individual and collective player learning, reflection, decision-making and autonomy, evaluating their influence over time."},
  {name:"Programming & Periodization", domain:"env", outcome:"Design, implement and adapt an integrated development and performance program across a competitive season, coordinating interconnected cycles in response to individual player needs, team development priorities and competitive demands."},
  {name:"Training & Game Design", domain:"env", outcome:"Design, implement and evaluate connected training and game experiences that integrate individual player development priorities, the game model and team performance demands, adapting learning opportunities to support player decision-making and development."}
];
const DOMAIN_OF = Object.fromEntries(COMP.map(c=>[c.name,c.domain]));
const DCOLOR = Object.fromEntries(DOMAINS.map(d=>[d.id,d.color]));

// Competency connection expectations from each assignment brief (verbatim), in brief order
const CONN = {
  A1: [
    ["Understanding Human Development","Articulates understanding of player development as an individualized, non-linear process grounded in evidence-based practices, including growth and maturation, cognitive development and decision-making, talent development and managing pathways, relative-age effect, gender differences, career stage and aging, load tolerance built up across a career, and return to performance from injury."],
    ["Player Profiling & Team Management","Conducts a systematic roster review and designs a structured development process that can be applied across the roster to developing and established players alike, identifying individual characteristics, needs, and development priorities through player profiles and ongoing dialogue with each player, and accounting for roster movement, selection, and minutes distribution."],
    ["Relationship Building & Player Support","Defines an approach and processes to build direct, professional connections with players across the roster, influenced by contract or scholarship and by selection, addressing wellbeing, belonging, accountability, and individual development as part of a development process that applies to any player and that each player consents to, helps create, and takes increasing ownership of."],
    ["Coaching Approach","Connects understanding of player development to the coach's coaching approach, identifying what that understanding demands of the coach and where current practice aligns with or contradicts it, including where results and selection pull against individual development."],
    ["Training & Game Design","Explains how players learn the game, how perception, decision-making, and execution develop together, and what that means for how training represents the game within the player development process."],
    ["Game Understanding","Connects player development philosophy to the game model. Identifies how individual player qualities and needs relate to the style of play."],
    ["Observation & Analysis","Observes and analyzes each player's behavior in games and training to identify development needs, reviewing game footage with the player and staff."],
    ["Tactical Adaptability","Identifies how the team will apply different systems, formations, and tactical approaches within the game model to meet player and team needs."],
    ["Programming & Periodization","Establishes a roster-wide approach to individual development that connects to the periodization plan in Assignment 3."]
  ],
  A2: [
    ["Game Understanding","Constructs a complete game model across all moments of the game, connecting playing principles, individual player qualities, and team development, and applies opposition analysis to game plans within the game model."],
    ["Observation & Analysis","Observes and analyzes individual and collective behaviors to assess game trends, club style, and player capabilities in relation to the game model, directing and interpreting the work of analysts, video platforms, and tracking data before, during, and after games."],
    ["Tactical Adaptability","Creates and adjusts coaching strategies and game plans in response to player development, team performance, and opposition demands, maintaining coherence with the game model, and establishes how the team will respond across all game moments."],
    ["Training & Game Design","Connects game model principles, behaviors, and individual player development priorities to the design of learning experiences that will develop players and the team's soccer across the season."],
    ["Player Profiling & Team Management","Connects the roster profile from Assignment 1 to game model development, seasonal objectives, and individual player goals within the model, accounting for roster movement, selection, and squad depth."],
    ["Understanding Human Development","Applies understanding of how players learn and develop across career stages to how the game model is taught, which principles come first, and how each player's qualities influence how a principle is expressed."]
  ],
  A3: [
    ["Programming & Periodization","Structures and sequences learning and performance experiences across time to systematically advance player and team development within the game model, planning physical load, player learning, game model development, and opposition preparation within the competitive calendar of a pro or college environment."],
    ["Training & Game Design","Constructs learning experiences grounded in game realities through a structured periodization approach to connect training design to game model demands, under fixture congestion and limited recovery windows at pro and activity-hour limits at college."],
    ["Player Profiling & Team Management","Differentiates development plans to address individual player characteristics, needs, developmental rates, and career stage through a method that applies across the roster."],
    ["Understanding Human Development","Applies understanding of growth and maturation, career stage, load tolerance built up across a career, and non-linear development to the individual periodization method and the monitoring system."],
    ["Coaching Approach","Plans coaching behaviors, communication, and interactions with players, coaching staff, and high-performance staff within the weekly plan and the individual periodization method, so individualization accounts for how a player is worked with as well as what they are given."],
    ["Observation & Analysis","Designs monitoring systems with high-performance staff and analysts to gather and analyze evidence of individual and team responses to training load, player learning, and game model development across the season."],
    ["Relationship Building & Player Support","Builds the personality and communication preferences of players, and each player's input into their own plan, into the individual periodization method."],
    ["Game Understanding","Applies the game model to identify the physical, cognitive, emotional, psychological, and social demands that drive the periodization structure and load sequencing."],
    ["Tactical Adaptability","Adjusts cycle objectives and load in response to game model demands, player readiness, player response, opposition demands, and the competitive schedule, maintaining coherence with the game model and longer-term development priorities."]
  ],
  A4: [
    ["Coaching Approach","Selects, integrates, and adapts coaching behaviors, communication, interactions, and feedback with players, coaching staff, and high-performance staff to support individual and collective player learning, reflection, decision-making, and autonomy, evaluating their influence over time."],
    ["Observation & Analysis","Observes and analyzes individual and collective behaviors to support player learning, development, and performance, directing and interpreting the work of analysts, video platforms, and tracking data before, during, and after games, and integrating evidence of individual player development, team behaviors, and opposition characteristics to evaluate progress over time."],
    ["Training & Game Design","Designs, implements, and evaluates connected training and game experiences that integrate individual player development priorities, the game model, and team performance demands, supporting player decision-making, under fixture congestion and limited recovery windows at pro and activity-hour limits at college."],
    ["Programming & Periodization","Organizes and sequences learning and performance experiences across time to systematically support player and team development within the pro or college competitive calendar."],
    ["Game Understanding","Understands the principles, intentions, and dynamics of the game, connecting playing identity and game models to long-term player and team development, and applies opposition analysis to plan for each game."],
    ["Tactical Adaptability","Creates and adjusts coaching strategies, game plans, and learning experiences in response to player development, team performance, and opposition demands, maintaining coherence with the game model, and weighs selection against individual player development."],
    ["Player Profiling & Team Management","Identifies player characteristics and needs through observation, communication, and analysis to support individual and team development, accounting for selection, minutes distribution, and roster movement."],
    ["Understanding Human Development","Understands how physical, cognitive, emotional, psychological, and social factors influence player development and learning over time, across career stages from young signings and first-year players to established veterans."],
    ["Relationship Building & Player Support","Builds direct, professional connections with players that foster wellbeing, belonging, trust, accountability, ownership, and development."]
  ]
};

// "Competencies connected in each brief" table (verbatim marks)
const DOTS = {
  "Relationship Building & Player Support":["A1","A3","A4"],
  "Understanding Human Development":["A1","A2","A3","A4"],
  "Player Profiling & Team Management":["A1","A2","A3","A4"],
  "Game Understanding":["A1","A2","A3","A4"],
  "Observation & Analysis":["A1","A2","A3","A4"],
  "Tactical Adaptability":["A1","A2","A3","A4"],
  "Coaching Approach":["A1","A3","A4"],
  "Programming & Periodization":["A1","A3","A4"],
  "Training & Game Design":["A1","A2","A3","A4"]
};

// Integrated submissions across the four briefs (row integrates with column)
const XLINK = {
  A1:{A2:"The game model connects to the capabilities and development needs of the players profiled in this plan.",A3:"The periodization plan individualizes load and emphasis for the players profiled in this plan.",A4:"The development process drives the work with the focus players in each micro-cycle, and the season is evaluated against the intentions of this plan and the course learning focus."},
  A2:{A1:"Each principle connects to the capabilities and development needs of the players profiled in A1.",A3:"The game model sets the emphasis of each training cycle and the demands that drive load sequencing.",A4:"The game model informs learning objectives, session strategy, and game plans, and its progression is evaluated across the season."},
  A3:{A1:"The individualization method starts from the development process and the players profiled in A1.",A2:"Cycle emphasis and load sequencing come from the demands of the game model.",A4:"The micro-cycles are planned from this structure, and the monitoring system informs adjustments within and between them."},
  A4:{A1:"The development process is applied to the focus players, and the season is evaluated against the A1 plan and course learning focus.",A2:"Learning objectives, game plans, and game analysis are set against the game model, and its progression is evaluated across the season.",A3:"Each micro-cycle is planned within the periodization structure and adjusted from the monitoring system."}
};

// The four assignments (A Senior Assignments and Rubrics, Oct 26, 2026; verbatim)
const ASG = [
  {id:"A1", name:"Player Development Process and Plan", sub:"Foundation for all subsequent coursework", phase:"Foundational and formative",
   desc:"Coaches articulate their understanding of the player development process, connect that understanding to their coaching approach, and plan which competencies they will develop during the course.",
   purpose:"Understanding the player development process addresses how individual players develop, how teams develop, and how training and games facilitate that development. This assignment requires the coach to design a structured, roster-wide development process specific enough to apply to any player, from a young signing or first-year player to an established veteran. This understanding and process drive all subsequent coursework: game model, periodization, and session designs all reflect beliefs about how players develop. The game is where a player's development needs are observed and where the player's development shows. The coach and the player review the player's games together, and the player helps identify the needs and set the plan.",
   steps:[
    {title:"Articulate your understanding of the player development process", paras:[
      "Define your core beliefs about how players learn and develop, what matters most in the development process, and how coaching influences development.",
      "Describe how individual development, team development and training interact. Describe how players learn the game: how perception, decision-making and execution develop together, and what that means for how training represents the game.",
      "Address development as individualized and non-linear: different rates, regressions and plateaus as normal parts of growth, and readiness that varies independent of chronological age. Address how development continues across a senior roster through career stage and aging, load tolerance built up across a career, and return to performance from injury.",
      "Ground your understanding in evidence-based practices and in examples from your coaching experience that formed these beliefs."]},
    {title:"Connect your understanding of development to your coaching approach", paras:[
      "Describe how your understanding of player development informs your coaching approach and what it demands from you as a coach. Acknowledge where your current practice aligns with or contradicts that understanding, including where results and selection pull against individual development."],
      note:"The game model in A2, the periodization plan in A3 and the session designs in A4 all reflect these beliefs."},
    {title:"Review the roster and design your player development process", paras:[
      "Review every player on the roster: motivation, personality, qualities, positional profile, depth chart position, career stage, strengths, development points and goals.",
      "Identify what influences each player's development outside training and games: maturation stage, contract or scholarship status, relocation, family situation, academic load and eligibility at college, other commitments, injury history and return to performance, and club pathway and loan status.",
      "Account for how roster movement, selection, minutes distribution and squad depth against results affect each player. At pro, roster movement includes transfer windows, loans, signings and releases. At college, it includes recruiting, graduation, the transfer portal, NIL and eligibility limits.",
      "From the review, identify team-wide development trends, each player's priorities, rate and trajectory of development, and how each player's qualities and needs relate to the team's style of play and the player's role in games.",
      "Design one structured, repeatable player development process that applies to any player, developing or established: how you and the player identify development needs from what the player does in games and training, set a direction, embed it in training and games, monitor it and adjust it over time.",
      "Describe the player's part in the process: how each player gives consent to their plan and helps create it, reviews game and training footage with you and the staff, and gives their own account of what they observed and decided to inform the plan. Name which coaching staff and high-performance staff contribute at each step. Where the roster includes players under 18, describe how guardians are involved and how safeguarding requirements apply.",
      "Describe how you will apply the process across the Applied Coaching micro-cycles, selecting representative focus players each micro-cycle who are central to its objectives, so the process is evidenced across a range of players and profiles over the season."],
      note:"The game model in A2 connects to the players profiled here, the individualization method in A3 starts from this process, and the process drives the work with the focus players in each A4 micro-cycle.",
      includes:["The roster review for every player on the roster","The player development process","For the three focus players for micro-cycle 1: the development need observed in games, three to four game clips for each player that show it, and a short summary of the review with the player"]},
    {title:"Plan your course learning focus", paras:[
      "Select specific competencies to develop during the course. For each one, describe in the competency language from the course guide's expected competency outcomes why it matters for your understanding of development and how developing it will help you by the course end."],
      note:"Micro-cycle 3 of A4 reviews these competencies against the evidence from all three micro-cycles."}
   ]},
  {id:"A2", name:"Game Model", sub:"Defining what the team's soccer looks like", phase:"Foundational and formative",
   desc:"Coaches define what their team's soccer looks like in each game moment, identify the principles and behaviors that align player behavior with their style of play, and establish what each player contributes to the team's game model.",
   purpose:"The game model defines how you operationalize your club's style of play and connect it with team and individual objectives relative to competition level and the players on the roster. It organizes principles and behaviors across each of the game moments, connects to your player development plan, and provides the foundation for periodization and session design. Each principle describes what players observe, decide, and do, and the qualities of the players on the roster influence how each principle is expressed. The coach builds the game content of each individual development plan from the game model with the player, so each player understands the role and the principles the plan works on.",
   steps:[
    {title:"Assess and define your game model foundation", paras:[
      "Assess trends in the modern game relevant to your context and competition level, and your club's style of play and existing game model.",
      "Identify the players' current capabilities and development needs, across developing and established players, and define how your game model aligns with your player development plan from A1. Identify how roster movement across the season affects how the game model is built and taught."]},
    {title:"Build your game model across each game moment", paras:[
      "Define the principles and sub-principles that guide player behavior in all game moments. Organize them to identify which are foundational, which build on others, and how they support individual and team development and performance.",
      "Describe the specific behaviors you want to see from the team and individuals in each moment. Define systems of play, formations and tactical organization, and individual roles and responsibilities within the team structure.",
      "For one key principle in each game moment, describe what a player in a key role observes, decides and does: the cue, the options it opens, and the action.",
      "With two players from the A1 roster review, explain how each player's qualities influence how a principle is expressed, including where the player's strengths open a different solution within the same principle."],
      includes:["The game model across all game moments","One game clip for the key principle in each game moment that shows the action","One game clip of each of the two players from the A1 roster review"]},
    {title:"Plan for opponents within the game model", paras:[
      "Conduct an opposition analysis of two opponents: one who challenges the implementation of your game model and one where the game model applies more directly. For each, identify the opponent's key characteristics, strengths and tendencies relevant to the game model. Explain how each analysis informs the game plan and tactics, what changes between the two game plans, and why the principles of the game model stay the same.",
      "Define how analysts, video platforms and tracking data support pre-game, in-game and post-game analysis, and how you direct and interpret that work."],
      note:"Each A4 micro-cycle applies this work to its own opponent through the game plan and the in-game coaching report.",
      includes:["The opposition analysis of both opponents"]},
    {title:"Plan how players learn the game model", paras:[
      "Explain how the game model is taught across the season: which principles come first, how players come to understand them, and how training recreates the game moments where they apply.",
      "Describe how players contribute: how player leaders and the group discuss the principles, review game moments together, and offer solutions the coach and staff build into the plan.",
      "Connect the development priorities of the players profiled in A1 to the principles of the game model, and describe how game evidence of each player's behavior within those principles is reviewed with the player across the season."],
      note:"The periodization plan in A3 sequences this teaching across the season, and each A4 micro-cycle reviews it with the focus players."},
    {title:"Establish measurement and goals", paras:[
      "Identify qualitative and quantitative measurements to analyze team and individual performance relative to your style of play and game model. For individuals, include development priorities and player profiles that specify how each player's qualities translate into their positional role. Include at least one measure of the quality of player decisions alongside the outcome of the action.",
      "Define Key Performance Indicators (KPIs) that track progress of the team and individual players toward your game model, and short, medium and long-term goals for developing the game model across the season, accounting for results and roster turnover."],
      note:"The monitoring system in A3 and the game analysis in each A4 micro-cycle draw on these measures."}
   ]},
  {id:"A3", name:"Periodization", sub:"Structuring the season to systematically develop players and the team", phase:"Foundational and formative",
   desc:"Coaches structure the season applying periodization principles to plan physical load, player learning, game model development, and opposition preparation across the season and the training week, design a method for individualizing periodization that can be applied across the roster, and establish a monitoring system for tracking responses to training.",
   purpose:"Periodization organizes the season so that training and games develop players and the team over time. Physical load is one part of the plan. The plan also manages cognitive load as it sequences player learning, the development of the game model, and preparation for each opponent across the week and the season. In the senior environment, the plan works inside the pro or college calendar: fixture congestion, midweek games, international windows, and travel at pro; the championship segment, spring segment, countable activity limits, travel, and academic calendar at college. The periodization plan individualizes load and emphasis for players at different career stages and provides the structure the Applied Coaching micro-cycles are built on. Individual development happens inside the team's training. The coach designs sessions that keep the information players act on in the game, so players learn to perceive, decide, and execute under game conditions while load is managed. The coach plans this with coaching and high-performance staff and builds in each player's input on load, emphasis, and how the player learns best.",
   steps:[
    {title:"Assess demands and establish season goals", paras:[
      "Assess the physical, cognitive, emotional, psychological and social demands of your game model from A2, including how they interact.",
      "Organize preseason and competitive season into training cycles, with a clear rationale for timing and emphasis based on the competitive calendar and game model implementation requirements. Set each cycle's emphasis across physical load, player learning, game model development and opposition preparation, and explain how it changes across the season.",
      "Build the competitive calendar for your environment into the structure. At pro, account for fixture congestion, midweek games, international windows and travel. At college, account for the championship segment, the spring segment, countable athletically related activity limits and the academic calendar.",
      "Define realistic, measurable season goals for the team and individual players, connected to how the periodization structure will achieve them."]},
    {title:"Design weekly training through a structured periodization approach", paras:[
      "Plan the training week by applying a structured periodization approach: technical, tactical, physical, psychological, recovery, competition simulation, competition. At pro, plan a one-game week and a week with a midweek game. At college, plan a week within countable athletically related activity limits and the academic calendar.",
      "Show how each week plans for player learning, game model development and opposition preparation alongside physical load, how the balance changes between week types, and how weekly training keeps developing the game model while the team prepares for each game. Explain when the team prepares for the next opponent, how that connects to the game model principles, and how it affects session content and load.",
      "Explain how sessions keep the information players act on in the game (teammates, opponents, the ball, space and the goal) while load is managed, so players keep perceiving, deciding and executing under game conditions.",
      "Provide a rationale for load type sequencing and distribution across the week, based on game model demands, player adaptation and the recovery windows between games. Explain how load types and the sequencing of activities within sessions, and of sessions within and across cycles, develop the physical, cognitive, emotional, psychological and social demands your game model requires, linking what you train to what you want to see in games.",
      "Describe how evidence from each game informs the next week's plan: who reviews it, including the players, when, and how it changes session objectives and individual emphasis. Explain how coaching staff and high-performance staff contribute to the weekly plan and load decisions, and how you plan your coaching approach with players and staff across the week."],
      note:"Each A4 micro-cycle is planned within this weekly structure.",
      includes:["The weekly plan for each planned training week","Session outlines for the planned training weeks"]},
    {title:"Design a method for individualizing periodization", paras:[
      "Design a structured, repeatable method for individualizing periodization that applies to any player on the roster, starting from the player development process and the players profiled in A1. Describe how you adjust load, progression and emphasis based on development needs, maturation or career stage, load tolerance built up across a career, position demands, injury history and return to performance, and minutes played.",
      "Account for different developmental rates and non-linear progression, since players respond differently to the same training load. Clarify how and when individual periodization differs from team periodization, and what triggers an individualized adjustment.",
      "Account for life circumstances that affect availability: international duty, travel, contract status, relocation, family, and at college, academic load and eligibility. Build each player's personality and communication preferences into the method, so it accounts for how a player is worked with as well as what they are given. Show how each player contributes to decisions about their own load and emphasis.",
      "With one player as an example, explain how the player's agreed development points are built into team activities through role, numbers, rules or space, so individual work happens inside the game the team trains."],
      includes:["The method for individualizing periodization","The example of one player from the roster"]},
    {title:"Establish a monitoring system", paras:[
      "Design a monitoring system with specific metrics for team and individual responses to training load, applicable to any player, including measures of player learning and game model development alongside physical load. Make sure it captures different rates of adaptation and non-linear development patterns.",
      "Identify methods for collecting and analyzing data to inform adjustments, and how you direct and interpret the work of high-performance staff, analysts and tracking technology."],
      note:"In A4, the monitoring system informs adjustments within and between micro-cycles.",
      includes:["The monitoring system"]}
   ]},
  {id:"A4", name:"Applied Coaching", sub:"Three two-week micro-cycles: all competencies integrated in practice", phase:"Micro-cycles 1 and 2 formative · micro-cycle 3 summative",
   desc:"Coaches complete three intensive two-week coaching micro-cycles throughout the season, during which all competencies are integrated into practice. Each micro-cycle includes planning, implementation, developing the individual, observing the game, and assessing the micro-cycle. This is where the player development process, game model, and periodization come together in practice, coached through micro-cycles across the season.",
   purpose:"Applied coaching brings the player development process, game model, and periodization plan together in practice. Across three two-week micro-cycles, the coach plans, coaches, observes, and assesses with coaching staff and high-performance staff, working with the players on the roster under result pressure, selection decisions, and the pro or college calendar. The micro-cycles provide the evidence for the course assessment: micro-cycles 1 and 2 are formative, and micro-cycle 3 is summative. Each focus player's development need is identified in the game with the player, coached in training that recreates those game moments, and reviewed with the player against the player's behavior in the next games. Each micro-cycle applies identify, respond, measure: identify the behaviors the players need, respond through a teaching plan and coaching interactions, and measure the influence on their development and performance. Across the three Applied Coaching micro-cycles, the standard must be met in two of the three with micro-cycle 3 among them. A micro-cycle meets the standard when there is sufficient evidence of competency capability across that micro-cycle, and no one strength in a micro-cycle makes up for another.",
   safety:"<b>Unsafe coaching practice cannot meet the expected standards.</b> When the coach creates, permits, or fails to address an unsafe physical or emotional playing environment, the micro-cycle does not meet the standard, whatever the quality of the rest of the work.",
   connNote:"This assignment integrates all nine competencies in applied coaching practice. Coaching Approach is the dominant and most observable competency.",
   parts:[
    {title:"Planning", items:[
      "Learning objectives aligned with game model and periodization, each stated as a game principle and the player actions that show it",
      "A teaching plan for each activity within the micro-cycle: what to coach, when to introduce it, and how to progress it within and across sessions",
      "The practice approach for each activity (directed, guided, or invited) and why it suits the objective, the players, and the point in the micro-cycle",
      "Training session plans with objectives, activities, coaching points, and load management planned with high-performance staff",
      "Game plan, including an opposition analysis of the opponent's key characteristics, strengths, and tendencies",
      "How the opposition analysis is built into training, so players practice observing and responding to the cues the opponent presents, and how players contributed to the game plan, documented in the session plans and game plan",
      "Staff roles and responsibilities for preparation, training, and the game",
      "The strategy connecting each session's objective to the game model: how the team intends to bring the objective about",
      "The observable conditions that indicate whether each session's objective is being achieved"]},
    {title:"Implementation", lead:"A complete two-week micro-cycle plan to include:", items:[
      "Session plans for every training session",
      "Video of one (1) complete training session during the first week leading up to the match being analyzed",
      "Documentation of implementation and adjustments within the recorded sessions",
      "Video of two activities, each from a different session occurring anywhere within the two-week micro-cycle, with neither drawn from the session recorded for the full session video, and a report identifying where the activity fits within the micro-cycle and session, the targeted load, the activity objective, gaps between planning and implementation, and the influence on individual player behavior within a unit or the team",
      "Session-level reflection for all sessions within the micro-cycle analyzing gaps between planned and implemented, why gaps occurred, and learning applied to subsequent sessions",
      "From the full session video and the two activity videos, explain how coaching interactions developed players' perception and decision-making: when the coach questioned, paused and showed, or let play continue, how players' answers informed the next part of the activity, and why"]},
    {title:"Developing the individual", items:[
      "Select three representative focus players for the micro-cycle who are central to the micro-cycle's objectives, changing at least two of the three in subsequent micro-cycles, and drawing across developing and established players over the three micro-cycles",
      "Apply the player development process from Assignment 1 to the focus players within the micro-cycle's training and games, with each focus player's consent and input",
      "For each focus player, identify with the player the game pattern being developed within a principle of the game model, and submit three to four clips from training and games that show the pattern across the micro-cycle, with a short summary of the review with the player",
      "Demonstrate influence on individual player development through on-field work across the entire two-week micro-cycle, evidenced by training and game footage, session plans, observation notes, and performance data",
      "Explain how selection and minutes for each focus player were decided, and how those decisions fit the player's development",
      "Show how the development process drove the work with the focus players across the whole micro-cycle"]},
    {title:"Observing the game", items:[
      "Submit an in-game coaching report documenting key moments during the match where you made a coaching decision: substitution, tactical adjustment, positional instruction, or halftime intervention. For each moment: describe what you observed, what information staff and analysts gave you, what decision you made, and the rationale behind it. Reflect on whether your in-game decisions were aligned with your game plan and how they affected the game.",
      "From game footage, analyze each focus player's behavior against the pattern being developed: what the player observed, the decision made, and the action. Summarize the review with the player, including the player's own account, and what it shows for the next sessions",
      "Analyze overall team performance relative to your game plan and game model with video and tracking data, and explain how you directed and interpreted the work of analysts",
      "Compare the opposition analysis with what the opponent did in the game",
      "Identify what was executed as planned and what was not, and explain the factors that influenced the outcome",
      "Explain how the game analysis and in-game coaching report inform the objectives and design of the future training sessions, the potential impact on micro-cycle planning, and assess what the game evidence reveals about the effectiveness of previous planning decisions within the game model and periodization plan"]},
    {title:"Assessing the micro-cycle", items:[
      "Compare planned vs. implemented at micro-cycle level",
      "Analyze why gaps exist",
      "Identify what worked and what didn't with evidence",
      "Define adjustments for future micro-cycles"]},
    {title:"Leadership Integration and Professional Development", items:[
      "Explain how understanding of development guided decisions",
      "Identify the connection between building relationships with players and the influence on their perceptions, decisions, and actions.",
      "Reflect on coaching development and competency growth",
      "Document collaboration with coaching staff and high-performance staff across planning, training, and the game, including how staff roles were set and how staff input influenced decisions"]}
   ],
   season:[
    {title:"Longitudinal Analysis of Game Model Implementation", items:[
      "Analyze team performance across the full season relative to your game model",
      "With video and data, show progression in game moments, principles, and behaviors",
      "Identify which aspects of the game model were developed as planned and which were not",
      "Explain the factors that influenced how the game model was implemented and how tactics within it were adapted, including roster movement, fixture congestion, and results"]},
    {title:"Longitudinal Analysis of the Player Development Process", items:[
      "Evaluate how your player development process scaled across the focus players worked with over the three micro-cycles",
      "Compare what the process achieved against the structure and intentions defined in your Assignment 1 plan",
      "Provide on-field evidence of the process influencing player development across different players, profiles, and career stages",
      "Address how the process held up or required adjustment as it moved across players with different needs, recognizing that development is individualized and non-linear",
      "Assess the effectiveness of the process and what you would adjust to influence development more widely across the roster"]},
    {title:"Season Reflection on Coaching Development", items:[
      "Review the competencies you identified in Assignment 1 as the learning focus",
      "Provide evidence of how those competencies developed across the three micro-cycles",
      "Analyze how developing these competencies impacted the team's soccer and player development",
      "Identify next steps for your continued development as a coach"]}
   ]}
];

// Rubric levels and the review questions (verbatim)
const LEVELS = [
  {id:"u", name:"Unsatisfactory", text:"The work does not yet demonstrate the standard, and the coach needs to make significant revisions to meet it."},
  {id:"r", name:"Revision Required", text:"The work does not yet demonstrate the standard, and key revisions or additional evidence can bring it to standard."},
  {id:"s", name:"Satisfactory", text:"The work as a whole demonstrates the A Senior Course standard."}
];

const ALLC = COMP.map(c=>c.name);
const RUBRICS = {
  A1:{label:"A1", title:"A1 rubric", asg:"A1", tag:"Foundational and formative", note:"The same standard applies to pro and college rosters.", bold:ALLC,
    u:"The coach describes beliefs about player development with no connection to the players on the roster or to the coach's own coaching approach. The coach cannot connect those beliefs to individual and team decisions.",
    r:"The coach describes a player development process but cannot yet explain how it applies to individual players, so the process cannot yet build into A2, A3 and A4.",
    s:"The coach describes a player development process for the players on the roster, built with each player from what the player does in games and connected to their coaching approach. The coach explains how the process informs individual and team decisions across the season and the work in A2, A3 and A4.",
    q:[["Pick any player from the roster review.","Can the coach explain how the development process applies to that player?","Review the roster and design your player development process"],
       ["Pick a developing player and an established player from the roster review.","Can the coach explain how the same process applies to both?","Review the roster and design your player development process"],
       ["Pick any core belief the coach describes about how players develop.","Can the coach connect it to the coach's own coaching approach?","Articulate your understanding of the player development process; Connect your understanding of development to your coaching approach"],
       ["Pick any place the coach identifies where results and selection pull against individual development.","Can the coach explain how the process informs that decision?","Connect your understanding of development to your coaching approach; Review the roster and design your player development process"],
       ["Pick any micro-cycle 1 focus player.","Can the coach show the development need in the player's game clips?","Review the roster and design your player development process"],
       ["Pick any micro-cycle 1 focus player.","Can the coach explain how the player's own account from the game review informed the plan?","Review the roster and design your player development process"]],
    ce:"The Coach Educator guides the coach to connect A1 with A2, A3 and A4, and to refine A1 as that work develops. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."},
  A2:{label:"A2", title:"A2 rubric", asg:"A2", tag:"Foundational and formative", note:"The standard is the same whether the coach builds and/or applies the game model.",
    bold:["Understanding Human Development","Player Profiling & Team Management","Game Understanding","Observation & Analysis","Tactical Adaptability","Training & Game Design"],
    u:"The coach describes a general style of play with no connection to the players profiled in A1. The coach cannot connect the game model to the development of players or the team.",
    r:"The coach describes a game model but cannot yet explain how it connects to the individual players profiled in A1, so the game model cannot yet build into A3 and A4.",
    s:"The coach defines a coherent game model across all moments of the game, in which each principle describes what players observe, decide and do, connected to the players profiled in A1 and to team development. The coach explains how the game model develops players and the team across the season and aligns it with A3 and A4.",
    q:[["Pick any principle in the game model.","Can the coach connect it to the capabilities and development needs of the players profiled in A1?","Assess and define your game model foundation; Plan how players learn the game model"],
       ["Pick any player profiled in A1.","Can the coach explain how the game model supports that player's development?","Plan how players learn the game model"],
       ["Pick any behavior the coach describes in the game model.","Can the coach explain how it will be measured?","Build your game model across each game moment; Establish measurement and goals"],
       ["Pick the two opponents the coach analyzed.","Can the coach explain how the game plan changes between them while the principles of the game model stay the same?","Plan for opponents within the game model"],
       ["Pick any key principle the coach describes for a game moment.","Can the coach show in the clip what the player observes, decides and does?","Build your game model across each game moment"],
       ["Pick either of the two players from A1.","Can the coach explain how the player's qualities change how the principle is expressed?","Build your game model across each game moment"]],
    ce:"The Coach Educator guides the coach to connect A2 with A1, A3 and A4, and to refine the game model as that work develops. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."},
  A3:{label:"A3", title:"A3 rubric", asg:"A3", tag:"Foundational and formative", note:"The same standard applies in the pro and college calendars.", bold:ALLC,
    u:"The coach describes a periodization plan built around physical load, with no connection to A1 or A2. The coach cannot connect the plan to the development of players and the team over time.",
    r:"The coach describes a periodization plan but cannot yet explain how it connects to the individual players from A1 and the game model from A2, so the plan cannot yet build into A4.",
    s:"The coach structures interconnected development cycles across a competitive season from the players profiled in A1 and the game model in A2. The coach explains how the plan develops players inside the game the team trains, over time, and aligns it with A4.",
    q:[["Pick any training cycle in the plan.","Can the coach connect its emphasis to the game model from A2?","Assess demands and establish season goals"],
       ["Pick any player profiled in A1.","Can the coach explain how the plan individualizes load and emphasis for that player?","Design a method for individualizing periodization"],
       ["Pick any training week in the plan.","Can the coach explain how player learning, game model development and opposition preparation are planned alongside physical load?","Design weekly training through a structured periodization approach"],
       ["Pick any measure in the monitoring system.","Can the coach explain how it would inform an adjustment?","Establish a monitoring system"],
       ["Pick any session in the planned training weeks.","Can the coach show how the session keeps the game information players use?","Design weekly training through a structured periodization approach"],
       ["Pick the player example.","Can the coach explain how the player's agreed development points are built into a team activity?","Design a method for individualizing periodization"],
       ["Pick any game in the plan.","Can the coach explain how the players' review of it informs the next week?","Design weekly training through a structured periodization approach"]],
    ce:"The Coach Educator guides the coach to connect A3 with A1, A2 and A4, and to refine the plan as that work develops. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."},
  MC1:{label:"A4 · Micro-cycle 1", title:"A4 micro-cycle 1", asg:"A4", tag:"Formative", bold:ALLC,
    u:"The coach plans, coaches, observes and assesses the micro-cycle with no connection to A1, A2 or A3. The coach cannot demonstrate influence on the focus players or the team.",
    r:"The coach plans the micro-cycle from A1, A2 and A3 but cannot yet demonstrate that connection in training and games or influence on the focus players.",
    s:"The coach plans, coaches, observes and assesses the micro-cycle from A1, A2 and A3. The coach's interactions with players and staff support individualized learning and development, and the coach demonstrates influence on the focus players in games, reviewed with each player, and on the team.",
    q:[["Pick any focus player in the micro-cycle.","Can the coach demonstrate the influence of the player development process from A1 on that player?","Developing the individual"],
       ["Pick any moment in the session video where the coach questioned, paused or let play continue.","Can the coach explain how it developed the players' perception and decision-making?","Implementation"],
       ["Pick any decision in the in-game coaching report.","Can the coach explain how it protected long-term development intentions?","Observing the game"],
       ["Pick any gap the coach identifies in the session reflections.","Can the coach demonstrate what changed in the next session?","Implementation"],
       ["Pick any focus player.","Can the coach show the game pattern across the player's clips from training and games?","Developing the individual"],
       ["Pick any activity in the micro-cycle.","Can the coach explain why the practice approach suits the objective and the players?","Planning"],
       ["Pick any behavior the coach identifies the players need.","Can the coach demonstrate how the teaching plan and coaching interactions influenced it?","Planning; Implementation"]],
    ce:"The Coach Educator guides the coach to connect micro-cycle 1 with A1, A2 and A3, and to carry what the coach learns into micro-cycle 2. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."},
  MC2:{label:"A4 · Micro-cycle 2", title:"A4 micro-cycle 2", asg:"A4", tag:"Formative", bold:ALLC,
    u:"The coach plans, coaches, observes and assesses micro-cycle 2 with no connection to A1, A2, A3 or micro-cycle 1. The coach cannot demonstrate influence on the focus players or the team.",
    r:"The coach plans micro-cycle 2 from A1, A2 and A3 but cannot yet demonstrate what changed from micro-cycle 1 or influence on the new focus players.",
    s:"The coach plans, coaches, observes and assesses micro-cycle 2 from A1, A2, A3 and micro-cycle 1. The coach's interactions with players and staff support individualized learning and development, and the coach demonstrates influence on the new focus players in games, reviewed with each player, and on the team.",
    q:[["Pick any adjustment the coach defined at the end of micro-cycle 1.","Can the coach demonstrate it in micro-cycle 2?","Assessing the micro-cycle (micro-cycle 1)"],
       ["Pick any development target from the micro-cycle 1 meeting with the Coach Educator.","Can the coach demonstrate how it was applied in micro-cycle 2?","Leadership Integration; the micro-cycle 1 meeting with the Coach Educator"],
       ["Pick any new focus player in micro-cycle 2.","Can the coach demonstrate the influence of the player development process from A1 on that player?","Developing the individual"],
       ["Pick any decision in the in-game coaching report.","Can the coach explain how it protected long-term development intentions?","Observing the game"],
       ["Pick any focus player.","Can the coach show the game pattern across the player's clips from training and games?","Developing the individual"],
       ["Pick any activity in the micro-cycle.","Can the coach explain why the practice approach suits the objective and the players?","Planning"],
       ["Pick any behavior the coach identifies the players need.","Can the coach demonstrate how the teaching plan and coaching interactions influenced it?","Planning; Implementation"]],
    ce:"The Coach Educator guides the coach to connect micro-cycle 2 with A1, A2, A3 and micro-cycle 1, and to carry what the coach learns into micro-cycle 3. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."},
  MC3:{label:"A4 · Micro-cycle 3", title:"A4 micro-cycle 3", asg:"A4", tag:"Summative", bold:ALLC,
    u:"The coach plans, coaches, observes and assesses micro-cycle 3 with no connection to A1, A2, A3 or micro-cycles 1 and 2. The coach describes the season with no connection to the work in A1 and A2.",
    r:"The coach plans micro-cycle 3 from A1, A2, A3 and micro-cycles 1 and 2 but cannot yet demonstrate influence on the focus players. The coach describes how the players, the team and the coach's own coaching developed across the season but cannot yet evaluate that development against the work in A1 and A2.",
    s:"The coach plans, coaches, observes and assesses micro-cycle 3 from A1, A2, A3 and micro-cycles 1 and 2. The coach's interactions with players and staff support individualized learning and development, and the coach demonstrates influence on the focus players in games, reviewed with each player, and on the team. The coach evaluates the season to demonstrate how the players, the team and the coach's own coaching developed against the work in A1 and A2.",
    q:[["Pick any moment in the micro-cycle 3 session video where the coach questioned, paused or let play continue.","Can the coach explain how it developed the players' perception and decision-making?","Implementation"],
       ["Pick any decision in the micro-cycle 3 in-game coaching report.","Can the coach explain how it protected long-term development intentions?","Observing the game"],
       ["Pick any focus player from the three micro-cycles.","Can the coach demonstrate how that player developed?","Longitudinal Analysis of the Player Development Process"],
       ["Pick two focus players at different career stages.","Can the coach demonstrate the player development process from A1 working for both?","Longitudinal Analysis of the Player Development Process"],
       ["Pick any intention from the A1 plan.","Can the coach evaluate the focus players' development against it?","Longitudinal Analysis of the Player Development Process"],
       ["Pick any principle of the game model from A2.","Can the coach demonstrate its progression across the season?","Longitudinal Analysis of Game Model Implementation"],
       ["Pick any part of the game model the coach identifies as not developed as planned.","Can the coach explain the factors behind it?","Longitudinal Analysis of Game Model Implementation"],
       ["Pick any competency from the A1 learning focus.","Can the coach demonstrate how it developed across the three micro-cycles?","Season Reflection on Coaching Development"],
       ["Pick any focus player.","Can the coach show the game pattern across the player's clips from training and games?","Developing the individual"],
       ["Pick any activity in the micro-cycle.","Can the coach explain why the practice approach suits the objective and the players?","Planning"],
       ["Pick any behavior the coach identifies the players need.","Can the coach demonstrate how the teaching plan and coaching interactions influenced it?","Planning; Implementation"]],
    ce:"The Coach Educator guides the coach to connect the work from A1, A2 and A3 through the three micro-cycles of A4, and to identify next steps in the coach's own development. At every level, the Coach Educator supports and challenges the coach's competencies to further their development."}
};

// CE Facilitation blocks. Content follows as each phase's facilitation briefs are developed.
const FACBLOCKS = [
  {id:"b1", label:"Block 1 · Foundation", range:"Oct 27, 2026–IPM 1 (Jan 2027)", status:"soon", blurb:"Orientation, Virtual Week and IPM 1."},
  {id:"b2", label:"Block 2 · Micro-cycle 1", range:"February–April 2027", status:"soon", blurb:"Online and virtual period through IPM 2."},
  {id:"b3", label:"Block 3 · Micro-cycle 2", range:"June–November 2027", status:"soon", blurb:"Online and virtual periods through IPM 3."},
  {id:"b4", label:"Block 4 · Summative", range:"December 2027", status:"soon", blurb:"IPM 3 and micro-cycle 3 summative feedback."}
];

// Groups. Lead Educator and Coach Educator assignments follow.
const COH = [
  {group:"College group", ipm:{ipm1:"Jan 11–14, 2027", ipm2:"May 17–20, 2027", ipm3:"Dec 6–9, 2027"}},
  {group:"Pro group", ipm:{ipm1:"Jan 25–28, 2027", ipm2:"Jun 7–10, 2027", ipm3:"Dec 13–16, 2027"}}
];

const TEAM = [
  {name:"Joe DeMay", role:"Head of A License"},
  {name:"Gareth Smith", role:"A-Senior Technical Lead"},
  {name:"Kate Ainsworth", role:"A-Senior Operations Lead"}
];


// ---- shared utilities used across pages ----
const NS = "as2027:note:";
const noteKey = r => (r.date+"|"+r.name+"|"+(r.coh||"")).toLowerCase().replace(/\s+/g," ").trim();
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function chip(a){
  a=a.trim(); if(!a) return '';
  const c = ACOLOR[a] || '#595959';
  return `<span class="chip" style="--c:${c}">${a}</span>`;
}
function compChip(name, on){
  const c = DCOLOR[DOMAIN_OF[name]] || '#595959';
  return `<span class="dchip${on===false?' off':''}" style="--c:${c}">${esc(name)}</span>`;
}
// facilitation-guide lookup (empty until facilitation briefs are built)
const FACLOOKUP = [];
FACBLOCKS.forEach(b=>{ if(b.meetings) b.meetings.forEach(m=>FACLOOKUP.push(m)); });
function normName(s){
  return (s||'').replace(/^IPM\d+\s*[\u2014\-:]+\s*/i,'')
    .toLowerCase().replace(/&amp;/g,'&').replace(/[^a-z0-9]+/g,' ').trim();
}
function dateTok(s){
  const m=(s||'').match(/([A-Za-z]{3})[a-z]*\.?,?\s*(\d{1,2})/);
  return m? (m[1].toLowerCase()+m[2]) : null;
}
function findGuide(row){
  const rTok=dateTok(row.date), rName=normName(row.name);
  for(const m of FACLOOKUP){
    const mTok=dateTok(m.date), mName=normName(m.name);
    if(rTok && mTok && rTok===mTok) return m;
    if(rName && mName && (mName.includes(rName)||rName.includes(mName))) return m;
  }
  return null;
}

// Balanced card rows: pick the column count with the fewest empty slots and
// never leave one card alone on the last row; fall back to one column.
function balanceGrids(){
  document.querySelectorAll('[data-balance]').forEach(g=>{
    const n = g.children.length; if(!n) return;
    const min = parseInt(g.dataset.balance,10) || 240;
    const gap = 14;
    const maxCols = Math.max(1, Math.min(n, Math.floor((g.clientWidth + gap) / (min + gap))));
    let best = 1, bestEmpty = Infinity;
    for(let c = maxCols; c >= 2; c--){
      const rem = n % c;
      if(rem === 1) continue;
      const empty = rem === 0 ? 0 : c - rem;
      if(empty < bestEmpty){ best = c; bestEmpty = empty; }
      if(empty === 0) break;
    }
    g.style.gridTemplateColumns = `repeat(${best}, minmax(0, 1fr))`;
  });
}
window.addEventListener('resize', balanceGrids);
document.addEventListener('DOMContentLoaded', balanceGrids);
