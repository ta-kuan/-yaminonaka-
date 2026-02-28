const start = document.querySelector(".start");
const back = document.querySelector(".back"); 
const startB = document.querySelector(".startB");
let number = ["ni","san","yon","go","roku","nana","hati","batu"];
const sinin = document.querySelector(".sinin");
const sininall = document.querySelector(".sininall");
const sininb = document.getElementById("sininB");
const lefttop = document.querySelector(".lefttop");
const player = document.querySelector(".player");
const playerclasses = ["p1m","p2m","p3m","p4m"];
const yougi1 = document.querySelector(".yougi1");
const yougi1r = document.querySelector(".yougi1r");
const yougi1b = document.getElementById("yougi1b");
const yougi2 = document.querySelector(".yougi2");
const yougi2r = document.querySelector(".yougi2r");
const yougi2b = document.getElementById("yougi2b");
const yougi3 = document.querySelector(".yougi3");
const yougi3r = document.querySelector(".yougi3r");
const yougi3b = document.getElementById("yougi3b");
const yougi1A = document.querySelector(".yougi1A");
const yougi2B = document.querySelector(".yougi2B");
const yougi3C = document.querySelector(".yougi3C");
const sentaku = document.querySelector(".sentaku");
const sentakuclasses = ["migi","mannaka","hidari","off"];
const bottom = document.querySelector(".bottom");
const p1b = document.getElementById("p1b");
const p2b = document.getElementById("p2b");
const p3b = document.getElementById("p3b");
const p4b = document.getElementById("p4b");
const p11 = document.querySelector(".p11");
const p11y = document.querySelector(".p11y");
const p12 = document.querySelector(".p12");
const p12y = document.querySelector(".p12y");
const p13 = document.querySelector(".p13");
const p13y = document.querySelector(".p13y");
const p21 = document.querySelector(".p21");
const p21y = document.querySelector(".p21y");
const p22 = document.querySelector(".p22");
const p22y = document.querySelector(".p22y");
const p23 = document.querySelector(".p23");
const p23y = document.querySelector(".p23y");
const p31 = document.querySelector(".p31");
const p31y = document.querySelector(".p31y");
const p32 = document.querySelector(".p32");
const p32y = document.querySelector(".p32y");
const p33 = document.querySelector(".p33");
const p33y = document.querySelector(".p33y");
const p41 = document.querySelector(".p41");
const p41y = document.querySelector(".p41y");
const p42 = document.querySelector(".p42");
const p42y = document.querySelector(".p42y");
const p43 = document.querySelector(".p43");
const p43y = document.querySelector(".p43y");
const kettei = document.querySelector(".kettei");
const ketteiclasses = ["A","B","C","off"];
const ketteiK = document.querySelector(".ketteiK");
const kyanseru = document.querySelector(".kyanseru");
const kakutei = document.querySelector(".kakutei");
const backc = document.querySelector(".backc");
const change = document.querySelector(".change");
const changeb = document.querySelector(".changeb");
const backcclasses = ["p1turn","p2turn","p3turn","p4turn","answer1","answer2","answer3","answer4"];
let syu = 0;
let r = 1;
const next = document.querySelector(".next");
const backt = document.querySelector(".backt");
const tokutenhyou = document.querySelector(".tokutenhyou");
const tenkaku = document.querySelector(".tenkaku");
let n = 0;
const tclasses = ["t0","t-1","t-2","t-3","t-4","t-5","t-6","t-7","t-8"];
const classToNumber = {
  ni: 2,
  san: 3,
  yon: 4,
  go: 5,
  roku: 6,
  nana: 7,
  hati: 8
};
let hannin = 0;
let sort = 0;
let y1 = 0;
let y2 = 0;
let y3 = 0;
let p1a = 0;
let p2a = 0;
let p3a = 0;
let p4a = 0;
let am = 0;
let bm = 0;
let cm = 0;
let amp = 0;
let bmp = 0;
let cmp = 0;
let rp = [0,0,0,0];
const t8 = document.getElementById("t8");
const t9 = document.getElementById("t9");
const t10 = document.getElementById("t10");
const t11 = document.getElementById("t11");
const t12 = document.getElementById("t12");
const t14 = document.getElementById("t14");
const t15 = document.getElementById("t15");
const t16 = document.getElementById("t16");
const t17 = document.getElementById("t17");
const t18 = document.getElementById("t18");
const t20 = document.getElementById("t20");
const t21 = document.getElementById("t21");
const t22 = document.getElementById("t22");
const t23 = document.getElementById("t23");
const t24 = document.getElementById("t24");
const t26 = document.getElementById("t26");
const t27 = document.getElementById("t27");
const t28 = document.getElementById("t28");
const t29 = document.getElementById("t29");
const t30 = document.getElementById("t30");
let t8v = 0;
let t9v = 0;
let t10v = 0;
let t11v = 0;
let t12v = 0;
let t14v = 0;
let t15v = 0;
let t16v = 0;
let t17v = 0;
let t18v = 0;
let t20v = 0;
let t21v = 0;
let t22v = 0;
let t23v = 0;
let t24v = 0;
let t26v = 0;
let t27v = 0;
let t28v = 0;
let t29v = 0;
let t30v = 0;

lefttop.classList.add("off");
sininall.classList.add("off");
player.classList.add("off");
yougi1.classList.add("off");
yougi1r.classList.add("off");
yougi1b.classList.add("off");
yougi2.classList.add("off");
yougi2r.classList.add("off");
yougi2b.classList.add("off");
yougi3.classList.add("off");
yougi3r.classList.add("off");
yougi3b.classList.add("off");
yougi1A.classList.add("off");
yougi2B.classList.add("off");
yougi3C.classList.add("off");
sentaku.classList.add("off");
bottom.classList.add("off");
p11y.classList.add("off");
p12y.classList.add("off");
p13y.classList.add("off");
p21y.classList.add("off");
p22y.classList.add("off");
p23y.classList.add("off");
p31y.classList.add("off");
p32y.classList.add("off");
p33y.classList.add("off");
p41y.classList.add("off");
p42y.classList.add("off");
p43y.classList.add("off");
kettei.classList.add("off");
ketteiK.classList.add("off");
change.classList.add("off");
next.classList.add("off");
backt.classList.add("off");
tokutenhyou.classList.add("off");
for (let i = number.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [number[i], number[j]] = [number[j], number[i]];
}
yougi1b.classList.add(number[1]);
yougi2b.classList.add(number[2]);
p1b.classList.add(number[4]);
p2b.classList.add(number[5]);
//sininb.classList.add(number[0]);
//yougi1b.classList.add(number[1]);
//yougi2b.classList.add(number[2]);
//yougi3b.classList.add(number[3]);
//p1b.classList.add(number[4]);
//p2b.classList.add(number[5]);
//p3b.classList.add(number[6]);
//p4b.classList.add(number[7]);
tenkaku.classList.add("off");
t8.classList.add("t0");
t14.classList.add("t0");
t20.classList.add("t0");
t26.classList.add("t0");
t12.classList.add("t0");
t18.classList.add("t0");
t24.classList.add("t0");
t30.classList.add("t0");

function hanninf(el) {
  if (el.classList.contains("batu")) return null;
  for (const c in classToNumber) {
    if (el.classList.contains(c)) {
      return classToNumber[c];
    }
  }
  return null;
}
function intokuten(el, v) {
  el.classList.remove(...tclasses);
  if (v === 0) {
    el.classList.add("t0");
  } else if (v === -1) {
    el.classList.add("t-1");
  } else if (v === -2) {
    el.classList.add("t-2");
  } else if (v === -3) {
    el.classList.add("t-3");
  } else if (v === -4) {
    el.classList.add("t-4");
  } else if (v === -5) {
    el.classList.add("t-5");
  } else if (v === -6) {
    el.classList.add("t-6");
  } else if (v === -7) {
    el.classList.add("t-7");
  } else if (v === -8) {
    el.classList.add("t-8");
  }
}
function keisan() {
  hannin = 0;
  sort = 0;
  y1 = 0;
  y2 = 0;
  y3 = 0;
  am = 0;
  bm = 0;
  cm = 0;
  amp = 0;
  bmp = 0;
  cmp = 0;
  rp = [0,0,0,0];
  y1 = hanninf(yougi1b);
  y2 = hanninf(yougi2b);
  y3 = hanninf(yougi3b);
  if (y1 === 5 || y2 === 5 || y3 === 5) {
    sort = [y1, y2, y3].sort((a, b) => a - b);
    if (!(sort[0] === null)) {
      if (sort[0] === y1) {
        hannin = 1;
      } else if (sort[0] === y2) {
        hannin = 2;
      } else if (sort[0] === y3) {
        hannin = 3;
      }
    } else {
      if (sort[1] === y1) {
        hannin = 1;
      } else if (sort[1] === y2) {
        hannin = 2;
      } else if (sort[1] === y3) {
        hannin = 3;
      }
    }
  } else {
    sort = [y1, y2, y3].sort((a, b) => b - a);
    if (!(sort[0] === null)) {
      if (sort[0] === y1) {
        hannin = 1;
      } else if (sort[0] === y2) {
        hannin = 2;
      } else if (sort[0] === y3) {
        hannin = 3;
      }
    } else {
      if (sort[1] === y1) {
        hannin = 1;
      } else if (sort[1] === y2) {
        hannin = 2;
      } else if (sort[1] === y3) {
        hannin = 3;
      }
    }
  }
  if (r === 2) {
    if (hannin === 1) {
      if (p1a === 1) {
        rp[0] = 0;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
      if (p2a === 1) {
        rp[1] = 0;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        rp[2] = 0;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        rp[3] = 0;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
    } else if (hannin === 2) {
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        rp[0] = 0;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
     if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        rp[1] = 0;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        rp[2] = 0;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        rp[3] = 0;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
    } else if (hannin === 3) {
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        rp[0] = 0;
      }
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        rp[1] = 0;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        rp[2] = 0;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        rp[3] = 0;
      }
    }
  } else if (r === 3) {
    if (hannin === 1) {
      if (p2a === 1) {
        rp[1] = 0;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        rp[2] = 0;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        rp[3] = 0;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        rp[0] = 0;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
    } else if (hannin === 2) {
     if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        rp[1] = 0;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        rp[2] = 0;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        rp[3] = 0;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        rp[0] = 0;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
    } else if (hannin === 3) {
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        rp[1] = 0;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        rp[2] = 0;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        rp[3] = 0;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        rp[0] = 0;
      }
    }
  } else if (r === 4) {
    if (hannin === 1) {
      if (p3a === 1) {
        rp[2] = 0;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        rp[3] = 0;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        rp[0] = 0;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
      if (p2a === 1) {
        rp[1] = 0;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
    } else if (hannin === 2) {
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        rp[2] = 0;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        rp[3] = 0;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        rp[0] = 0;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        rp[1] = 0;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
    } else if (hannin === 3) {
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        rp[2] = 0;
      }
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        rp[3] = 0;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        rp[0] = 0;
      }
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        rp[1] = 0;
      }
    }
  } else if (r === 5) {
    if (hannin === 1) {
      if (p4a === 1) {
        rp[3] = 0;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        rp[0] = 0;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
      if (p2a === 1) {
        rp[1] = 0;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        rp[2] = 0;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
    } else if (hannin === 2) {
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        rp[3] = 0;
      } else if (p4a === 3) {
        cm = 4;
        cmp += 1;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        rp[0] = 0;
      } else if (p1a === 3) {
        cm = 1;
        cmp += 1;
      } 
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        rp[1] = 0;
      } else if (p2a === 3) {
        cm = 2;
        cmp += 1;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        rp[2] = 0;
      } else if (p3a === 3) {
        cm = 3;
        cmp += 1;
      }
    } else if (hannin === 3) {
      if (p4a === 1) {
        am = 4;
        amp += 1;
      } else if (p4a === 2) {
        bm = 4;
        bmp += 1;
      } else if (p4a === 3) {
        rp[3] = 0;
      }
      if (p1a === 1) {
        am = 1;
        amp += 1;
      } else if (p1a === 2) {
        bm = 1;
        bmp += 1;
      } else if (p1a === 3) {
        rp[0] = 0;
      }
      if (p2a === 1) {
        am = 2;
        amp += 1;
      } else if (p2a === 2) {
        bm = 2;
        bmp += 1;
      } else if (p2a === 3) {
        rp[1] = 0;
      }
      if (p3a === 1) {
        am = 3;
        amp += 1;
      } else if (p3a === 2) {
        bm = 3;
        bmp += 1;
      } else if (p3a === 3) {
        rp[2] = 0;
      }
    }
  }
  if (am === 1) {
    rp[0] = amp * -1;
  } else if (am === 2) {
    rp[1] = amp * -1;
  } else if (am === 3) {
    rp[2] = amp * -1;
  } else if (am === 4) {
    rp[3] = amp * -1;
  }
  if (bm === 1) {
    rp[0] = bmp * -1;
  } else if (bm === 2) {
    rp[1] = bmp * -1;
  } else if (bm === 3) {
    rp[2] = bmp * -1;
  } else if (bm === 4) {
    rp[3] = bmp * -1;
  }
  if (cm === 1) {
    rp[0] = cmp * -1;
  } else if (cm === 2) {
    rp[1] = cmp * -1;
  } else if (cm === 3) {
    rp[2] = cmp * -1;
  } else if (cm === 4) {
    rp[3] = cmp * -1;
  }
  if (r === 2) {
    t8v = rp[0];
    t14v = rp[1];
    t20v = rp[2];
    t26v = rp[3];
    t12v = t8v;
    t18v = t14v;
    t24v = t20v;
    t30v = t26v;
    intokuten(t8, t8v);
    intokuten(t14, t14v);
    intokuten(t20, t20v);
    intokuten(t26, t26v);
  } else if (r === 3) {
    t9v = rp[0];
    t15v = rp[1];
    t21v = rp[2];
    t27v = rp[3];
    t12v = t8v + t9v;
    t18v = t14v + t15v;
    t24v = t20v + t21v;
    t30v = t26v + t27v;
    intokuten(t9, t9v);
    intokuten(t15, t15v);
    intokuten(t21, t21v);
    intokuten(t27, t27v);
  } else if (r === 4) {
    t10v = rp[0];
    t16v = rp[1];
    t22v = rp[2];
    t28v = rp[3];
    t12v = t8v + t9v + t10v;
    t18v = t14v + t15v + t16v;
    t24v = t20v + t21v + t22v;
    t30v = t26v + t27v + t28v;
    intokuten(t10, t10v);
    intokuten(t16, t16v);
    intokuten(t22, t22v);
    intokuten(t28, t28v);
  } else if (r === 5) {
    t11v = rp[0];
    t17v = rp[1];
    t23v = rp[2];
    t29v = rp[3];
    t12v = t8v + t9v + t10v + t11v;
    t18v = t14v + t15v + t16v + t17v;
    t24v = t20v + t21v + t22v + t23v;
    t30v = t26v + t27v + t28v + t29v;
    intokuten(t11, t11v);
    intokuten(t17, t17v);
    intokuten(t23, t23v);
    intokuten(t29, t29v);
  }
  intokuten(t12, t12v);
  intokuten(t18, t18v);
  intokuten(t24, t24v);
  intokuten(t30, t30v);
}
startB.addEventListener("click", function() {
  start.classList.add("off");
  back.classList.add("off");
  lefttop.classList.remove("off");
  sininall.classList.remove("off");
  yougi1.classList.remove("off");
  yougi1b.classList.remove("off");
  yougi2.classList.remove("off");
  yougi2b.classList.remove("off");
  yougi3.classList.remove("off");
  yougi3b.classList.remove("off");
  yougi1A.classList.remove("off");
  yougi2B.classList.remove("off");
  yougi3C.classList.remove("off");
  bottom.classList.remove("off");
  player.classList.remove("off");
  player.classList.add("p1m");
  tenkaku.classList.remove("off");
});
yougi1.addEventListener("click", function() {
  yougi1.classList.add("off");
  yougi1r.classList.remove("off");
  sentaku.classList.remove(...sentakuclasses);
  sentaku.classList.add("hidari");
  yougi2.classList.remove("off");
  yougi2r.classList.add("off");
  yougi3.classList.remove("off");
  yougi3r.classList.add("off");
});
yougi2.addEventListener("click", function() {
  yougi1.classList.remove("off");
  yougi1r.classList.add("off");
  yougi2.classList.add("off");
  yougi2r.classList.remove("off");
  sentaku.classList.remove(...sentakuclasses);
  sentaku.classList.add("mannaka");
  yougi3.classList.remove("off");
  yougi3r.classList.add("off"); 
});
yougi3.addEventListener("click", function() {
  yougi1.classList.remove("off");
  yougi1r.classList.add("off");
  yougi2.classList.remove("off");
  yougi2r.classList.add("off");
  yougi3.classList.add("off");
  yougi3r.classList.remove("off");
  sentaku.classList.remove(...sentakuclasses);
  sentaku.classList.add("migi");
});
yougi1r.addEventListener("click", function() {
  kettei.classList.remove(...ketteiclasses);
  ketteiK.classList.remove("off");
  kettei.classList.add("A");
});
yougi2r.addEventListener("click", function() {
  kettei.classList.remove(...ketteiclasses);
  ketteiK.classList.remove("off");
  kettei.classList.add("B");
});
yougi3r.addEventListener("click", function() {
  kettei.classList.remove(...ketteiclasses);
  ketteiK.classList.remove("off");
  kettei.classList.add("C");
});
yougi1b.addEventListener("click", function() {
  if (yougi1r.classList.contains("off")) {
    yougi1.classList.add("off");
    yougi1r.classList.remove("off");
    sentaku.classList.remove(...sentakuclasses);
    sentaku.classList.add("hidari");
    yougi2.classList.remove("off");
    yougi2r.classList.add("off");
    yougi3.classList.remove("off");
    yougi3r.classList.add("off");
  } else if (!(yougi1r.classList.contains("off"))) {
    kettei.classList.remove(...ketteiclasses);
    ketteiK.classList.remove("off");
    kettei.classList.add("A");
  }
});
yougi2b.addEventListener("click", function() {
  if (yougi2r.classList.contains("off")) {
    yougi1.classList.remove("off");
    yougi1r.classList.add("off");
    yougi2.classList.add("off");
    yougi2r.classList.remove("off");
    sentaku.classList.remove(...sentakuclasses);
    sentaku.classList.add("mannaka");
    yougi3.classList.remove("off");
    yougi3r.classList.add("off"); 
  } else if (!(yougi2r.classList.contains("off"))) {
    kettei.classList.remove(...ketteiclasses);
    ketteiK.classList.remove("off");
    kettei.classList.add("B");
  }
});
yougi3b.addEventListener("click", function() {
  if (yougi3r.classList.contains("off")) {
    yougi1.classList.remove("off");
    yougi1r.classList.add("off");
    yougi2.classList.remove("off");
    yougi2r.classList.add("off");
    yougi3.classList.add("off");
    yougi3r.classList.remove("off");
    sentaku.classList.remove(...sentakuclasses);
    sentaku.classList.add("migi");
  } else if (!(yougi3r.classList.contains("off"))) {
    kettei.classList.remove(...ketteiclasses);
    ketteiK.classList.remove("off");
    kettei.classList.add("C");
  }
});
ketteiK.addEventListener("click", function() {
  kettei.classList.add("off");
  ketteiK.classList.add("off");
});
kyanseru.addEventListener("click", function() {
  kettei.classList.add("off");
  ketteiK.classList.add("off");
});
kakutei.addEventListener("click", function() {
  kettei.classList.add("off");
  ketteiK.classList.add("off");
  tenkaku.classList.add("off");
  yougi1b.classList.add("off");
  yougi2b.classList.add("off");
  yougi3b.classList.add("off");
  yougi1r.classList.add("off");
  yougi2r.classList.add("off");
  yougi3r.classList.add("off");
  sentaku.classList.add("off");
  change.classList.remove("off");
  backc.classList.remove(...backcclasses);
  syu += 1;
  if (player.classList.contains("p1m")) {
    player.classList.remove(...playerclasses);
    player.classList.add("p2m");
    if (kettei.classList.contains("A")) {
      p11.classList.add("off");
      p11y.classList.remove("off");
      yougi1b.classList.remove(...number);
      yougi2b.classList.add(number[2]);
      yougi3b.classList.add(number[3]);
      p1a = 1;
    } else if (kettei.classList.contains("B")) {
      p12.classList.add("off");
      p12y.classList.remove("off");
      yougi2b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi3b.classList.add(number[3]);
      p1a = 2;
    } else if (kettei.classList.contains("C")) {
      p13.classList.add("off");
      p13y.classList.remove("off");
      yougi3b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi2b.classList.add(number[2]);
      p1a = 3;
    }
    p1b.classList.remove(number[4]);
    p3b.classList.add(number[6]);
    backc.classList.add("p2turn");
  } else if (player.classList.contains("p2m")) {
    player.classList.remove(...playerclasses);
    player.classList.add("p3m");
    if (kettei.classList.contains("A")) {
      p21.classList.add("off");
      p21y.classList.remove("off");
      yougi1b.classList.remove(...number);
      yougi2b.classList.add(number[2]);
      yougi3b.classList.add(number[3]);
      p2a = 1;
    } else if (kettei.classList.contains("B")) {
      p22.classList.add("off");
      p22y.classList.remove("off");
      yougi2b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi3b.classList.add(number[3]);
      p2a = 2;
    } else if (kettei.classList.contains("C")) {
      p23.classList.add("off");
      p23y.classList.remove("off");
      yougi3b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi2b.classList.add(number[2]);
      p2a = 3;
    }
    p2b.classList.remove(number[5]);
    p4b.classList.add(number[7]);
    backc.classList.add("p3turn");
  } else if (player.classList.contains("p3m")) {
    player.classList.remove(...playerclasses);
    player.classList.add("p4m");
    if (kettei.classList.contains("A")) {
      p31.classList.add("off");
      p31y.classList.remove("off");
      yougi1b.classList.remove(...number);
      yougi2b.classList.add(number[2]);
      yougi3b.classList.add(number[3]);
      p3a = 1;
    } else if (kettei.classList.contains("B")) {
      p32.classList.add("off");
      p32y.classList.remove("off");
      yougi2b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi3b.classList.add(number[3]);
      p3a = 2;
    } else if (kettei.classList.contains("C")) {
      p33.classList.add("off");
      p33y.classList.remove("off");
      yougi3b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi2b.classList.add(number[2]);
      p3a = 3;
    }
    p3b.classList.remove(number[6]);
    p1b.classList.add(number[4]);
    backc.classList.add("p4turn");
  } else if (player.classList.contains("p4m")) {
    player.classList.remove(...playerclasses);
    player.classList.add("p1m");
    if (kettei.classList.contains("A")) {
      p41.classList.add("off");
      p41y.classList.remove("off");
      yougi1b.classList.remove(...number);
      yougi2b.classList.add(number[2]);
      yougi3b.classList.add(number[3]);
      p4a = 1;
    } else if (kettei.classList.contains("B")) {
      p42.classList.add("off");
      p42y.classList.remove("off");
      yougi2b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi3b.classList.add(number[3]);
      p4a = 2;
    } else if (kettei.classList.contains("C")) {
      p43.classList.add("off");
      p43y.classList.remove("off");
      yougi3b.classList.remove(...number);
      yougi1b.classList.add(number[1]);
      yougi2b.classList.add(number[2]);
      p4a = 3;
    }
    p4b.classList.remove(number[7]);
    p2b.classList.add(number[5]);
    backc.classList.add("p1turn");
  }
  if (syu === 4) {
    sininb.classList.add(number[0]);
    yougi1b.classList.add(number[1]);
    yougi2b.classList.add(number[2]);
    yougi3b.classList.add(number[3]);
    p1b.classList.add(number[4]);
    p2b.classList.add(number[5]);
    p3b.classList.add(number[6]);
    p4b.classList.add(number[7]);
    changeb.classList.add("answerb");
    if (r === 1) {
      backc.classList.remove(...backcclasses);
      backc.classList.add("answer1");
      r += 1;
    } else if (r === 2) {
      backc.classList.remove(...backcclasses);
      backc.classList.add("answer2");
      r += 1;
    } else if (r === 3) {
      backc.classList.remove(...backcclasses);
      backc.classList.add("answer3");
      r += 1;
    } else if (r === 4) {
      backc.classList.remove(...backcclasses);
      backc.classList.add("answer4");
      r += 1;
    }
  }
});
changeb.addEventListener("click", function() {
  change.classList.add("off");
  yougi1b.classList.remove("off");
  yougi2b.classList.remove("off");
  yougi3b.classList.remove("off");
  yougi1.classList.remove("off");
  yougi2.classList.remove("off");
  yougi3.classList.remove("off");
  tenkaku.classList.remove("off");
  player.classList.remove("off");
  if (syu === 4) {
    next.classList.remove("off");
    yougi1b.classList.add("dontclick");
    yougi2b.classList.add("dontclick");
    yougi3b.classList.add("dontclick");
    yougi1.classList.add("dontclick");
    yougi2.classList.add("dontclick");
    yougi3.classList.add("dontclick");
    tenkaku.classList.add("off");
    player.classList.add("off");
  }
});
next.addEventListener("click", function() {
  if (n === 0) {
    yougi1b.classList.remove("dontclick");
    yougi2b.classList.remove("dontclick");
    yougi3b.classList.remove("dontclick");
    yougi1.classList.remove("dontclick");
    yougi2.classList.remove("dontclick");
    yougi3.classList.remove("dontclick");
    yougi1b.classList.add("off");
    yougi2b.classList.add("off");
    yougi3b.classList.add("off");
    p11.classList.remove("off");
    p12.classList.remove("off");
    p13.classList.remove("off");
    p21.classList.remove("off");
    p22.classList.remove("off");
    p23.classList.remove("off");
    p31.classList.remove("off");
    p32.classList.remove("off");
    p33.classList.remove("off");
    p41.classList.remove("off");
    p42.classList.remove("off");
    p43.classList.remove("off");
    p11y.classList.add("off");
    p12y.classList.add("off");
    p13y.classList.add("off");
    p21y.classList.add("off");
    p22y.classList.add("off");
    p23y.classList.add("off");
    p31y.classList.add("off");
    p32y.classList.add("off");
    p33y.classList.add("off");
    p41y.classList.add("off");
    p42y.classList.add("off");
    p43y.classList.add("off");
    backt.classList.remove("off");
    tokutenhyou.classList.remove("off");
    n = 1;
    keisan();
    if (r === 5) next.classList.add("end");
    if (t12v < -4 || t18v < -4 || t24v < -4 || t30v < -4) next.classList.add("end");
  } else if (n === 1) {
    if (next.classList.contains("end")) {
      location.reload();
      return;
    }
    next.classList.add("off");
    tokutenhyou.classList.add("off");
    backt.classList.add("off");
    change.classList.remove("off");
    backc.classList.remove(...backcclasses);
    changeb.classList.remove("answerb");
    for (let i = number.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [number[i], number[j]] = [number[j], number[i]];
    }
    sininb.classList.remove(...number);
    yougi1b.classList.remove(...number);
    yougi2b.classList.remove(...number);
    yougi3b.classList.remove(...number);
    p1b.classList.remove(...number);
    p2b.classList.remove(...number);
    p3b.classList.remove(...number);
    p4b.classList.remove(...number);
    yougi1b.classList.add(number[1]);
    yougi2b.classList.add(number[2]);
    player.classList.remove(...playerclasses);
    syu = 0;
    if (r === 2) {
      p2b.classList.add(number[5]);
      p3b.classList.add(number[6]);
      player.classList.add("p2m");
      backc.classList.add("p2turn");
    } else if (r === 3) {
      p3b.classList.add(number[6]);
      p4b.classList.add(number[7]);
      player.classList.add("p3m");
      backc.classList.add("p3turn");
    } else if (r === 4) {
      p4b.classList.add(number[7]);
      p1b.classList.add(number[4]);
      player.classList.add("p4m");
      backc.classList.add("p4turn");
    }
    n = 0;
  }
});
tenkaku.addEventListener("click", function() {
  if (tenkaku.classList.contains("modoru")) {
    backt.classList.add("off");
    tokutenhyou.classList.add("off");
    yougi1b.classList.remove("off");
    yougi2b.classList.remove("off");
    yougi3b.classList.remove("off");
    tenkaku.classList.remove("modoru");
  } else {
    backt.classList.remove("off");
    tokutenhyou.classList.remove("off");
    yougi1b.classList.add("off");
    yougi2b.classList.add("off");
    yougi3b.classList.add("off");
    tenkaku.classList.add("modoru");
  }
});
