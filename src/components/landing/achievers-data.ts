// The achievers shown on aaaedu.in, read from its public achiever API and
// checked in as static data. Photos were downloaded into
// /images/landing/achievers. Regenerate with scripts/generate-achievers.mjs.

export type Achiever = {
  name: string;
  /** Rank / AIR / percentile, exactly as the academy publishes it. */
  rank: string;
  /** College or remark, empty when the site leaves it blank. */
  college: string;
  image: string;
};

export type AchieverGroup = {
  slug: string;
  name: string;
  heading: string;
  quote: string;
  students: Achiever[];
};

export const achieverGroups = [
  {
    slug: "nstse",
    name: "NSTSE",
    heading: "NSTSE Top Achievers",
    quote: "Success means going from failure to failure without loss of enthusiasm",
    students: [
    { name: "Vinitha V", rank: "1st", college: "State Rank - 4 City Topper", image: "/images/landing/achievers/AqupCtqyU3RLgGe0wtXVcVqISUuTZ9OF6dJ7txr2.png" },
    { name: "Nuthan Kumar S", rank: "NSTSE AIR - 81", college: "", image: "/images/landing/achievers/dofxlEqyIKusMGn2zIcNe0WMgkz8ovXelngg7sd1.png" },
    { name: "Namratha .S", rank: "State Rank-1 AIR - 102", college: "", image: "/images/landing/achievers/SKMl0IdfYkFvAfq9yxjoKmkLpRbhKgPw41WIGMM7.png" },
    { name: "Manish .M", rank: "State Rank-9 AIR - 271", college: "", image: "/images/landing/achievers/zLeKMQ7vp9oBtHIteH4v1igNvHEoW5y5rRVV3iSu.png" },
    { name: "Abhinav", rank: "State Rank - 11 AIR - 625", college: "", image: "/images/landing/achievers/5ZyulOF2PSxkYpOXbQIxnn4N0GnMKx2HJTqDzMVE.jpg" },
    { name: "Devadarshini", rank: "State Rank - 16 AIR - 363", college: "", image: "/images/landing/achievers/7Ww9usyTAlT0AlWGy9Arve4WTrxTzgIY0wnnYg6g.png" },
    { name: "Arooba", rank: "State Rank - 18 AIR - 454", college: "", image: "/images/landing/achievers/22Rc7ewgZ3KJw07X4n2jtrivvNq5XY99anfUqE6E.png" },
    { name: "Rahul", rank: "State Rank - 20 AIR - 817", college: "", image: "/images/landing/achievers/ZbLR6zmGziJ5oS4YhcEu5Dcg2UZ7YALF2yz6P2DV.jpg" },
    { name: "Vibha .V", rank: "State Rank - 24 AIR - 603", college: "", image: "/images/landing/achievers/6fANmhConrEXf7Jpp3277fy1Zw27L5ZZ3ePZjAZp.png" },
    { name: "Sanjana .H.J", rank: "State Rank - 40 AIR - 857", college: "", image: "/images/landing/achievers/qpqub3UcB0i4bm65OCFRmxqsEp0ocBV1i6JCFlIZ.png" },
    { name: "Rochan Kumar", rank: "State Rank - 31 AIR - 1006", college: "", image: "/images/landing/achievers/ZEPu2OjOzYul4UUPEMAEEpZQ5IMPnJOeJoSIKPZ4.png" },
    { name: "Tharun .M.V.Nerendhra", rank: "State Rank - 5 City Topper", college: "", image: "/images/landing/achievers/XR0Jh7wxTbIQR7li0BbGV4k3fyB9gTPx9cTePMDC.png" },
    { name: "Nandish Pai", rank: "State Rank - 184 AIR - 2555", college: "", image: "/images/landing/achievers/oPxhTpwwV1mTw132RTktpiDnD2XZ8C7EUKDPz3dL.png" },
    { name: "Dhruv Chaudhry", rank: "State Rank - 287 AIR - 4067", college: "", image: "/images/landing/achievers/CNpol4jJ4ToYEeVOBIFDGix4tLS98IVCVYRjCBRi.png" },
    { name: "S. Lohith Kumar", rank: "State Rank - 415 AIR - 5473", college: "", image: "/images/landing/achievers/Y4xggvmNUhC86ZFqK6bgxJhmK6JdgMNcZKTRyrlX.png" },
    { name: "Hitesh .S", rank: "State Rank - 82 NTSE Qualified", college: "", image: "/images/landing/achievers/s7TQGEJClje0e8vlFJwm10CGDomU3WG0pTos1p2x.png" },
    ],
  },
  {
    slug: "k-cet",
    name: "K-CET",
    heading: "K-CET TOPPERS",
    quote: "Wake up with determination, go to bed with satisfaction.” - Regular routine of successful people.",
    students: [
    { name: "Lakshmi Pooshan", rank: "309", college: "IIT Bombay", image: "/images/landing/achievers/t9gKawrA9Eel0NmzDqGGsdGtHRZ5QNTsM2dbkAsD.jpg" },
    { name: "Milind Sridhar", rank: "916", college: "", image: "/images/landing/achievers/G8wvKfVo7PDrdNG9AvVK1zwmVetrjWlGhoJHddvl.jpg" },
    { name: "Sreesha Rao", rank: "1078", college: "BITS Goa", image: "/images/landing/achievers/uMiv195PBQQcLSi5fJ095M9VIN76A27oljaABe4k.jpg" },
    { name: "Prathik", rank: "1177", college: "", image: "/images/landing/achievers/ZP7blk8qaVPNdSYF9ZlwNcBcvIU7qUCzo82XWCzJ.jpg" },
    { name: "Mithil G", rank: "1786", college: "IIT Kanpur", image: "/images/landing/achievers/YZL43igQ8AailLHc6RG71HK8rQNr6Tc4bltkpRnw.jpg" },
    { name: "Prajwal Y. R.", rank: "Rank 57", college: "NITK, ECE", image: "/images/landing/achievers/szdnr8YYAJWl0hO9aqA0wP7qfAokBtwJVZJu137w.png" },
    { name: "Srinidhi", rank: "Rank 81", college: "SJCE, CSE", image: "/images/landing/achievers/p5qhHPsWj9YFS3yYNM7yWEoE8BtBvJKvxDZUXsPa.jpg" },
    { name: "Shashank Holla .S", rank: "Rank 118", college: "NITK, ECE", image: "/images/landing/achievers/NJoCLlkxy9x6W5a6hDWb7q6xQc59vn5xlX7P9iLE.jpg" },
    { name: "Vishwanath S Sarathi", rank: "Rank 139", college: "NITK, Mechanical", image: "/images/landing/achievers/btPRGzUXQ3FQSuwzIOyJpq6enOXSTju9668MdcW8.png" },
    { name: "Rahul .V", rank: "Rank 152", college: "NITK Mechanical", image: "/images/landing/achievers/hYX72IhMsbw62IoeGxCAirqi10psbQNf5Pf8KinN.jpg" },
    { name: "Sajjan Kiran", rank: "Rank 181", college: "RVCE, IT", image: "/images/landing/achievers/8xoTN2qZLoF5ObmDTvsZybKqU3tBStBdpbryZCGS.png" },
    { name: "Tharun .M.V.Nerendhra", rank: "Rank 188", college: "VITEEE - IT", image: "/images/landing/achievers/rbFW0Bk2lfZmvwHJbrqq2v2t9Lqy9zqAA7Wkzbt2.png" },
    { name: "Ajith", rank: "Rank 191", college: "BMS College, CSE", image: "/images/landing/achievers/dBYOmkc2mA1gY64tBE33Zgjst1hh2ImXfMABTEZ4.jpg" },
    { name: "Chirag .B.K", rank: "Rank 419", college: "Hassan Medical College", image: "/images/landing/achievers/JIv4OvEADVsF6eScedDEQHjCtE9js9XVo9bEHjPN.jpg" },
    { name: "Manish .M", rank: "Rank 482", college: "RVCE Mechanical", image: "/images/landing/achievers/2HDL485PCIC424gDRvTFuUshSuWVgvwZIiBZWeWJ.png" },
    { name: "Tanusha .S", rank: "Rank 553", college: "MSRIT ECE", image: "/images/landing/achievers/bvlxXf331YrWoeyAlzvqbHWOBYV458ddztDFD0eO.png" },
    { name: "Vishesh .P", rank: "Rank 652", college: "PESIT, CSE", image: "/images/landing/achievers/8uIpfpzIMmKZjgTqU4RXvEXc5woVbN9VF7ZQVpqV.jpg" },
    { name: "Milind", rank: "Rank 663", college: "UVCE, ECE", image: "/images/landing/achievers/pL9qhFWUe0XQzer0anzi1TQrIPCUTwGDaLlzsfHC.jpg" },
    { name: "Surya .N", rank: "Rank 1030", college: "NITK, ECE", image: "/images/landing/achievers/DNirs5nQDn6qD9Vz5vD78pYUjoiVx1GXfg1JG55g.jpg" },
    { name: "Shamanth", rank: "Rank 1673", college: "NIE, CSE", image: "/images/landing/achievers/xY68trgjrMGB0tpncY5WRNQSbpGVbZC1vO0DEvLt.png" },
    { name: "Vinutha", rank: "Rank 1800", college: "PESIT, CSE", image: "/images/landing/achievers/NOLTxmGC3uIqsxUUoFH6HtUAzY2cbp3UXQm5MIcS.png" },
    { name: "Sumukha", rank: "Rank 2043", college: "JSS STU, CSE", image: "/images/landing/achievers/wdyP2xWFptIJTISL3w0wlQskQDk4GVIETh1NG40k.jpg" },
    { name: "Shruthi", rank: "Rank 3000", college: "MSRIT, IT", image: "/images/landing/achievers/YyH42oNIXScYH1QwCyu7CgvklNqgC0EZybFFZoa2.jpg" },
    { name: "Samudyata", rank: "Rank 4554", college: "PESU, CSE", image: "/images/landing/achievers/eDbNZMxn8AqJenA7tCjrmziafQGeH0q6ONHnbC6H.jpg" },
    ],
  },
  {
    slug: "jee-advanced",
    name: "JEE ADVANCED",
    heading: "JEE ADVANCED TOPPERS",
    quote: "Dream is not that which you see while sleeping; it is something that does not let you sleep",
    students: [
    { name: "Sreesha Rao", rank: "6810", college: "BITS Goa", image: "/images/landing/achievers/vOAChL8HjQKNDKMMS7RpJx7KiBABfWIgeXDuUJ7h.jpg" },
    { name: "Mithil G", rank: "AIR 1889", college: "IIT Kanpur", image: "/images/landing/achievers/QWP4xX6H64tdLNvOD4C8DPIErQ14wcqRPzmYUOYQ.jpg" },
    { name: "Lakshmi Pooshan", rank: "AIR 7837", college: "IIT Bombay", image: "/images/landing/achievers/Ez06nu15on21LZQfRztYNIBIAcJx5kzWkSeqSeMn.jpg" },
    { name: "Deepshika", rank: "AIR - 3084", college: "IISER Mohalli", image: "/images/landing/achievers/ZxhrPYuFGUZvd73VSRl8dAduL2YywOjBh2tSjYcA.webp" },
    { name: "Naman Karanth", rank: "AIR - 4287", college: "RVCE", image: "/images/landing/achievers/ft4zf4Eimhc39NZhASG9ZrqnO9g0GwYKLHQXx4xC.png" },
    { name: "Rahul .V", rank: "AIR - 5207", college: "NITK, ECE", image: "/images/landing/achievers/0OPrvIl1H98O7ByZeRD0qOFE45pDxNra14FXZjyf.jpg" },
    { name: "Nuthan Kumar .S", rank: "AIR - 6154", college: "NITK, CSE", image: "/images/landing/achievers/aubgtZYnnM5vXuy3RIJoF9PsLqLQktObwoucECE1.png" },
    { name: "Abhinav", rank: "AIR - 7124", college: "IIT Kharagpur", image: "/images/landing/achievers/tuyWSS6UazynEaJswWXwLYA8JmkCyDjPqnRL93m1.jpg" },
    { name: "Praharaj Ipsita", rank: "AIR - 7160", college: "IIT Kharagpur", image: "/images/landing/achievers/dcl2sK4aVXMEtqX6C8R397fptEESeZhtGLGzatAz.jpg" },
    { name: "Nandish Pai", rank: "AIR - 8689", college: "IIT Bhubaneswar", image: "/images/landing/achievers/yPvmLvPm9wy3Z46yjuBSHgZMVMPnh5p4NeV0PiVQ.png" },
    { name: "Naga Chandramsh", rank: "AIR - 14646", college: "IIST", image: "/images/landing/achievers/Df33lkdmk32xEuhZKYm2j4HEEWVF3YIHS6MRTwfK.png" },
    { name: "Srinidhi", rank: "AIR - 15719", college: "JSS STU, CSE", image: "/images/landing/achievers/q7BeDeCqB0C5HT0IAisjoOi9XnuGQCX0v7smfcVg.jpg" },
    { name: "Shashank Holla .S", rank: "AIR - 15748", college: "NITK, E & C", image: "/images/landing/achievers/0xg4jZJhC57EJbLZUvak2GbYWW70DG9vTTWI0N8j.jpg" },
    { name: "Kumara Ganapati", rank: "AIR - 19101", college: "NITK", image: "/images/landing/achievers/vHL00jBs3RfSVAjaTOE0bjDVzj3Whv6H7XSr2Zl8.png" },
    { name: "Manish .M", rank: "Qualified", college: "RVCE, CSE", image: "/images/landing/achievers/6WHUG2sC0IC1d96pvIIlPNKhdexY7yeaY51EEv2k.png" },
    { name: "Chirag V", rank: "Qualified", college: "", image: "/images/landing/achievers/apgs3JiE7EgT0mkIeKk6yn7JiFTkUULvRf5CN2UR.jpg" },
    ],
  },
  {
    slug: "neet",
    name: "NEET",
    heading: "NEET Top Achievers",
    quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.” This is the attitude needed to scale the altitude of success.",
    students: [
    { name: "Milind Sridhar", rank: "9419", college: "", image: "/images/landing/achievers/qdA2jbdhJH0Us4WZ9lb5Fchqrg2ryBi86Y5hv9yj.jpg" },
    { name: "Nuthan Kumar .S", rank: "Rank 104", college: "NITK, CSE", image: "/images/landing/achievers/duclbBQLokvpmtJqy7x2qIsidcUMnOCpmG5152Tu.png" },
    { name: "Prajna Prabhu", rank: "Rank - 162", college: "BMC", image: "/images/landing/achievers/uji1vaMNuhjQbxJgfTyZPtG7mKqdpV9qez67MyhY.png" },
    { name: "Fathima", rank: "Rank - 457", college: "BMC", image: "/images/landing/achievers/iyAg1Kl0fqyfxrja5c1Bgw7OctvGCixSgx7NHSSM.png" },
    { name: "Chirag .B.K", rank: "Rank - 770", college: "Hassan Medical College", image: "/images/landing/achievers/07lRDMdRN1OYxxJnGvESPTmQRtSnfUllvVDNci30.jpg" },
    { name: "Yashaswini Nayak", rank: "AIR - 14933", college: "GKVK, BSc. Agri", image: "/images/landing/achievers/p6pbC8dUTYW2mP3c9Sf6NIso5OoLVjomIBPik8Wq.webp" },
    { name: "Namratha", rank: "Rank - 1193", college: "KIMS", image: "/images/landing/achievers/CToK4nR81GYrRprURPTkXJAdQQPip2RryBmolgYr.png" },
    { name: "Vidya Shree", rank: "Rank - 2037", college: "Karwar Medical College", image: "/images/landing/achievers/1aU3fe4htxdqBr7JGKHDJYyyCUsl8Yt54ipW884g.png" },
    { name: "Mytri .S", rank: "Qualified", college: "KIMS, Dental College", image: "/images/landing/achievers/caUWJSIDApePdnlOiujJHpwv4BFh1QeXv9saeWV4.png" },
    { name: "Satvika", rank: "Qualified", college: "", image: "/images/landing/achievers/2JTK5aHLUKLSjox5ifqt6v9iMbOFDdN2zmKsHfrj.jpg" },
    { name: "Arooba", rank: "Qualified", college: "", image: "/images/landing/achievers/dWkZgSqIMnifM656zjQzfAotIE8uwpqrdzeixoav.png" },
    { name: "Samyakk", rank: "Qualified", college: "MS Ramaiah Medical College", image: "/images/landing/achievers/vGHbfrRqZ19Ccd0PSe50eCfUpSfhlmsH275lidIz.webp" },
    { name: "Cibin John", rank: "Qualified", college: "John’s Medical College", image: "/images/landing/achievers/fQRnzU8BIx5F0jphlWTcpbLzKfkko4ZL4iC5qbPW.webp" },
    { name: "Praneel", rank: "Qualified", college: "Siddhaganga Medical College", image: "/images/landing/achievers/G0bu7GSyFwoayQLFPzacenRQidbw4FscuF9htpjy.webp" },
    { name: "Nidhishree", rank: "Qualified", college: "AJ Medical College", image: "/images/landing/achievers/Vsyu6vWRGngnjt0IAJS0LIN2Zk4BhXevpj4MMbhF.webp" },
    { name: "Soumya N", rank: "Qualified", college: "IISER Tirupati", image: "/images/landing/achievers/0ALGDgDFtAxtp7tnpS57bQsptvoACDxlrqft1jlL.webp" },
    ],
  },
  {
    slug: "jee-mains",
    name: "JEE Mains",
    heading: "JEE Mains Toppers",
    quote: "Achievers don’t stop when they are tired, they stop when they are done",
    students: [
    { name: "Prathik", rank: "95.3%", college: "", image: "/images/landing/achievers/NQiub1ieKoETXDqLUCQnu8LQmhjjbtElONdHeUeD.jpg" },
    { name: "Hemant Yadav", rank: "98.3%", college: "", image: "/images/landing/achievers/sKEeIUNoqP9LJpz2xb6boHfT9J78PGsFc68ZjDDd.jpg" },
    { name: "Adithi", rank: "95.96%", college: "", image: "/images/landing/achievers/2EwHafRB9Y7NKMamijjS4uEqWHH96hA7Yp9CKRRK.jpg" },
    { name: "Sreesha Rao", rank: "98.87%", college: "BITS Goa", image: "/images/landing/achievers/2JeXT04V3qM9fCEdk8P2il52OrJhtX7BMGwNlpru.jpg" },
    { name: "Mithil G", rank: "99.06%", college: "IIT Kanpur", image: "/images/landing/achievers/DHEsCkhXKLMPqT7RkPK7aGpI8Ry2GrktYMOjr7S9.jpg" },
    { name: "Lakshmi Pooshan", rank: "99.38%", college: "IIT Bombay", image: "/images/landing/achievers/pMNsapGX4PVyPZOePJ84GvIHQdljYtNALXHte10D.jpg" },
    { name: "Nila Subramani", rank: "AIR - 81", college: "CEPT", image: "/images/landing/achievers/2AiKGLrTfpfXwou1VDCs019EP4PcVHftLMr22KhB.png" },
    { name: "Navaneeth M", rank: "AIR - 945", college: "CSE NIT Calicut", image: "/images/landing/achievers/77fZ6dKD9fAAlAZDjtVvwso6jvZ4onVknqntD8tM.webp" },
    { name: "Nuthan Kumar .S", rank: "AIR - 3404", college: "NITK, CSE", image: "/images/landing/achievers/YfIQ1I5PilsG6DaA38UajQjMDwL3LVG2eKzodxkM.png" },
    { name: "Shashank Holla .S", rank: "AIR - 5942", college: "NITK, E & C", image: "/images/landing/achievers/PYWNB2eosiMvTJh3qJL2w1quKnDIVdB6dYpGW0Kx.jpg" },
    { name: "Rahul .V", rank: "AIR - 8385", college: "NITK Mechanical", image: "/images/landing/achievers/qInax2KW9iT9fCjgXPm5DHx2XXj0PE7uRcYemUk5.jpg" },
    { name: "Vishwanath S Sarathi", rank: "AIR - 8400", college: "NITK Mechanical", image: "/images/landing/achievers/LsYXeLhW2AlVHx4mbzlbtatIZ4HhsViwP4RTUJuD.png" },
    { name: "Suhas .S", rank: "AIR -11060", college: "IIIT-Kurnool, Mechanical", image: "/images/landing/achievers/2ykgjOm5qKxzNuxuX7jdQckvufzIxzTce0uFmXxR.png" },
    { name: "Nishanth", rank: "AIR - 15214", college: "NITK, Mechanical", image: "/images/landing/achievers/xpgwU2FIOdX4LiHmXDuzjKWkNYpPGLBUYXYOZrXK.jpg" },
    { name: "Chirag .B.K", rank: "AIR - 15405", college: "Hassan Medical College", image: "/images/landing/achievers/mE4Nj6oN8E4TAfjJd234uyxyg5bouqcggQZezX4N.jpg" },
    { name: "Srinidhi", rank: "AIR - 15719", college: "JSS STU, CSE", image: "/images/landing/achievers/zemhMNjCPgUIIeEn5Aont4J9P0tzFKfLJeJhqWTq.jpg" },
    { name: "Tharun .M.V.Nerendhra", rank: "AIR - 15955", college: "VITEEE, IT", image: "/images/landing/achievers/TpWAYoXRuHyKXh36jlO39NHJHGOwqm2cQGtNMreq.png" },
    { name: "Prajwal Y. R.", rank: "AIR - 17000", college: "RVCE, CSE", image: "/images/landing/achievers/hJtFdImYAMuRFqU0Y0qjZHg3nKv7ZLF4InJGJAEE.png" },
    { name: "Ajith", rank: "Qualified", college: "BMS College, CSE", image: "/images/landing/achievers/wRK3fPUjc40Zi832EohXoYymeXy23GiQ1IiYqDkv.jpg" },
    { name: "Namratha", rank: "Qualified", college: "KIMS", image: "/images/landing/achievers/N0cdMn9SOc6KKW68hwJXwETLj4qZYA684NDrYuZJ.png" },
    { name: "Vishnu M", rank: "Qualified", college: "MSRIT", image: "/images/landing/achievers/m0NtmNsERJ5fo5E7CZIFXOBW7yqTT8gGWYPJaeGk.png" },
    { name: "Vishesh .P", rank: "Qualified", college: "PESIT, CSE", image: "/images/landing/achievers/vLHul5OcDB2vbrX9e8eFP2kuATaCo0viiITCrww3.jpg" },
    { name: "Sajjan Kiran", rank: "Qualified", college: "RVCE, IT", image: "/images/landing/achievers/7fy4Uvm5udt2YS8woo0PAKFbUFyBhQ1swyI0Bro8.png" },
    { name: "Manish .M", rank: "Qualified", college: "RVCE, CSE", image: "/images/landing/achievers/KJ2rkO1eEYtXpfQ240IobILCKWo930Pu1da0wB7c.png" },
    { name: "Tanusha .S", rank: "Qualified", college: "MSRIT ECE", image: "/images/landing/achievers/h1E5IFk69X3BmOTgO24vIIo8F1blYOpX6N65K5ub.png" },
    { name: "Vaishnavi", rank: "Qualified", college: "PESIT EEE", image: "/images/landing/achievers/5zsSCTXP3LesTSdBLHnXfS8EibTTnhzFgcvqWxMT.jpg" },
    { name: "Chirag V", rank: "Qualified", college: "BRAC, CSE", image: "/images/landing/achievers/v24eHg3zmIC2aMwUhvGT9HjOd5W7cLAXXhpiF5tA.jpg" },
    { name: "Milind", rank: "Qualified", college: "UVCE, ECE", image: "/images/landing/achievers/VS6F1KruzxLxaxy5YoRWg93NzIRDDBkFCxB8exQ4.jpg" },
    { name: "Akash .I.K", rank: "Qualified", college: "", image: "/images/landing/achievers/r5QJO5Vy2dqD8F6HpFc778h7odnd85bsnkGJXZyT.jpg" },
    { name: "Satvika", rank: "Qualified", college: "", image: "/images/landing/achievers/5TtJs1Ioyueoqwb2lVhtfWhN3e4VwnqDityVWDsS.jpg" },
    { name: "Arooba", rank: "Qualified", college: "", image: "/images/landing/achievers/M30EG7mfRlAD32bfS4KVVUb4X1atRoB6GLrqFSYP.png" },
    { name: "Abhshek Reddy", rank: "Qualified", college: "", image: "/images/landing/achievers/g8nzo7CW2dsJA8KReTYPd9qCjDsruCOznMVwtf99.jpg" },
    { name: "Darshan .B.M", rank: "Qualified", college: "", image: "/images/landing/achievers/DiGgZ1rSYg7rdsVihkUdkc21ZCTNI21fNJ7Vj50k.jpg" },
    { name: "Seenu Sachin", rank: "Qualified", college: "", image: "/images/landing/achievers/2lA9KK75ochRPYHE8HuNt6cDB7DqftJ9OJ0mh5y4.png" },
    { name: "Rahul Haridas", rank: "Qualified", college: "", image: "/images/landing/achievers/LxbOtJGKYRpzeAQIK8fPRMoiUfk3AtmSvGSh18CI.jpg" },
    { name: "Brijesh", rank: "Qualified", college: "", image: "/images/landing/achievers/OGb1yygYA5yvl2cp7tBR5IMlCvom870P8MaoyAvn.jpg" },
    { name: "Sudhanva", rank: "Qualified", college: "", image: "/images/landing/achievers/78kjxdBbSmQAtC8ZjE7Qotko3IX5pkBBxwSJjAFj.jpg" },
    { name: "Praharsha", rank: "Qualified", college: "", image: "/images/landing/achievers/DHcaFD94wYSgz1gNqVNTJFsOB1iGFBZzdxdHpUBe.jpg" },
    { name: "Rakshit", rank: "Qualified", college: "", image: "/images/landing/achievers/zX0z2HpEoI8IAGOQ7YCVHOYaA4REbR19gRnrJOGQ.jpg" },
    { name: "Rithvik Vasishta S.", rank: "Qualified", college: "", image: "/images/landing/achievers/H3vZ8vVmhaXKnf1xGNUq6rAbZ62pGuHNJbr3KrYZ.png" },
    { name: "Bhaskar S. Jois", rank: "Qualified", college: "RVCE CSE", image: "/images/landing/achievers/BJALAwG9SJ2LPNZdzqjivy9StPl8HxeXfTO8Kx3K.png" },
    { name: "Shakti Ganesh", rank: "Qualified", college: "", image: "/images/landing/achievers/FZGtiQ974XSRHjhvk6if21d5mpmCHMRoXLvoa1cX.png" },
    { name: "Anusha Shetty", rank: "Qualified", college: "", image: "/images/landing/achievers/3N50sCS0DjGI0Bp6oayDZKCXwb1cxBwh0TCaMrIv.png" },
    { name: "Tejas S", rank: "Qualified", college: "RVCE ECE", image: "/images/landing/achievers/3cvpauNGsJ7ZcVRaDUiWvUiJPC4MVdOgmwcGdilT.webp" },
    { name: "Apeksha Maheshwari", rank: "Qualified", college: "BITS Hyderabad", image: "/images/landing/achievers/YgaazlHvVPOO10kSmMLrKXEOZVccAi93ExLUelfv.webp" },
    ],
  },
];

export type AchieverSlug = (typeof achieverGroups)[number]["slug"];

export function groupBySlug(slug: string) {
  return achieverGroups.find((g) => g.slug === slug);
}

export const achieverCount = achieverGroups.reduce((n, g) => n + g.students.length, 0);
