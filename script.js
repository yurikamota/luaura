const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
})


const cards = [
    "thefool.png", "themagician.png", "thehightpriest.png", "theempress.png", "theemperor.png", "thehierophant.png", "thelovers.png", "thechariot.png",
    "strength.png", "thehermit.png", "wheeloffortune.png", "justice.png", "thehangedman.png", "death.png", "temperance.png", "thedevil.png",
    "thetower.png", "thestar.png", "themoon.png", "thesun.png", "judgement.png", "theworld.png", "aceofpentacles.png", "twopentacles.png",
    "threepentacles.png", "fourpentacles.png", "fivepentacles.png", "sixpentacles.png", "sevenpentacles.png", "eightpentacles.png", "ninepentacles.png",
    "tenpentacles.png", "pagepentacles.png", "knightpentacles.png", "queenpentacles.png", "kingpentacles.png", "acecups.png", "twocups.png",
    "threecups.png", "fourcups.png", "fivecups.png", "sixcups.png", "sevencups.png", "eightcups.png", "ninecups.png", "tencups.png", "pagecups.png",
    "knightcups.png", "queencups.png", "kingcups.png", "acewands.png", "twowands.png", "threewands.png", "fourwands.png", "fivewands.png", "sixwands.png",
    "sevenwands.png", "eightwands.png", "ninewands.png", "tenwands.png", "pagewands.png", "knightwands.png", "queenwands.png", "kingwands.png", "aceswords.png",
    "twoswords.png", "threeswords.png", "fourswords.png", "fiveswords.png", "sixswords.png", "sevenswords.png", "eightswords.png", "nineswords.png", "tenswords.png",
    "pageswords.png", "knightswords.png", "queenswords.png", "kingswords.png",
  ];

  const messages = {
"thefool.png": {
  title: "The Fool: allow yourself to start over",
  verse: "The Fool appears to remind you that the most important path is the one you don't know yet. Today, life may invite you to take a leap of faith or face something new with a light heart. Trust your intuition more than external opinions, because no one but you knows which path truly makes you vibrate.Just be careful with impulsiveness without direction. Freedom is not irresponsibility — it is a light but conscious presence.",
  subtitle: "Take a new step with lightness and courage."
},
"themagician.png": {
  title: "The Magician: the power is in your hands",
  verse: "The Magician reminds you that you already have the tools you need — now it’s time to use them with intention. Today is a great day to put an idea into practice or turn thought into action. Your mind is sharp, and your creativity is calling for expression.Don’t wait until you’re 100% ready. You just need to get started.",
  subtitle: "Act with confidence and manifest your will in the world."
},
"thehightpriest.png": {
  title: "The High Priestess: silence carries answers",
  verse: "The High Priestess appears when it is time to listen more and speak less. Your intuitive field is active and sensitive today — pay attention to your dreams, to what is between the lines and what is left unsaid. Avoid impulsive decisions or over-exposure. Retreating is also strength.",
  subtitle: "Trust your intuition and stay calm."
},
"theempress.png": {
  title: "The Empress: bloom gently",
  verse: "Today, your power lies in your ability to nurture. It could be an idea, a relationship, or even yourself. The Empress reminds you that harvest time begins with the care we give to what is a seed. Value pleasure and beauty — they are not superfluous, they are food for the soul.",
  subtitle: "Nourish with love what you want to see grow."
},
"theemperor.png": {
  title: "The Emperor: structure your strength",
  verse: "The Emperor invites you to take the reins of the situation with firmness and maturity. Today is the day to organize, plan, set limits, and assume authority over what is yours. Avoid excessive rigidity — healthy leadership is achieved with firmness and flexibility.",
  subtitle: "Take control with responsibility and balance.."
},
"thehierophant.png": {
  title: "The Hierophant: honor what is sacred",
  verse: "Today, wisdom can come from an authority figure, an ancestral teaching, or even an old memory. The Hierophant talks about faith, tradition, and learning. It's a good time to seek advice, study, or remember values ​​that sustain you.",
  subtitle: "Connect with what teaches you and strengthens you spiritually"
},
"thelovers.png": {
  title: "The Lovers: choosing with the Heart",
  verse: "The Lovers card appears when we are faced with a moment of decision — emotional, affective or internal. Today, the Tarot invites you to reflect: am I being guided by true connection or by fleeting illusions? True love, including self-love, is born from conscious choice and not from need.",
  subtitle: "Listen to your innermost truth before deciding."
},
"thechariot.png": {
  title: "The Chariot: direct your strength",
  verse: "The Chariot appears when it is time to take momentum and move forward, but with focus. Today, you will be called to act with determination, but also with clear direction — or you risk wasting energy in vain. You don't need to rush the path, but rather guide it with firm reins.",
  subtitle: "Move forward with courage and purpose."
},
"strenght.png": {
  title: "Strenght: gentleness is also power",
  verse: "Strength reminds you that there is a silent force within you, more powerful than imposition. Today, the challenge may be to tame your own anger, anxiety or impulses — but with compassion, not repression. You don't need to prove anything to anyone. Your self-control is your greatest ally.",
  subtitle: "Master your emotions with gentleness and firmness."
},
"thehermit.png": {
  title: "The Hermit: light is born from silence",
  verse: "Today, perhaps the best path is retreat. The Hermit teaches that sometimes we need to pause, listen to our inner voice and allow wisdom to emerge in the calm.The answer you seek is not out there. It is in the silence between thoughts.",
  subtitle: "Step away from the external noise and listen to your inner wisdom."
},
"wheeloffortune.png": {
  title: "Wheel of Fortune: embrace Life's Twists and Turns",
  verse: "Life turns — and the Wheel of Fortune reminds you that everything changes. Today, you may experience unexpected twists and turns, surprises, or synchronicities that seem magical (or chaotic). Trust: what changes invites you to grow.",
  subtitle: "Embrace the movement and adapt with faith."
},
"justice.png": {
  title: "Justice: balance your heart and reason",
  verse: "Justice arises when you need to make a decision with clarity, truth and responsibility. Today, you will be called to be fair with yourself and others — avoiding impulsive judgments or emotional favoritism. Honesty, although difficult, is always liberating.",
  subtitle: "Act with integrity and seek balance."
},
"thehangedman.png": {
  title: "The Hanged Man: surrender to divine timing",
  verse: "The Hanged Man invites you to stop fighting the flow. Today, the Tarot asks for surrender — not out of weakness, but out of wisdom. Sometimes, only time can resolve what you want to control now. Look at it from another angle. Waiting is also part of healing.",
  subtitle: "Trust the process and accept what you cannot change now."
},
"death.png": {
  title: "Death: something needs to be left behind",
  verse: "Death does not speak of the end, but of inevitable transformation. Today, it is time to release what no longer serves you — a habit, a thought, an attachment. Ending cycles makes room for the new, even if it hurts a little.",
  subtitle: "Let go with courage. Rebirth awaits you."
},
"temperance.png": {
  title: "Temperance: everything fits in its own time",
  verse: "Temperance is the invitation to a gentle balance between action and pause, between reason and emotion. Today, flow lightly. Don't force anything, just adjust the energy gently. You don't need to control everything. Just harmonize within yourself.",
  subtitle: "Seek the middle ground. The answer lies in moderation."
},
"thedevil.png": {
  title: "The Devil: beware of the traps of the ego",
  verse: "The Devil appears when there is something that holds you back without you realizing it. Today, the Tarot warns: where are you sabotaging yourself or giving away your power? It could be an addiction, a relationship, or a limiting mental pattern. Look with courage at what controls you.",
  subtitle: "Free yourself from what holds you back and take back your power."
},
"thetower.png": {
  title: "The Tower: let the old fall apart",
  verse: "\"The Tower appears when something collapses — but, in fact, it has been fragile for a long time. Today, the Tarot warns you: there may be ruptures or revelations, but they will serve to free you from illusions and structures that no longer support your growth. Not all chaos is punishment. Sometimes, it is liberation.\"",
  subtitle: "Allow what no longer serves you to fall apart — it's time to start over with truth."
},
"thestar.png": {
  title: "The Star: keep the faith burning",
  verse: "\"After the storm, the Star shines. Today, the Tarot surrounds you with hope, inspiration and emotional healing. It's a day to calm your soul, trust in life and remember that the universe conspires in favor of those who do not lose their inner light. You are closer than you think. Keep going.\"",
  subtitle: "Cultivate faith, beauty and connection with your essence."
},
"themoon.png": {
  title: "The Moon: trust your intuition",
  verse: "\"The Moon invites you to navigate the deep emotions and mysteries of the unconscious. Today, there may be confusion or a feeling of uncertainty. Don't force logical answers — allow yourself to feel and observe subtly. Not everything is what it seems, but everything reveals something.\"",
  subtitle: "Follow your intuition and respect emotional cycles."
},
"thesun.png": {
  title: "The Sun: shine without fear",
  verse: "The Sun brings clarity, joy and vitality. Today, the Tarot reminds you of your own light — and how it can illuminate yourself and others. Celebrate your victories, no matter how small, and recognize how much you have already achieved. Life wants to see you smile. Allow yourself to",
  subtitle: "Embrace your light and share your joy."
},
"judgement.png": {
  title: "Judgement: listen to the call",
  verse: "The Judgment talks about rebirth, forgiveness and awakening of consciousness. Today, something may invite you to look at the past with compassion, learn from it and make choices more aligned with who you are now. The universe is calling you. Are you listening?",
  subtitle: "Recognize what needs to be closed in order to be reborn stronger."
},
"theworld.png": {
  title: "The World: you have come this far",
  verse: "The World marks the conclusion of a cycle with success, expansion and fulfillment. Today, the Tarot celebrates your journey, reminding you to honor your victories and open yourself to new horizons with ease and confidence. You are whole. And you are ready for the next step.",
  subtitle: "Celebrate your achievements and prepare yourself for a new cycle of growth."
},
"acecups.png": {
  title: "Ace of Cups: a heart that overflows",
  verse: "Today the Tarot offers you a gift: the opportunity to open yourself to love, sensitivity and emotional renewal.\n\nThe Ace of Cups announces beginnings full of tenderness — a new friendship, romance, spiritual connection or even a reunion with yourself.\n\nReceive what touches your soul with gratitude.",
  subtitle: "Make room for affection to flourish."
},
"twocups.png": {
  title: "Two of Cups: meeting of mirrors",
  verse: "The Two of Cups brings unity, harmony and true connection.\n\nToday is a special day for deep connections — whether in love, in partnerships or in your relationship with yourself. What aligns with truth, grows.\n\nRemember: reciprocity is the foundation of every healthy relationship.",
  subtitle: "Value the bonds that nourish and respect you."
},
"threecups.png": {
  title: "Three of Cups: celebrate small victories",
  verse: "Today is a day of lightness, communion and shared joy.\n\nThe Three of Cups invites you to celebrate achievements, no matter how small they may seem. Get together with those who do you good or simply celebrate yourself — your light, your journey, your courage.\n\nCelebrating is also spiritual.",
  subtitle: "Enjoy simple moments with an open heart."
},
"fourcups.png": {
  title: "Four of Cups: what are you ignoring?",
  verse: "The Four of Cups indicates apathy, distraction or even emotional demotivation.\n\nToday, the Tarot invites you to look more closely at what life is offering you. There may be a blessing in disguise, but you need to get out of the bubble of dissatisfaction.\n\nSometimes what's needed is to change your focus, not your reality.",
  subtitle: "Wake up to what's already around you."
},
"fivecups.png": {
  title: "Five of Cups: all is not lost",
  verse: "The Five of Cups talks about pain, frustration, and emotional losses.\n\nBut it also reminds you that there is still love, hope, and possible paths — even when everything seems dark.\n\nToday, the Tarot embraces you and says: look at what's still standing. There's more light than you imagine.",
  subtitle: "Accept the pain, but choose to see what remains."
},
"sixcups.png": {
  title: "Six of Cups: memories that heal",
  verse: "The Six of Cups brings the gentle scent of memories. Today, the Tarot invites you to embrace the past with tenderness — not to live in it, but to understand how it still touches your present.\n\nPerhaps someone from the past will return, or you may need to forgive that child you once were.\n\nHealing may lie in the simplicity of reconnecting with yourself.",
  subtitle: "Recover the sweetness of your roots — but keep looking ahead."
},
"sevencups.png": {
  title: "Seven of Cups: beware of illusions",
  verse: "The Seven of Cups represents dreams, desires… and confusion. Today, the Tarot warns you not to get lost in options that seem magical, but may be baseless fantasies. The mind can be deceived, but the heart knows what is real.\n\nAll that glitters is not gold — and not all doubt is intuition.",
  subtitle: "Make choices with awareness, not neediness."
},
"eightcups.png": {
  title: "Eight of Cups: goodbyes that set you free",
  verse: "The Eight of Cups speaks of the courage to leave.\n\nToday, you may feel that something has lost its shine — and the Tarot confirms: it's time to move on, even without guarantees.\n\nIt's not an escape, it's emotional maturity. Your soul yearns for something truer.",
  subtitle: "Honor what was and move lightly into the new."
},
"ninecups.png": {
  title: "Nine of Cups: allow yourself to enjoy",
  verse: "The Nine of Cups is the card of contentment, of emotional satisfaction.\n\nToday, the Tarot celebrates your journey and invites you to allow yourself to experience simple pleasures with gratitude. Recognize what you have already achieved — you deserve it.\n\nConscious pleasure is a form of spirituality.",
  subtitle: "Celebrate the blessings that are already in your life."
},
"tencups.png": {
  title: "Ten of Cups: harmony in the heart",
  verse: "The Ten of Cups represents emotional fulfillment, family happiness, and true love.\n\nToday is the day to value deep bonds and a sense of belonging. It could be with loved ones, or with yourself.\n\nYou are on the path to emotional fulfillment — trust that.",
  subtitle: "Cultivate the love that builds lasting bonds."
},
"pagecups.png": {
  title: "Page of Cups: messages from the heart",
  verse: "The Page of Cups is the messenger of sensitivity.\n\nToday, the Tarot invites you to keep your heart open to express emotions, make kind contacts, and listen with empathy. A new emotional experience or an inspiring idea may emerge — be receptive.\n\nSensitivity is a strength, not a weakness.",
  subtitle: "Be kind to yourself and others. There is beauty in vulnerability."
},
"knightcups.png": {
  title: "Knight of Cups: move with your heart",
  verse: "The Knight of Cups speaks of an emotional journey — whether in love, art, or dreams.\n\nToday, you may feel like declaring yourself, following a desire, or embracing an inspiration. Just be careful not to be carried away by emotions without clarity.\n\nRomanticism, yes — illusion, no.",
  subtitle: "Act with emotion, but don't lose your balance."
},
"queencups.png": {
  title: "Queen of Cups: listen to what you feel",
  verse: "The Queen of Cups surrounds you with her loving and deep intuition.\n\nToday, the Tarot invites you to nurture your emotions and be present to the feelings of others with compassion, but without drowning in the pain of others.\n\nYour empathy is a gift, but it needs limits.",
  subtitle: "Embrace what you feel, without getting lost in it."
},
"kingcups.png": {
  title: "King of Cups: emotions under control",
  verse: "The King of Cups represents emotional maturity, balance between reason and feeling.\n\nToday, the Tarot asks you to deal with challenges with empathy, but also with firmness. Leading with your heart means knowing how to listen, feel, and act wisely.\n\nYou can take care of others without forgetting about yourself.",
  subtitle: "Balance your sensitivity with emotional responsibility."
},
"aceofpentacles.png": {
  title: "Ace of Pentacles: seeds of prosperity",
  verse: "Today, the Tarot plants an opportunity for growth in your life — whether in the material, professional or health fields. The Ace of Pentacles represents a promising beginning, but one that requires dedication to flourish.\n\nAll abundance begins with good choices and consistency.",
  subtitle: "Take advantage of the opportunities that arise — plant with intention."
},
"twopentacles.png": {
  title: "Two of Pentacles: balancing priorities",
  verse: "The Two of Pentacles indicates the need to adapt and maintain balance between different areas of life.\n\nToday, you may feel torn between tasks, choices or responsibilities. But breathe: with flexibility, you will succeed.\n\nFlexibility is practical intelligence.",
  subtitle: "Organize your energies and prioritize with ease."
},
"threepentacles.png": {
  title: "Three of Pentacles: build with collaboration",
  verse: "Today, the Tarot highlights the value of teamwork and solid construction.\n\nThe Three of Pentacles invites you to connect with people who share your goals — whether at work, in projects or in practical life.\n\nYou don't have to do everything alone.",
  subtitle: "Value the partnerships that strengthen your path."
},
"fourpentacles.png": {
  title: "Four of Pentacles: security or attachment?",
  verse: "The Four of Pentacles talks about stability, but also about the fear of losing what you have achieved.\n\nToday, the Tarot asks you: what are you holding on to too tightly? Is it protection or is it a prison?\n\nNot everything that is safe is healthy.",
  subtitle: "Learn to trust in abundance — letting go is also thriving."
},
"fivepentacles.png": {
  title: "Five of Pentacles: support in difficult times",
  verse: "The Five of Pentacles points to lack, fear of scarcity, or financial challenges.\n\nToday, the Tarot acknowledges your struggle, but also reminds you: there is help all around. You are not alone.\n\nSeeking support is not weakness — it is wisdom.\n\nEvery crisis is temporary. The essential remains.",
  subtitle: "Ask for help if you need it and welcome it with kindness."
},
"sixpentacles.png": {
  title: "Six of Pentacles: what you give, comes back",
  verse: "Today, the Tarot invites you to reflect on exchanges: have you been giving and receiving in equal measure?\n\nThe Six of Pentacles speaks of balanced generosity. Today, you may offer support — or receive help that comes at the right time.\n\nGiving from the heart is different from emptying yourself. And receiving with gratitude is a form of honor.",
  subtitle: "Allow the energy of fair exchange to flow into your life."
},
"sevenpentacles.png": {
  title: "Seven of Pentacles: everything has its time to ripen",
  verse: "The Seven of Pentacles speaks of patience, perseverance, and the time needed to harvest.\n\nToday, the Tarot suggests that you trust in your efforts. What is being planted now requires constancy, not haste.\n\nYour commitment to the process is more important than speed.",
  subtitle: "Wait with faith — the harvest will come in due time."
},
"eightpentacles.png": {
  title: "Eight of Pentacles: dedication that breeds mastery",
  verse: "Today is the day to improve something. The Eight of Pentacles speaks of learning, practice, and improvement.\n\nYou are being called to pay attention to details and invest in your evolution — whether in a job, a habit, or in yourself.\n\nSuccess lies in caring for the process.",
  subtitle: "Give yourself carefully to what you want to master."
},
"ninepentacles.png": {
  title: "Nine of Pentacles: value your achievements",
  verse: "The Nine of Pentacles is the card of self-sufficiency, of the beauty of reaping the fruits of your effort.\n\nToday, the Tarot reminds you to recognize how much you have grown and all that you have achieved through your own efforts.\n\nYou don't need to ask for permission to feel fulfilled.",
  subtitle: "Enjoy the results of what you have built with love."
},
"tenpentacles.png": {
  title: "Ten of Pentacles: stability and legacy",
  verse: "The Ten of Pentacles represents security, lasting prosperity, and strong roots.\n\nToday, the Tarot inspires you to think long-term: what are you building? What do you want to leave for the future?\n\nTrue abundance sustains the present and honors tomorrow.",
  subtitle: "Invest in what builds a solid foundation and connects you to your roots."
},
"pagepentacles.png": {
  title: "Page of Pentacles: curiosity that plants the future",
  verse: "The Page of Pentacles speaks of learning, new ideas and plans that begin to materialize.\n\nToday, the Tarot invites you to explore something new with attentive eyes — study, test, organize.\n\nYou are at a fertile point to build, but you need to take the first steps with presence.",
  subtitle: "Learn with humility and shape what you want to grow."
},
"knightpentacles.png": {
  title: "Knight of Pentacles: consistency is gold",
  verse: "The Knight of Pentacles advances with firmness and responsibility.\n\nToday, the Tarot reminds you that the solid path is built with constancy, even if it seems slow. Patience will be your greatest asset.\n\nAvoid impulsiveness — progress is in the details well done.",
  subtitle: "Be disciplined and keep planting with focus."
},
"queenpentacles.png": {
  title: "Queen of Pentacles: take care of what sustains you",
  verse: "The Queen of Pentacles is the guardian of abundance and well-being.\n\nToday, the Tarot invites you to take care of your home, your body, your money, and your emotional space.\n\nYou flourish when you welcome with generosity, but also with structure.\n\nBeing maternal to yourself is an act of power.",
  subtitle: "Nourish your world with a balance between affection and practicality."
},
"kingpentacles.png": {
  title: "King of Pentacles: achievement with purpose",
  verse: "The King of Pentacles represents financial maturity, success built with wisdom and responsibility with resources.\n\nToday, the Tarot reminds you to act like a leader: with a vision of the future, confidence, and solidity.\n\nUse your power constructively — and help others thrive, too.",
  subtitle: "Take your lead with generosity and determination."
}, "aceswords.png": {
  title: "Ace of Swords: clarity that cuts through confusion",
  verse: "The Ace of Swords brings powerful mental light.\n\nToday, the Tarot gifts you with lucidity, focus, and the chance to see something truthfully.\nUse this moment to make decisions, express ideas, or cut through what confuses you.\n\nWords are swords — use them wisely.",
  subtitle: "Be clear with yourself. Truth sets you free."
},
"twoswords.png": {
  title: "Two of Swords: when the heart and mind are at odds",
  verse: "The Two of Swords represents blockages, doubts, and indecision.\n\nToday, you may be avoiding looking at something that needs to be faced. Stagnation is born of denial.\n\nYou don't need to be completely certain — but you do need to be willing to face reality.",
  subtitle: "Stop running away. The answer begins with facing it."
},
"threeswords.png": {
  title: "Three of Swords: wounds that teach",
  verse: "The Three of Swords speaks of pain — especially that caused by words, losses or disappointments.\n\nToday, the Tarot acknowledges your pain and welcomes you. But it also reminds you: what breaks your heart makes room for a new love for yourself.\n\nIt hurts, but it heals.",
  subtitle: "Allow yourself to feel and transform the pain into wisdom."
},
"fourswords.png": {
  title: "Four of Swords: rest is also action",
  verse: "Today, the Tarot asks for pause, retreat and inner silence.\n\nYou may be mentally overwhelmed, and rest is essential to regain strength and clarity. Don't beat yourself up for needing to stop — that's productivity, too.\n\nRecovering energy is a spiritual strategy.",
  subtitle: "Give yourself permission to rest and reconnect."
},
"fiveswords.png": {
  title: "Five of Swords: not every victory is worth the fight",
  verse: "The Five of Swords warns against unnecessary conflicts, sharp words or ego games.\n\nToday, the Tarot invites you to reflect: is this dispute worth your peace? Sometimes, winning is simply letting go.\n\nThere is more strength in giving in than in fueling a useless war.",
  subtitle: "Choose your peace — don't fight out of pride."
},
"sixswords.png": {
  title: "Six of Swords: leaving to preserve the peace",
  verse: "The Six of Swords speaks of necessary transitions.\n\nToday, the Tarot invites you to leave behind heavy thoughts, confusing environments or stressful situations.\nThere may be silent mourning, but also real liberation.\n\nThe journey may be lonely, but it will lead you to a new horizon.",
  subtitle: "Move away from what hurts you silently. Healing is ahead."
},
"sevenswords.png": {
  title: "Seven of Swords: what are you hiding — from yourself or others?",
  verse: "The Seven of Swords speaks of sigils, strategies and, sometimes, self-deception.\n\nToday, the Tarot warns of evasive attitudes, both yours and those of others around you. Are you being honest? Are you being deceived? Observe carefully and without paranoia.\n\nThe truth only hurts when it is denied.",
  subtitle: "Choose transparency — including with yourself."
},
"eightswords.png": {
  title: "Eight of Swords: the prison is in the mind",
  verse: "The Eight of Swords reveals internal blockages, limiting thoughts and fear of taking action.\n\nToday, the Tarot says: you are freer than you believe. The bonds are illusory — and the first step to letting go is to recognize your power.\n\nYour fear does not have the last word.",
  subtitle: "Break free from the beliefs that imprison you."
},
"nineswords.png": {
  title: "Nine of Swords: don't believe everything you think",
  verse: "The Nine of Swords represents anxiety, guilt or mental insomnia.\n\nToday, the Tarot welcomes your anguish and says: breathe. Not everything that scares you is real.\n\nThere may be exaggeration, rumination or fear of something that hasn't even happened yet.\n\nThinking too much is different from thinking clearly.",
  subtitle: "Calm your mind and take care of your inner sleep."
},
"tenswords.png": {
  title: "Ten of Swords: the end makes room for rebirth",
  verse: "The Ten of Swords represents a painful but definitive ending.\n\nToday, the Tarot acknowledges your pain and encourages you: you've hit rock bottom — now it's time to climb.\n\nEven the hardest falls can be liberating.\n\nThere is no more room to sink. All that is left is to get up.",
  subtitle: "Accept the end and start over with dignity and light."
},
"pageswords.png": {
  title: "Page of Swords: attention and vigilance",
  verse: "The Page of Swords appears when we need to be alert, attentive to the details and information around us.\n\nToday, the Tarot invites you to observe before acting, listen intelligently and question what seems suspicious.\n\nCuriosity is good — as long as it is guided by discernment.",
  subtitle: "Observe more, react less. The right information will come."
},
"knightswords.png": {
  title: "Knight of Swords: act with focus and courage",
  verse: "The Knight of Swords is direct, quick and decisive — but sometimes impatient.\n\nToday, the Tarot encourages you to face what needs to be resolved, cut through what is delaying you and say what needs to be said — without aggression, but with firmness.\n\nUse your sharp mind to free, not to hurt.",
  subtitle: "Take action with clarity and don't get lost in haste."
},
"queenswords.png": {
  title: "Queen of Swords: truth with elegance",
  verse: "The Queen of Swords combines mental wisdom with emotional maturity.\n\nToday, the Tarot invites you to look at situations with intelligent distance, without leaving aside sensitivity.\n\nYou can be firm and gentle at the same time.\n\nYour word can heal or cut — choose consciously.",
  subtitle: "Speak truthfully, but without losing compassion."
},
"kingswords.png": {
  title: "King of Swords: leadership through reason",
  verse: "The King of Swords represents intellectual mastery, justice, and strategy.\n\nToday, the Tarot invites you to adopt a clear, rational and fair stance — whether in a conversation, decision or plan.\n\nYou have the power of logic and words — use them wisely.",
  subtitle: "Lead the situation with ethics and intelligence."
}, 
"acewands.png": {
  title: "Ace of Wands: light your inner flame",
  verse: "The Ace of Wands brings a breath of inspiration and a desire to act.\n\nToday, the Tarot ignites a spark within you — an idea, a desire, or a new beginning.\n\nTrust your creative impulse and embrace the motivation that comes from enthusiasm.\n\nYou don't need to have everything ready, just the courage to start.",
  subtitle: "Take the first step with passion and confidence."
},
"twowands.png": {
  title: "Two of Wands: the world is in your hands",
  verse: "The Two of Wands speaks of planning and vision for the future.\n\nToday, the Tarot invites you to dream bigger, set goals, and visualize where you want to go.\n\nYou've already left the starting point — now you need to define where you're going.\n\nAction without direction is a waste of fire.",
  subtitle: "Organize your desires with purpose and strategy."
},
"threewands.png": {
  title: "Three of Wands: the horizon is opening up",
  verse: "The Three of Wands marks the moment of expansion and progress.\n\nToday, the Tarot confirms that your efforts are bearing fruit and that new opportunities may arise, especially if you continue to believe in what you build.\n\nYou planted with courage — now the universe begins to respond.",
  subtitle: "Keep moving forward. The path is opening up."
},
"fourwands.png": {
  title: "Four of Wands: celebrate your achievements",
  verse: "The Four of Wands represents stability, joy, and belonging.\n\nToday, the Tarot invites you to celebrate your victories — even the small ones.\n\nShare good times with those who do you good and value what is stable and harmonious.\n\nLife is also made of happy pauses.",
  subtitle: "Recognize and be grateful for what is going well."
},
"fivewands.png": {
  title: "Five of Wands: not all competition is war",
  verse: "The Five of Wands speaks of conflicts, disputes or energetic tensions.\n\nToday, the Tarot warns you about possible friction or challenges caused by ego, haste or competition.\n\nTake a breath before reacting — and choose whether this clash is worth your energy.\n\nSometimes the fire needs to be channeled, not fed.",
  subtitle: "Don't get lost in battles that build nothing."
},
"sixwands.png": {
  title: "Six of Wands: recognition is coming",
  verse: "The Six of Wands speaks of victory, prominence and appreciation.\n\nToday, the Tarot recognizes your efforts and achievements — even if they are still modest.\n\nYou are being seen, admired and remembered. Celebrate, but remain humble.\n\nYou have come this far with courage — and you still have a lot to achieve.",
  subtitle: "Recognize your value without having to show off."
},
"sevenwands.png": {
  title: "Seven of Wands: defend what matters",
  verse: "The Seven of Wands speaks of firmness in the face of challenges or opposition.\n\nToday, the Tarot reminds you not to bow your head before what you believe in.\n\nYour space, your voice and your path deserve to be protected — with balance and respect.\n\nResisting with wisdom is also growing.",
  subtitle: "Stay firm in your convictions."
},
"eightwands.png": {
  title: "Eight of Wands: the movement accelerates",
  verse: "The Eight of Wands brings agility, flow and opportunities that arise suddenly.\n\nToday, everything can happen faster than you expected.\n\nBe attentive to signs, news or invitations — and be ready to act.\n\nWhen the universe opens doors, you need to be awake to pass through.",
  subtitle: "Seize the moment — move forward with lightness and determination."
},
"ninewands.png": {
  title: "Nine of Wands: you're almost there",
  verse: "The Nine of Wands represents resistance, tiredness and overcoming.\n\nToday, the Tarot tells you: take a deep breath, protect your space and don't give up. Even though it's tough, you've already overcome a lot — and you're closer than you think.\n\nFirmness is not rigidity — it's persistent confidence.",
  subtitle: "Stay strong. Victory is near."
},
"tenwands.png": {
  title: "Ten of Wands: learning to deal with pressure",
  verse: "The Ten of Wands as an advisory card suggests that you'll need to prepare yourself to deal with stressful situations that generate tiredness and boredom.\n\nYou'll need to be strong and patient in order to wait for the most difficult phase to pass, but if you don't keep this moral firmness in mind, you could fall victim to your own discouragement and ruin everything.\n\nJust relax and don't take things too seriously, because they'll only have the weight you give them. That way, you could make what was just a breeze worse by turning it into a typhoon!\n\nThere are times when humor is the best way out, when we need to minimize problems by seeing the ridiculous side of them. If you look closely, you will be able to laugh at yourself and difficulties will lose their power.",
  subtitle: "Have patience and humor to deal with stress."
},
"pagewands.png": {
  title: "Page of Wands: the call of your inspiration",
  verse: "The Page of Wands announces the beginning of an exciting journey.\n\nToday, the Tarot invites you to follow what excites you — even if it still seems small or unstructured.\n\nAn idea, a desire or an invitation can light your flame.\n\nThe soul recognizes when something is true — even without guarantees.",
  subtitle: "Pay attention to what awakens your passion."
},
"knightwands.png": {
  title: "Knight of Wands: move forward with enthusiasm and direction",
  verse: "The Knight of Wands brings drive, courage and a thirst for movement.\n\nToday, the Tarot encourages you to leave your comfort zone, face challenges and dare — but without recklessness.\n\nEnthusiasm guides you, but discernment sustains you.\n\nThe right adventure can change everything — but don’t get lost in the rush.",
  subtitle: "Act with energy, but without rushing."
},
"queenwands.png": {
  title: "Queen of Wands: power that attracts and radiates",
  verse: "The Queen of Wands is the archetype of the magnetic woman, confident and full of her own light.\n\nToday, the Tarot reminds you of your power to manifest, inspire and shine — without apologizing for it.\n\nYour strength is not aggressive, it is confident. Your fire warms without consuming.\n\nShining is not arrogance — it is authenticity.",
  subtitle: "Trust your magnetism and embrace your space with dignity."
},
"kingwands.png": {
  title: "King of Wands: leadership with vision",
  verse: "The King of Wands represents inspiring authority, long-term vision and strategic action.\n\nToday, the Tarot invites you to take on a purposeful leadership role — without fear of making decisions, guiding, and influencing.\n\nYou have the fire of creation and the focus of achievement.\n\nBe the one who lights the way — including your own.",
  subtitle: "Lead with inspiration, courage, and clear vision."
}, };

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  const savedCard = localStorage.getItem(`tarotCard_${today}`);

  if (savedCard) {
    revealSavedCard(savedCard);
    document.querySelector(".tarot-card").classList.add("flip");
  }
});

function revealCard(cardElement) {
  const today = new Date().toISOString().split("T")[0];
  const savedCard = localStorage.getItem(`tarotCard_${today}`);

  if (savedCard) {
    return; 
  }

  const random = Math.floor(Math.random() * cards.length);
  const cardName = cards[random];

  
  localStorage.setItem(`tarotCard_${today}`, cardName);

  const backFace = cardElement.querySelector(".card-back");
  backFace.style.backgroundImage = `url('images/tarotcards/${cardName}')`;
  cardElement.classList.add("flip");

  showCardMessage(cardName);
}

function revealSavedCard(cardName) {
  const backFace = document.querySelector(".card-back");
  backFace.style.backgroundImage = `url('images/tarotcards/${cardName}')`;
  showCardMessage(cardName);
}

function showCardMessage(cardName) {
  const content = messages[cardName];
  if (content) {
    document.getElementById("card-title").textContent = content.title;
    document.getElementById("card-verse").textContent = content.verse;
    document.getElementById("card-subtitle").textContent = content.subtitle;
  } else {
    document.getElementById("card-title").textContent = "A Mystery Card";
    document.getElementById("card-verse").textContent = "The message will be revealed in time.";
    document.getElementById("card-subtitle").textContent = "";
  }
}


function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const icon = document.getElementById('hamburguer-icon');

  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}