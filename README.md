# Apex Broker

A modern, Apple-inspired trading platform built with React, TypeScript, and Tailwind CSS. Features real-time market data, portfolio management, advanced charting, and professional trading tools.

## 🚀 Features

### Core Trading Features
- **Real-time Market Data**: Live price updates for stocks, indices, crypto, forex, and commodities
- **Advanced Charting**: Interactive candlestick charts with technical indicators
- **Portfolio Management**: Track positions, P&L, and performance analytics
- **Order Management**: Buy/sell orders with limit, market, and stop orders
- **Risk Management**: Stop-loss, take-profit, and position sizing tools

### Professional Tools
- **AI Assistant**: Claude-powered trading insights and market analysis
- **Technical Indicators**: EMA, Bollinger Bands, RSI, MACD, Supertrend, and more
- **Alert System**: Price alerts and notification management
- **Trade Journal**: Record and analyze trading decisions
- **Risk Calculator**: Position sizing and risk management tools

### Market Coverage
- **Indian Markets**: NSE/BSE stocks and indices
- **US Markets**: NASDAQ/NYSE stocks and ETFs
- **Cryptocurrency**: Bitcoin, Ethereum, and major altcoins
- **Commodities**: Gold, Silver, Crude Oil
- **Forex**: Major currency pairs

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite
- **Icons**: SF Symbols (Apple-inspired iconography)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/apex-broker.git
   cd apex-broker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Philosophy

Apex Broker embraces Apple's design principles:
- **Clarity**: Clean, readable interface with clear information hierarchy
- **Depth**: Layered UI with backdrop blur and sophisticated color palette
- **Deference**: Content takes center stage with subtle, non-intrusive UI elements
- **Fluidity**: Smooth animations and transitions throughout the experience

## 📊 Demo Account

**Email**: `demo@apex.com`
**Password**: `demo`

Use the demo account to explore all features without risking real money.

## 🔧 Development

### Project Structure
```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── assets/          # Static assets
```

### Key Components
- **Dashboard**: Portfolio overview and key metrics
- **Markets**: Market data browser and scanner
- **Trade**: Order placement and position management
- **Portfolio**: Detailed position analysis
- **Analytics**: Performance charts and insights
- **AI Assistant**: Chat interface for trading assistance

### Color Palette
The app uses a sophisticated dark theme with Apple-inspired colors:
- Primary: Pure black backgrounds
- Accent: Blue (#007aff) for interactive elements
- Success: Green (#34c759) for gains
- Error: Red (#ff3b30) for losses
- Neutral: Grays for secondary information

## 📈 Trading Features

### Order Types
- **Market Orders**: Execute at current market price
- **Limit Orders**: Set specific price targets
- **Stop Orders**: Automatic execution when price reaches threshold
- **GTT Orders**: Good Till Triggered orders

### Risk Management
- **Stop Loss**: Automatic position closure to limit losses
- **Take Profit**: Lock in gains at target prices
- **Position Sizing**: Risk-based position calculation
- **Portfolio Diversification**: Allocation tracking and alerts

### Analytics
- **Performance Tracking**: Daily, weekly, monthly returns
- **Risk Metrics**: Sharpe ratio, volatility analysis
- **Trade Journal**: Detailed trade logging and analysis
- **Market Scanner**: Find opportunities across markets

## 🤖 AI Assistant

Powered by Anthropic's Claude, the AI assistant provides:
- **Market Analysis**: Technical and fundamental insights
- **Trading Signals**: Entry/exit recommendations
- **Portfolio Advice**: Risk assessment and optimization
- **Educational Content**: Trading concepts and strategies

## 📱 Mobile Responsive

Fully responsive design that works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security

- **Session Management**: Secure login with session timeouts
- **Data Encryption**: Local storage encryption for sensitive data
- **Rate Limiting**: API call throttling to prevent abuse
- **Input Validation**: Comprehensive input sanitization

## 🚀 Performance

- **Fast Loading**: Optimized bundle size and lazy loading
- **Real-time Updates**: Efficient state management for live data
- **Smooth Animations**: Hardware-accelerated CSS animations
- **Memory Efficient**: Optimized data structures and cleanup

## 📄 License

This project is for educational and demonstration purposes. Not intended for real trading.

## 🤝 Contributing

Contributions welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Disclaimer**: This is a demonstration application. All market data is simulated and not real-time. Do not use for actual trading decisions.
  {id:'HDFC_N50',  name:'HDFC Index Fund Nifty 50',     category:'Index Fund',   aum:'15,678',nav:198.43, r1Y:26.8,r3Y:16.4,r5Y:14.2,risk:'Moderate',  rating:4,minSIP:100},
  {id:'QUANT_SML', name:'Quant Small Cap Fund',         category:'Small Cap',    aum:'18,920',nav:245.67, r1Y:68.4,r3Y:42.2,r5Y:32.6,risk:'Very High',  rating:3,minSIP:1000},
  {id:'SBI_ELSS',  name:'SBI Long Term Equity (ELSS)',  category:'ELSS/Tax Save',aum:'25,112',nav:434.21, r1Y:38.2,r3Y:24.6,r5Y:19.2,risk:'High',       rating:5,minSIP:500},
  {id:'NIPPON_LQ', name:'Nippon India Liquid Fund',     category:'Liquid',       aum:'38,442',nav:5542.34,r1Y:7.2, r3Y:6.8, r5Y:6.4, risk:'Low',        rating:4,minSIP:100},
  {id:'TATA_DIGI', name:'Tata Digital India Fund',      category:'Sectoral',     aum:'8,920', nav:42.80,  r1Y:48.2,r3Y:26.4,r5Y:28.4,risk:'Very High',  rating:3,minSIP:500},
  {id:'ICICI_ALLW',name:'ICICI Pru All Seasons Bond',   category:'Debt',         aum:'12,340',nav:32.45,  r1Y:8.4, r3Y:7.2, r5Y:7.8, risk:'Low-Mod',    rating:4,minSIP:500},
];

const MTF_ELIGIBLE=['RELIANCE','TCS','HDFCBANK','INFY','SBIN','WIPRO','TATAMOTORS','AXISBANK','BAJFINANCE','ITC','MARUTI','SUNPHARMA','LTIM','HINDUNILVR'];
const MTF_RATE=0.00035;

const OI_STRIKES=[
  {strike:21500,ce_oi:12450, pe_oi:89230, ce_chg:-15.2,pe_chg:8.4},
  {strike:21800,ce_oi:45200, pe_oi:68400, ce_chg:-5.1, pe_chg:3.8},
  {strike:22000,ce_oi:128900,pe_oi:142500,ce_chg:18.2, pe_chg:22.4},
  {strike:22100,ce_oi:98700, pe_oi:76400, ce_chg:8.9,  pe_chg:-4.2},
  {strike:22200,ce_oi:145600,pe_oi:54200, ce_chg:24.6, pe_chg:-12.8},
  {strike:22300,ce_oi:98200, pe_oi:32100, ce_chg:12.4, pe_chg:-18.6},
  {strike:22500,ce_oi:89400, pe_oi:18600, ce_chg:9.2,  pe_chg:-14.2},
  {strike:23000,ce_oi:34200, pe_oi:8900,  ce_chg:2.8,  pe_chg:-4.2},
];

const PORT_INIT=[
  {id:'RELIANCE',qty:10, avg:2780.50,sl:2700, tp:3000},
  {id:'TCS',     qty:5,  avg:3480.00,sl:3350, tp:3700},
  {id:'HDFCBANK',qty:15, avg:1590.00,sl:1550, tp:1700},
  {id:'BTC/USD', qty:0.1,avg:61200.00,sl:58000,tp:72000},
  {id:'AAPL',    qty:8,  avg:178.20, sl:170,  tp:200},
  {id:'GOLD',    qty:2,  avg:2310.00, sl:2250, tp:2450},
];
const BALANCE_INIT=1000000;

const LEADERBOARD_DATA=[
  {rank:1,name:'Arjun Mehta',   avatar:'AM',pnl:284500,pnl_pct:28.45,trades:142,win_rate:68.3,badge:'Legend',  streak:12},
  {rank:2,name:'Priya Sharma',  avatar:'PS',pnl:198200,pnl_pct:19.82,trades:98, win_rate:62.2,badge:'Elite',   streak:7},
  {rank:3,name:'Rohan Gupta',   avatar:'RG',pnl:156800,pnl_pct:15.68,trades:201,win_rate:58.7,badge:'Elite',   streak:4},
  {rank:4,name:'Sneha Patel',   avatar:'SP',pnl:134200,pnl_pct:13.42,trades:87, win_rate:66.7,badge:'Pro',     streak:9},
  {rank:5,name:'Vikram Singh',  avatar:'VS',pnl:98700, pnl_pct:9.87, trades:165,win_rate:54.5,badge:'Pro',     streak:2},
  {rank:6,name:'Ananya Iyer',   avatar:'AI',pnl:76300, pnl_pct:7.63, trades:73, win_rate:60.3,badge:'Advanced',streak:5},
  {rank:7,name:'Karan Malhotra',avatar:'KM',pnl:54100, pnl_pct:5.41, trades:112,win_rate:52.7,badge:'Advanced',streak:1},
  {rank:8,name:'You',           avatar:'YO',pnl:31200, pnl_pct:3.12, trades:34, win_rate:55.9,badge:'Rising',  streak:3,isMe:true},
  {rank:9,name:'Dev Krishnan',  avatar:'DK',pnl:18900, pnl_pct:1.89, trades:45, win_rate:48.9,badge:'Rising',  streak:0},
  {rank:10,name:'Meera Joshi',  avatar:'MJ',pnl:9400,  pnl_pct:0.94, trades:28, win_rate:53.6,badge:'Novice',  streak:2},
];
const BADGE_C={Legend:'#FFD700',Elite:'#FF4500',Pro:'#9B59B6',Advanced:'#2979FF',Rising:'#00e676',Novice:'#8898bb'};
const ANALYTICS_DATA={
  daily:Array.from({length:30},(_,i)=>({date:`D${i+1}`,pnl:Math.round((Math.sin(i*0.4)+Math.cos(i*0.7)*0.5)*12000)})),
  monthly:['Jan','Feb','Mar','Apr','May','Jun'].map((m,i)=>({month:m,pnl:[42000,-18000,67000,31000,-8000,54000][i]})),
  bySymbol:[{symbol:'RELIANCE',trades:12,pnl:18400,wr:66.7},{symbol:'TCS',trades:8,pnl:12200,wr:62.5},{symbol:'BTC/USD',trades:20,pnl:9800,wr:55.0},{symbol:'HDFCBANK',trades:6,pnl:-3200,wr:33.3},{symbol:'AAPL',trades:10,pnl:5600,wr:60.0}],
  winRate:58.2,profitFactor:1.84,avgWin:8240,avgLoss:-4470,maxDrawdown:-12.4,sharpe:1.62,
};
const AI_INIT=[{role:'assistant',content:'👋 Hi! I\'m APEX AI — powered by Claude.\n\nI can help with:\n• Market analysis & trading signals\n• Portfolio risk & MTF strategy\n• IPO analysis & GMP tracking\n• Mutual fund comparison\n• Trade journal insights\n\nWhat would you like to explore?'}];

function genCandles(base,n=120,ms=60000){let p=base*(0.91+Math.random()*0.07);const now=Date.now();return Array.from({length:n},(_,i)=>{const v=0.007+Math.random()*0.005,o=p,c=Math.max(0.0001,o+(Math.random()-0.478)*o*v),h=Math.max(o,c)*(1+Math.random()*v*0.4),l=Math.min(o,c)*(1-Math.random()*v*0.4);p=c;return{t:now-(n-i)*ms,o:+o.toFixed(4),h:+h.toFixed(4),l:+l.toFixed(4),c:+c.toFixed(4),v:Math.floor(300+Math.random()*9000)};});}
function genPortHistory(base,n=60){let v=base*0.88;return Array.from({length:n},(_,i)=>{v=Math.max(0,v+(Math.random()-0.44)*v*0.006);return{i,value:Math.round(v)};});}

const hexToRgba=(hex,a)=>{const r=parseInt(hex.slice(1,3),16),g2=parseInt(hex.slice(3,5),16),b2=parseInt(hex.slice(5,7),16);return`rgba(${r},${g2},${b2},${a})`;};
const rrect=(ctx,x,y,w,h,r2)=>{ctx.beginPath();ctx.moveTo(x+r2,y);ctx.lineTo(x+w-r2,y);ctx.arcTo(x+w,y,x+w,y+r2,r2);ctx.lineTo(x+w,y+h-r2);ctx.arcTo(x+w,y+h,x+w-r2,y+h,r2);ctx.lineTo(x+r2,y+h);ctx.arcTo(x,y+h,x,y+h-r2,r2);ctx.lineTo(x,y+r2);ctx.arcTo(x,y,x+r2,y,r2);ctx.closePath();};

// ── CANDLESTICK CHART ────────────────────────────────────────────────────────
function CandleChart({candles,slPrice,tpPrice,indicators={}}){
  const containerRef=useRef(null),canvasRef=useRef(null);
  const viewRef=useRef({barsVisible:80,offset:0}),dragRef=useRef(null),hoverRef=useRef(null),drawRef=useRef(null);
  const[hover,setHover]=useState(null);const[,redraw]=useState(0);
  const PAD={l:8,r:72,t:14,b:24};const VOL_R=0.15,SUB_H=82,GAP=6;
  const getVis=useCallback(()=>{const{barsVisible,offset}=viewRef.current;const n=Math.min(barsVisible,candles.length);const start=Math.max(0,candles.length-n-offset);return{vis:candles.slice(start,start+n),startIdx:start};},[candles]);
  const draw=useCallback(()=>{
    const canvas=canvasRef.current,container=containerRef.current;if(!canvas||!container)return;
    const DPR=Math.min(window.devicePixelRatio||1,2),W=container.clientWidth,H=container.clientHeight;if(!W||!H)return;
    canvas.width=W*DPR;canvas.height=H*DPR;canvas.style.width=W+'px';canvas.style.height=H+'px';
    const ctx=canvas.getContext('2d');ctx.scale(DPR,DPR);ctx.clearRect(0,0,W,H);
    const{vis}=getVis();if(!vis.length)return;
    const hasRSI=!!indicators.rsi&&!indicators.macd&&!indicators.stoch,hasMacd=!!indicators.macd&&!indicators.stoch,hasStoch=!!indicators.stoch,subOn=hasRSI||hasMacd||hasStoch;
    const subTop=H-PAD.b-(subOn?SUB_H:0);
    const prices=vis.map(c=>c.c);
    const ema9v=indicators.ema9?calcEMA(prices,9):[];
    const ema21v=indicators.ema21?calcEMA(prices,21):[];
    const bbv=indicators.bb?calcBollinger(prices,20):[];
    const vwapv=indicators.vwap?calcVWAP(vis):[];
    const rsiv=hasRSI?calcRSI(prices,14):[];
    const macdv=hasMacd?calcMACD(prices):[];
    const stochv=hasStoch?calcStochastic(vis,14,3):[];
    const stv=indicators.supertrend?calcSupertrend(vis,10,3):[];
    const atrv=indicators.atr?calcATR(vis,14):[];
    let pMin=Math.min(...vis.map(c=>c.l)),pMax=Math.max(...vis.map(c=>c.h));
    if(bbv.length)bbv.forEach(b=>{if(b?.upper){pMax=Math.max(pMax,b.upper);pMin=Math.min(pMin,b.lower);}});
    if(vwapv.length)vwapv.forEach(v=>{if(v){pMax=Math.max(pMax,v);pMin=Math.min(pMin,v);}});
    const pad4=(pMax-pMin)*0.05||1;pMin-=pad4;pMax+=pad4*1.5;
    const vMax=Math.max(...vis.map(c=>c.v),1);
    const chartH=(subOn?subTop-GAP:H-PAD.b)-PAD.t,volH=chartH*VOL_R,priceH=chartH-volH-GAP;
    const cW=(W-PAD.l-PAD.r)/vis.length,cPad=Math.max(0.5,cW*0.13),bodyW=Math.max(1,cW-cPad*2);
    const py=p=>PAD.t+(1-(p-pMin)/(pMax-pMin))*priceH;
    const cx=i=>PAD.l+i*cW+cW/2;
    let macdMin=0,macdMax=0.001;
    if(hasMacd&&macdv.length){const vals=macdv.flatMap(m=>[m.macd,m.signal,m.histogram]).filter(v=>v!=null&&isFinite(v));if(vals.length){macdMin=Math.min(...vals)*1.15;macdMax=Math.max(...vals)*1.15||0.001;}}
    const subY=(v,lo,hi)=>subTop+(1-(v-lo)/((hi-lo)||1))*SUB_H;
    // BG
    ctx.fillStyle=C.bg0;ctx.fillRect(0,0,W,H);
    // Grid
    ctx.textAlign='right';ctx.font='9px monospace';ctx.fillStyle=C.muted;
    const numTicks=Math.floor(priceH/40);
    for(let i=0;i<=numTicks;i++){const p=pMin+(pMax-pMin)*i/numTicks,y=py(p);ctx.strokeStyle=hexToRgba(C.muted,0.12);ctx.lineWidth=0.4;ctx.setLineDash([4,6]);ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(W-PAD.r,y);ctx.stroke();ctx.fillStyle=C.muted;ctx.fillText(fp(p),W-PAD.r+69,y+3);}
    ctx.setLineDash([]);
    const tStep=Math.max(1,Math.ceil(vis.length/Math.floor((W-PAD.l-PAD.r)/60)));
    ctx.fillStyle=C.muted;ctx.textAlign='center';ctx.font='8px monospace';
    vis.forEach((c,i)=>{if(i%tStep!==0)return;ctx.strokeStyle=hexToRgba(C.muted,0.08);ctx.lineWidth=0.3;ctx.setLineDash([]);ctx.beginPath();ctx.moveTo(cx(i),PAD.t);ctx.lineTo(cx(i),subOn?subTop+SUB_H:H-PAD.b);ctx.stroke();const d=new Date(c.t);ctx.fillText(`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`,cx(i),H-PAD.b+13);});
    ctx.strokeStyle=hexToRgba(C.border,0.8);ctx.lineWidth=0.6;ctx.setLineDash([]);
    ctx.beginPath();ctx.moveTo(PAD.l,PAD.t+priceH+GAP);ctx.lineTo(W-PAD.r,PAD.t+priceH+GAP);ctx.stroke();
    if(subOn){ctx.beginPath();ctx.moveTo(PAD.l,subTop-2);ctx.lineTo(W-PAD.r,subTop-2);ctx.stroke();}
    // ATR bands
    if(indicators.atr&&atrv.length){const uB=vis.map((c,i)=>atrv[i]!=null?c.c+2*atrv[i]:null),lB=vis.map((c,i)=>atrv[i]!=null?c.c-2*atrv[i]:null);const uP=uB.map((v,i)=>v!=null?[cx(i),py(v)]:null).filter(Boolean),lP=lB.map((v,i)=>v!=null?[cx(i),py(v)]:null).filter(Boolean);if(uP.length>1){ctx.beginPath();uP.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));[...lP].reverse().forEach(([x,y])=>ctx.lineTo(x,y));ctx.closePath();ctx.fillStyle=hexToRgba(C.indigo,0.06);ctx.fill();}[[uP,C.indigo],[lP,C.indigo]].forEach(([pts,col])=>{if(pts.length<2)return;ctx.beginPath();ctx.strokeStyle=hexToRgba(col,0.5);ctx.lineWidth=0.8;ctx.setLineDash([3,3]);pts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();ctx.setLineDash([]);});}
    // BB
    if(indicators.bb&&bbv.length){const upper=bbv.map((b,i)=>b?.upper?[cx(i),py(b.upper)]:null).filter(Boolean),lower=bbv.map((b,i)=>b?.lower?[cx(i),py(b.lower)]:null).filter(Boolean),mid=bbv.map((b,i)=>b?.mid?[cx(i),py(b.mid)]:null).filter(Boolean);if(upper.length>1){ctx.beginPath();upper.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));[...lower].reverse().forEach(([x,y])=>ctx.lineTo(x,y));ctx.closePath();ctx.fillStyle=hexToRgba(C.cyan,0.04);ctx.fill();[[upper,C.cyan,0.5,0.7,[]],[lower,C.cyan,0.5,0.7,[]],[mid,C.cyan,0.25,0.8,[3,4]]].forEach(([pts,col,al,lw,dash])=>{if(pts.length<2)return;ctx.beginPath();ctx.strokeStyle=hexToRgba(col,al);ctx.lineWidth=lw;ctx.setLineDash(dash);pts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();});ctx.setLineDash([]);}}
    // EMA/VWAP
    const drawLine=(arr,col,dash=[],lw=1.3)=>{const pts=arr.map((v,i)=>v!=null?[cx(i),py(v)]:null).filter(Boolean);if(pts.length<2)return;ctx.beginPath();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.setLineDash(dash);pts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();ctx.setLineDash([]);};
    if(indicators.ema9&&ema9v.length)drawLine(ema9v,C.amber,[],1.4);
    if(indicators.ema21&&ema21v.length)drawLine(ema21v,C.purple,[],1.4);
    if(indicators.vwap&&vwapv.length)drawLine(vwapv,C.teal,[5,3],1.5);
    // Supertrend
    if(indicators.supertrend&&stv.length){stv.forEach((s,i)=>{if(s.trend==null)return;const col=s.trend===1?G:R,lineY=s.trend===1?py(s.lower):py(s.upper);if(i>0&&stv[i-1].trend!=null){const pY=stv[i-1].trend===1?py(stv[i-1].lower):py(stv[i-1].upper);ctx.beginPath();ctx.strokeStyle=hexToRgba(col,0.8);ctx.lineWidth=2;ctx.moveTo(cx(i-1),pY);ctx.lineTo(cx(i),lineY);ctx.stroke();}ctx.fillStyle=hexToRgba(col,0.15);ctx.beginPath();ctx.arc(cx(i),lineY,Math.max(2,cW*0.3),0,Math.PI*2);ctx.fill();});}
    // SL/TP
    const drawHRef=(price,col,label)=>{if(price==null)return;const y=py(price);ctx.strokeStyle=col;ctx.lineWidth=1.2;ctx.setLineDash([5,4]);ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(W-PAD.r,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=col;rrect(ctx,W-PAD.r+2,y-9,68,17,3);ctx.fill();ctx.fillStyle=label==='SL'?'#fff':'#000';ctx.textAlign='center';ctx.font='bold 9px monospace';ctx.fillText(`${label} ${fp(price)}`,W-PAD.r+36,y+4);};
    drawHRef(slPrice,R,'SL');drawHRef(tpPrice,G,'TP');
    // Candles
    vis.forEach((c,i)=>{const up=c.c>=c.o,col=up?G:R,wickX=cx(i),bTop=py(Math.max(c.o,c.c)),bBot=py(Math.min(c.o,c.c)),bH=Math.max(1,bBot-bTop);ctx.strokeStyle=col;ctx.lineWidth=Math.max(0.8,cW*0.09);ctx.beginPath();ctx.moveTo(wickX,py(c.h));ctx.lineTo(wickX,py(c.l));ctx.stroke();ctx.fillStyle=hexToRgba(col,0.35);ctx.strokeStyle=col;ctx.lineWidth=Math.max(0.6,cW*0.07);ctx.beginPath();ctx.rect(cx(i)-bodyW/2,bTop,bodyW,bH);ctx.fill();ctx.stroke();if(hoverRef.current?.idx===i){ctx.fillStyle=hexToRgba(C.dim,0.07);ctx.fillRect(cx(i)-cW/2,PAD.t,cW,priceH);}});
    // Volume
    const volTop=PAD.t+priceH+GAP;ctx.font='8px monospace';ctx.textAlign='left';ctx.fillStyle=C.muted;ctx.fillText('VOL',PAD.l+2,volTop+volH*0.5+4);
    vis.forEach((c,i)=>{const bH=Math.max(1,(c.v/vMax)*volH);ctx.fillStyle=hexToRgba(c.c>=c.o?G:R,0.28);ctx.strokeStyle=hexToRgba(c.c>=c.o?G:R,0.50);ctx.lineWidth=0.4;ctx.beginPath();ctx.rect(cx(i)-bodyW/2,volTop+volH-bH,bodyW,bH);ctx.fill();ctx.stroke();});
    // Last price
    const last=vis[vis.length-1];if(last){const y=py(last.c),up=last.c>=last.o;ctx.strokeStyle=hexToRgba(up?G:R,0.55);ctx.lineWidth=0.9;ctx.setLineDash([4,5]);ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(W-PAD.r,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=up?G:R;rrect(ctx,W-PAD.r+2,y-9,68,17,3);ctx.fill();ctx.fillStyle='#000';ctx.textAlign='center';ctx.font='bold 9px monospace';ctx.fillText(fp(last.c),W-PAD.r+36,y+4);}
    // Crosshair
    const h=hoverRef.current;if(h){ctx.strokeStyle=hexToRgba(C.dim,0.4);ctx.lineWidth=0.7;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(h.x,PAD.t);ctx.lineTo(h.x,subOn?subTop+SUB_H:H-PAD.b);ctx.stroke();ctx.beginPath();ctx.moveTo(PAD.l,h.y);ctx.lineTo(W-PAD.r,h.y);ctx.stroke();ctx.setLineDash([]);const price=pMin+(1-(h.y-PAD.t)/priceH)*(pMax-pMin);if(h.y>=PAD.t&&h.y<=PAD.t+priceH){ctx.fillStyle=C.dim;rrect(ctx,W-PAD.r+2,h.y-8,68,15,3);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='8px monospace';ctx.fillText(fp(price),W-PAD.r+36,h.y+4);}const d=new Date(vis[h.idx]?.t||0),tLabel=`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`,lx=Math.max(30,Math.min(W-50,h.x));ctx.fillStyle=C.dim;rrect(ctx,lx-22,H-PAD.b+2,44,14,3);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='8px monospace';ctx.fillText(tLabel,lx,H-PAD.b+12);}
    // RSI
    if(hasRSI&&rsiv.length){ctx.fillStyle=hexToRgba(C.bg0,1);ctx.fillRect(PAD.l,subTop,W-PAD.l-PAD.r,SUB_H);ctx.fillStyle=hexToRgba(R,0.06);ctx.fillRect(PAD.l,subTop,W-PAD.l-PAD.r,subY(70,0,100)-subTop);ctx.fillStyle=hexToRgba(G,0.06);ctx.fillRect(PAD.l,subY(30,0,100),W-PAD.l-PAD.r,subTop+SUB_H-subY(30,0,100));[70,50,30].forEach(v=>{const y=subY(v,0,100);ctx.strokeStyle=hexToRgba(v===50?C.muted:v===70?R:G,0.45);ctx.lineWidth=0.5;ctx.setLineDash(v===50?[3,4]:[]);ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(W-PAD.r,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=C.muted;ctx.textAlign='right';ctx.font='8px monospace';ctx.fillText(v,W-PAD.r+69,y+3);});const rsiPts=rsiv.map((v,i)=>v!=null?[cx(i),subY(v,0,100)]:null).filter(Boolean);if(rsiPts.length>1){ctx.beginPath();ctx.strokeStyle=C.purple;ctx.lineWidth=1.4;rsiPts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();}const lastRsi=rsiv.filter(v=>v!=null).at(-1);ctx.fillStyle=C.muted;ctx.textAlign='left';ctx.font='8px monospace';ctx.fillText('RSI(14)',PAD.l+2,subTop+10);if(lastRsi!=null){ctx.fillStyle=lastRsi>70?R:lastRsi<30?G:C.purple;ctx.font='bold 9px monospace';ctx.fillText(`${lastRsi.toFixed(1)}`,PAD.l+54,subTop+10);}}
    // MACD
    if(hasMacd&&macdv.length){ctx.fillStyle=hexToRgba(C.bg0,1);ctx.fillRect(PAD.l,subTop,W-PAD.l-PAD.r,SUB_H);const zeroY=subY(0,macdMin,macdMax);ctx.strokeStyle=hexToRgba(C.muted,0.5);ctx.lineWidth=0.6;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(PAD.l,zeroY);ctx.lineTo(W-PAD.r,zeroY);ctx.stroke();ctx.setLineDash([]);macdv.forEach((m,i)=>{if(m.histogram==null)return;const y0=zeroY,y1=subY(m.histogram,macdMin,macdMax),bH=Math.max(1,Math.abs(y0-y1));ctx.fillStyle=hexToRgba(m.histogram>=0?G:R,0.45);ctx.fillRect(cx(i)-bodyW/2,Math.min(y0,y1),bodyW,bH);});const mPts=macdv.map((m,i)=>m.macd!=null?[cx(i),subY(m.macd,macdMin,macdMax)]:null).filter(Boolean),sPts=macdv.map((m,i)=>m.signal!=null?[cx(i),subY(m.signal,macdMin,macdMax)]:null).filter(Boolean);[[mPts,B,1.1,[]],[sPts,R,1,[3,2]]].forEach(([pts,col,lw,dash])=>{if(pts.length<2)return;ctx.beginPath();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.setLineDash(dash);pts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();ctx.setLineDash([]);});ctx.fillStyle=C.muted;ctx.textAlign='left';ctx.font='8px monospace';ctx.fillText('MACD(12,26,9)',PAD.l+2,subTop+10);}
    // Stochastic
    if(hasStoch&&stochv.length){ctx.fillStyle=hexToRgba(C.bg0,1);ctx.fillRect(PAD.l,subTop,W-PAD.l-PAD.r,SUB_H);ctx.fillStyle=hexToRgba(R,0.06);ctx.fillRect(PAD.l,subTop,W-PAD.l-PAD.r,subY(80,0,100)-subTop);ctx.fillStyle=hexToRgba(G,0.06);ctx.fillRect(PAD.l,subY(20,0,100),W-PAD.l-PAD.r,subTop+SUB_H-subY(20,0,100));[80,50,20].forEach(v=>{const y=subY(v,0,100);ctx.strokeStyle=hexToRgba(v===50?C.muted:v===80?R:G,0.4);ctx.lineWidth=0.5;ctx.setLineDash(v===50?[3,4]:[]);ctx.beginPath();ctx.moveTo(PAD.l,y);ctx.lineTo(W-PAD.r,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=C.muted;ctx.textAlign='right';ctx.font='8px monospace';ctx.fillText(v,W-PAD.r+69,y+3);});const kPts=stochv.map((s,i)=>s.k!=null?[cx(i),subY(s.k,0,100)]:null).filter(Boolean),dPts=stochv.map((s,i)=>s.d!=null?[cx(i),subY(s.d,0,100)]:null).filter(Boolean);[[kPts,C.cyan,1.3,[]],[dPts,C.orange,1,[3,2]]].forEach(([pts,col,lw,dash])=>{if(pts.length<2)return;ctx.beginPath();ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.setLineDash(dash);pts.forEach(([x,y],j)=>j===0?ctx.moveTo(x,y):ctx.lineTo(x,y));ctx.stroke();ctx.setLineDash([]);});ctx.fillStyle=C.muted;ctx.textAlign='left';ctx.font='8px monospace';ctx.fillText('Stoch(14,3)',PAD.l+2,subTop+10);const lastK=stochv.filter(s=>s.k!=null).at(-1);if(lastK?.k!=null){ctx.fillStyle=lastK.k>80?R:lastK.k<20?G:C.cyan;ctx.font='bold 9px monospace';ctx.fillText(`K:${lastK.k.toFixed(0)}`,PAD.l+72,subTop+10);}}
  },[candles,slPrice,tpPrice,indicators,getVis]);
  drawRef.current=draw;
  useEffect(()=>{const ro=new ResizeObserver(()=>drawRef.current?.());if(containerRef.current)ro.observe(containerRef.current);return()=>ro.disconnect();},[]);
  useEffect(()=>{draw();},[draw]);
  useEffect(()=>{const el=canvasRef.current;if(!el)return;const handler=e=>{e.preventDefault();const f=e.deltaY>0?1.14:0.88,v=viewRef.current;v.barsVisible=Math.round(Math.max(15,Math.min(candles.length,v.barsVisible*f)));v.offset=Math.min(v.offset,Math.max(0,candles.length-v.barsVisible));redraw(n=>n+1);};el.addEventListener('wheel',handler,{passive:false});return()=>el.removeEventListener('wheel',handler);},[candles.length]);
  const onMouseDown=useCallback(e=>{dragRef.current={startX:e.clientX,startOff:viewRef.current.offset};},[]);
  const onMouseMove=useCallback(e=>{const container=containerRef.current;if(!container)return;const{vis}=getVis();const cW2=(container.clientWidth-PAD.l-PAD.r)/Math.max(1,vis.length);const rect=container.getBoundingClientRect();const mx=e.clientX-rect.left,my=e.clientY-rect.top,idx=Math.min(vis.length-1,Math.max(0,Math.floor((mx-PAD.l)/cW2)));if(dragRef.current){const db=Math.round((dragRef.current.startX-e.clientX)/cW2),v=viewRef.current;v.offset=Math.max(0,Math.min(candles.length-v.barsVisible,dragRef.current.startOff+db));hoverRef.current=null;redraw(n=>n+1);return;}hoverRef.current={idx,x:mx,y:my,candle:vis[idx]};setHover({idx,x:mx,y:my,candle:vis[idx]});draw();},[getVis,candles.length,draw]);
  const onMouseUp=useCallback(()=>{dragRef.current=null;},[]);
  const onMouseLeave=useCallback(()=>{dragRef.current=null;hoverRef.current=null;setHover(null);},[]);
  const touchRef=useRef(null);
  const onTouchStart=useCallback(e=>{if(e.touches.length===1)touchRef.current={startX:e.touches[0].clientX,startOff:viewRef.current.offset,pinchDist:null};else if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY;touchRef.current={...touchRef.current,pinchDist:Math.hypot(dx,dy),pinchBars:viewRef.current.barsVisible};}},[]);
  const onTouchMove=useCallback(e=>{e.preventDefault();const container=containerRef.current;if(!container||!touchRef.current)return;const{vis}=getVis();const cW2=(container.clientWidth-8-72)/Math.max(1,vis.length);if(e.touches.length===2&&touchRef.current.pinchDist!=null){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY,nd=Math.hypot(dx,dy),scale=touchRef.current.pinchDist/nd,v=viewRef.current;v.barsVisible=Math.round(Math.max(15,Math.min(candles.length,touchRef.current.pinchBars*scale)));v.offset=Math.min(v.offset,Math.max(0,candles.length-v.barsVisible));redraw(n=>n+1);}else if(e.touches.length===1&&touchRef.current.startX!=null){const db=Math.round((touchRef.current.startX-e.touches[0].clientX)/cW2),v=viewRef.current;v.offset=Math.max(0,Math.min(candles.length-v.barsVisible,touchRef.current.startOff+db));hoverRef.current=null;redraw(n=>n+1);}},[candles.length,getVis]);
  const onTouchEnd=useCallback(()=>{touchRef.current=null;},[]);
  const hC=hover?.candle;const{vis:visForRsi}=getVis();
  return(<div ref={containerRef} style={{flex:1,background:C.bg0,display:'flex',flexDirection:'column',overflow:'hidden',borderRadius:8}}>
    <div style={{display:'flex',gap:14,padding:'5px 12px',fontSize:11,fontFamily:'monospace',background:C.bg2,borderBottom:`1px solid ${C.border}`,alignItems:'center',flexShrink:0,flexWrap:'wrap'}}>
      {hC?<><span style={{color:C.dim}}>O <b style={{color:C.text}}>{fp(hC.o)}</b></span><span style={{color:C.dim}}>H <b style={{color:G}}>{fp(hC.h)}</b></span><span style={{color:C.dim}}>L <b style={{color:R}}>{fp(hC.l)}</b></span><span style={{color:C.dim}}>C <b style={{color:hC.c>=hC.o?G:R}}>{fp(hC.c)}</b></span><span style={{color:C.dim}}>V <b style={{color:C.text}}>{hC.v.toLocaleString()}</b></span><span style={{color:C.muted,marginLeft:'auto'}}>{new Date(hC.t).toLocaleTimeString()}</span></>:<span style={{color:C.muted}}>🖱 Scroll to zoom · Drag to pan · <b style={{color:C.dim}}>{visForRsi.length}</b> bars</span>}
      {slPrice!=null&&<span style={{fontSize:10,color:R}}>SL {fp(slPrice)}</span>}
      {tpPrice!=null&&<span style={{fontSize:10,color:G}}>TP {fp(tpPrice)}</span>}
    </div>
    <canvas ref={canvasRef} style={{display:'block',flex:1,cursor:'crosshair',touchAction:'none'}} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseLeave} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>
  </div>);
}

let _spkN=0;
function Spark({candles,color,h=32,w=80}){const idRef=useRef(`spk_${++_spkN}`);if(!candles||candles.length<2)return<div style={{width:w,height:h}}/>;const prices=candles.map(c=>c.c),mn=Math.min(...prices),mx=Math.max(...prices),r=mx-mn||1,id=idRef.current,pts=prices.map((p,i)=>`${(i/(prices.length-1))*w},${h-((p-mn)/r)*h}`).join(' ');return(<svg width={w} height={h} style={{overflow:'visible',display:'block'}}><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.3"/><stop offset="100%" stopColor={color} stopOpacity="0"/></linearGradient></defs><polygon points={`0,${h} ${pts} ${w},${h}`} fill={`url(#${id})`}/><polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);}

function DepthChart({bids,asks,mid}){const W=400,H=100;if(!bids.length||!asks.length)return null;const all=[...bids.map(b=>b.p),...asks.map(a=>a.p)],pMin=Math.min(...all),pMax=Math.max(...all),pr=pMax-pMin||1;const px=p=>Math.min(W-1,Math.max(0,((p-pMin)/pr)*(W-2)+1));let cv=0;const cumB=bids.slice().sort((a,b)=>b.p-a.p).map(b=>{cv+=b.s;return{p:b.p,v:cv};});cv=0;const cumA=asks.slice().sort((a,b)=>a.p-b.p).map(a=>{cv+=a.s;return{p:a.p,v:cv};});const mxV=Math.max(...cumB.map(b=>b.v),...cumA.map(a=>a.v),1),py=v=>H-4-(v/mxV)*(H-8);const bPath=cumB.length?'M'+cumB.map(b=>`${px(b.p)},${py(b.v)}`).join('L')+`L${px(cumB[cumB.length-1].p)},${H}L${px(pMin)},${H}Z`:'';const aPath=cumA.length?'M'+cumA.map(a=>`${px(a.p)},${py(a.v)}`).join('L')+`L${px(cumA[cumA.length-1].p)},${H}L${px(pMax)},${H}Z`:'';return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:H,display:'block'}}><rect width={W} height={H} fill={C.bg0}/>{bPath&&<path d={bPath} fill={G+'28'} stroke={G} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>);}

function Slider({min,max,value,onChange,color=B,label,fmt,step,markers}){const p=max>min?Math.max(0,Math.min(100,((value-min)/(max-min))*100)):0;return(<div style={{marginBottom:12}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}><span style={{fontSize:10,color:C.dim,textTransform:'uppercase',letterSpacing:'0.1em',fontWeight:600}}>{label}</span><span style={{fontSize:12,fontWeight:700,color,background:color+'18',padding:'1px 8px',borderRadius:3,fontFamily:'monospace'}}>{fmt?fmt(value):value}</span></div><input type="range" min={min} max={max} step={step||(max-min)/200} value={value} onChange={e=>onChange(parseFloat(e.target.value))} className="apex-slider" style={{'--tc':color,'--pct':p+'%'}}/>{markers&&<div style={{display:'flex',justifyContent:'space-between',marginTop:3}}>{markers.map((m,i)=><span key={i} style={{fontSize:9,color:Math.abs(value-m.val)<(max-min)*0.03?color:C.muted,cursor:'pointer'}} onClick={()=>onChange(m.val)}>{m.label}</span>)}</div>}</div>);}
function Toggle({on,onChange,color=G}){return(<div onClick={()=>onChange(!on)} style={{width:36,height:20,borderRadius:10,background:on?color:C.muted,cursor:'pointer',position:'relative',transition:'background 0.2s',flexShrink:0}}><div style={{position:'absolute',top:3,left:on?17:3,width:14,height:14,borderRadius:'50%',background:'#fff',transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.4)'}}/></div>);}
function DashScrollBar({scrollEl}){const[p,setP]=useState(0);useEffect(()=>{const el=scrollEl;if(!el)return;const f=()=>{const max=el.scrollHeight-el.clientHeight;setP(max>0?Math.min(100,(el.scrollTop/max)*100):0);};el.addEventListener('scroll',f,{passive:true});return()=>el.removeEventListener('scroll',f);},[scrollEl]);return(<div style={{height:'100%',width:p+'%',background:B,borderRadius:2,transition:'width 0.1s',minWidth:p>0?8:0}}/>);}

function OrderConfirmModal({order,onConfirm,onCancel}){
  const[pinInput,setPinInput]=useState('');const[pinError,setPinError]=useState('');
  const isLarge=order.estimatedValue>100000;
  const handleConfirm=()=>{if(isLarge){if(simpleHash(pinInput)!==DEMO_PIN_HASH){setPinError('Incorrect PIN. Demo PIN: 1234');return;}}onConfirm();};
  return(<div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:10000,display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(4px)',padding:'16px'}}><div style={{background:C.bg3,border:`1px solid ${C.b2}`,borderRadius:12,padding:24,width:'100%',maxWidth:380,boxShadow:`0 20px 60px rgba(0,0,0,0.7)`,maxHeight:'90vh',overflow:'auto'}}><div style={{fontSize:14,fontWeight:800,marginBottom:4,color:order.side==='buy'?G:R}}>{order.side==='buy'?'▲ CONFIRM BUY':'▼ CONFIRM SELL'}</div><div style={{fontSize:11,color:C.muted,marginBottom:20}}>Review carefully before submitting</div>{[{l:'Symbol',v:order.assetId,c:C.text},{l:'Side',v:order.side.toUpperCase(),c:order.side==='buy'?G:R},{l:'Type',v:order.kind.toUpperCase(),c:C.dim},{l:'Qty',v:parseFloat(order.qty).toFixed(4),c:C.text},{l:'Price',v:fp(order.price),c:C.text},{l:'Est. Value',v:inr(order.estimatedValue),c:order.side==='buy'?R:G},...(order.sl?[{l:'Stop Loss',v:fp(order.sl),c:R}]:[]),...(order.tp?[{l:'Take Profit',v:fp(order.tp),c:G}]:[]),...(order.leverage>1?[{l:'Leverage',v:`${order.leverage}x`,c:C.purple}]:[])].map(({l,v,c},i)=>(<div key={i} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',borderBottom:`1px solid ${C.border}`}}><span style={{fontSize:11,color:C.muted}}>{l}</span><span style={{fontSize:11,fontWeight:700,color:c}}>{v}</span></div>))}{isLarge&&(<div style={{marginTop:16}}><div style={{fontSize:10,color:A,marginBottom:8,padding:'6px 10px',background:A+'12',borderRadius:5}}>🔐 Large order — enter trading PIN (demo: 1234)</div><input style={{background:C.bg0,border:`1px solid ${pinError?R:C.b2}`,borderRadius:5,color:C.text,padding:'8px 11px',fontSize:14,fontFamily:'monospace',width:'100%',outline:'none',boxSizing:'border-box',letterSpacing:'0.3em',textAlign:'center'}} type="password" maxLength={6} placeholder="• • • •" value={pinInput} onChange={e=>{setPinInput(e.target.value);setPinError('');}} onKeyDown={e=>e.key==='Enter'&&handleConfirm()} autoFocus/>{pinError&&<div style={{fontSize:10,color:R,marginTop:4}}>{pinError}</div>}</div>)}<div style={{display:'flex',gap:10,marginTop:20}}><button style={{flex:1,padding:'10px',background:'transparent',border:`1px solid ${C.border}`,borderRadius:6,color:C.dim,cursor:'pointer',fontFamily:'inherit',fontWeight:700,fontSize:12}} onClick={onCancel}>Cancel</button><button style={{flex:2,padding:'10px',background:order.side==='buy'?G+'22':R+'22',border:`1px solid ${order.side==='buy'?G:R}44`,borderRadius:6,color:order.side==='buy'?G:R,cursor:'pointer',fontFamily:'inherit',fontWeight:800,fontSize:13}} onClick={handleConfirm}>{order.side==='buy'?'▲ CONFIRM BUY':'▼ CONFIRM SELL'}</button></div></div></div>);
}

// ── LOGIN ────────────────────────────────────────────────────────────────────
function LoginScreen({onLogin}){
  const[mode,setMode]=useState('login');const[form,setForm]=useState({name:'',email:'',password:'',confirm:''});const[err,setErr]=useState('');const[loading,setLoading]=useState(false);const[attempts,setAttempts]=useState(0);const[locked,setLocked]=useState(false);const lockTimer=useRef(null);
  useEffect(()=>()=>{if(lockTimer.current)clearTimeout(lockTimer.current);},[]);
  const upd=(k,v)=>setForm(f=>({...f,[k]:sanitize(v)}));
  const doLogin=async()=>{if(locked){setErr('Locked 30s. Too many attempts.');return;}if(!form.email.includes('@')||form.password.length<4){setErr('Valid email and password (min 4 chars)');return;}setLoading(true);await new Promise(r=>setTimeout(r,800));if(form.email==='demo@apex.com'&&form.password==='demo'){const u={name:'Demo Trader',email:form.email,token:genUUID()};SecureSession.set('apex_user',u);onLogin(u);}else{const na=attempts+1;setAttempts(na);if(na>=3){setLocked(true);lockTimer.current=setTimeout(()=>{setLocked(false);setAttempts(0);},30000);setErr('Too many attempts. Locked 30s.');}else setErr(`Invalid credentials. ${3-na} attempt(s) left. Demo: demo@apex.com / demo`);}setLoading(false);};
  const doSignup=async()=>{if(!form.name||form.name.length<2){setErr('Name required');return;}if(!form.email.includes('@')){setErr('Valid email required');return;}if(form.password.length<6){setErr('Password min 6 chars');return;}if(form.password!==form.confirm){setErr('Passwords do not match');return;}setLoading(true);await new Promise(r=>setTimeout(r,800));const u={name:sanitize(form.name),email:sanitize(form.email),token:genUUID()};SecureSession.set('apex_user',u);onLogin(u);};
  return(<div style={{minHeight:'100vh',background:C.bg0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'"IBM Plex Mono",monospace',padding:16}}>
    <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}} input:focus{border-color:${B}!important;outline:none;} .apex-slider{-webkit-appearance:none;width:100%;height:3px;border-radius:2px;background:linear-gradient(to right,var(--tc) var(--pct),${C.b2} var(--pct));outline:none;} .apex-slider::-webkit-slider-thumb{-webkit-appearance:none;width:13px;height:13px;border-radius:50%;background:var(--tc);cursor:pointer;} .apex-slider::-moz-range-thumb{width:13px;height:13px;border-radius:50%;background:var(--tc);cursor:pointer;border:none;} ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-thumb{background:${C.b2};border-radius:2px;} .apex-content-scroll::-webkit-scrollbar{width:4px;}.apex-content-scroll::-webkit-scrollbar-thumb{background:${C.b2};border-radius:2px;}`}</style>
    <div style={{background:C.bg2,border:`1px solid ${C.b2}`,borderRadius:12,padding:32,width:'100%',maxWidth:420,boxShadow:`0 24px 80px rgba(0,0,0,0.8)`}}>
      <div style={{textAlign:'center',marginBottom:28}}>
        <div style={{fontSize:28,fontWeight:900,background:`linear-gradient(135deg,${B},${C.cyan})`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:6}}>⬛ APEX TRADER PRO</div>
        <div style={{fontSize:10,color:C.muted,letterSpacing:'0.15em'}}>INDIA · US · CRYPTO · MTF · IPO · MF</div>
      </div>
      <div style={{display:'flex',marginBottom:20,borderRadius:6,overflow:'hidden',border:`1px solid ${C.border}`}}>{['login','signup'].map(m=><button key={m} onClick={()=>{setMode(m);setErr('');}} style={{flex:1,padding:'9px',border:'none',cursor:'pointer',fontWeight:700,fontSize:12,fontFamily:'inherit',background:mode===m?B+'22':C.bg0,color:mode===m?C.cyan:C.muted}}>{m==='login'?'SIGN IN':'CREATE ACCOUNT'}</button>)}</div>
      {mode==='signup'&&<div style={{marginBottom:10}}><div style={{fontSize:9,color:C.dim,marginBottom:4,textTransform:'uppercase',letterSpacing:'0.1em'}}>Full Name</div><input style={{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:5,color:C.text,padding:'9px 11px',fontSize:12,fontFamily:'inherit',width:'100%',boxSizing:'border-box'}} placeholder="Your Name" value={form.name} onChange={e=>upd('name',e.target.value)}/></div>}
      <div style={{marginBottom:10}}><div style={{fontSize:9,color:C.dim,marginBottom:4,textTransform:'uppercase',letterSpacing:'0.1em'}}>Email</div><input style={{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:5,color:C.text,padding:'9px 11px',fontSize:12,fontFamily:'inherit',width:'100%',boxSizing:'border-box'}} type="email" placeholder="you@example.com" value={form.email} onChange={e=>upd('email',e.target.value)} onKeyDown={e=>e.key==='Enter'&&(mode==='login'?doLogin():doSignup())}/></div>
      <div style={{marginBottom:mode==='signup'?10:20}}><div style={{fontSize:9,color:C.dim,marginBottom:4,textTransform:'uppercase',letterSpacing:'0.1em'}}>Password</div><input style={{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:5,color:C.text,padding:'9px 11px',fontSize:12,fontFamily:'inherit',width:'100%',boxSizing:'border-box'}} type="password" placeholder={mode==='login'?'••••••••':'Min 6 chars'} value={form.password} onChange={e=>upd('password',e.target.value)} onKeyDown={e=>e.key==='Enter'&&(mode==='login'?doLogin():doSignup())}/></div>
      {mode==='signup'&&<div style={{marginBottom:20}}><div style={{fontSize:9,color:C.dim,marginBottom:4,textTransform:'uppercase',letterSpacing:'0.1em'}}>Confirm Password</div><input style={{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:5,color:C.text,padding:'9px 11px',fontSize:12,fontFamily:'inherit',width:'100%',boxSizing:'border-box'}} type="password" placeholder="Repeat password" value={form.confirm} onChange={e=>upd('confirm',e.target.value)} onKeyDown={e=>e.key==='Enter'&&doSignup()}/></div>}
      {err&&<div style={{padding:'8px 12px',background:R+'12',border:`1px solid ${R}30`,borderRadius:5,fontSize:11,color:R,marginBottom:14}}>{err}</div>}
      <button disabled={loading||locked} onClick={mode==='login'?doLogin:doSignup} style={{width:'100%',padding:'12px',background:loading?C.bg3:`linear-gradient(135deg,${B},${C.cyan})`,border:'none',borderRadius:6,color:'#000',fontSize:13,fontWeight:800,cursor:loading?'not-allowed':'pointer',fontFamily:'inherit'}}>{loading?'Authenticating…':mode==='login'?'SIGN IN →':'CREATE ACCOUNT →'}</button>
      <div style={{marginTop:16,padding:'10px',background:B+'0a',border:`1px solid ${B}20`,borderRadius:6,fontSize:10,color:C.dim,textAlign:'center'}}>Demo: <span style={{color:C.cyan}}>demo@apex.com</span> / <span style={{color:C.cyan}}>demo</span></div>
    </div>
  </div>);
}

// ── STYLES ────────────────────────────────────────────────────────────────────
// ── INLINE JSX HELPERS (must be top-level, not IIFEs inside JSX) ─────────────
function RRAnalysis({sl,tp,qty,entry}){
  const risk=Math.abs(entry-sl)*qty,reward=Math.abs(tp-entry)*qty,rr=risk>0?reward/risk:0;
  const col=rr>=2?G:rr>=1?A:R;
  return(<div style={{background:C.bg0,border:`1px solid ${col}30`,borderRadius:5,padding:'8px 10px',marginBottom:10}}>
    <div style={{fontSize:9,color:C.dim,fontWeight:700,marginBottom:4}}>📐 RISK/REWARD ANALYSIS</div>
    <div style={{display:'flex',justifyContent:'space-between',marginBottom:2}}><span style={{fontSize:10,color:C.muted}}>Risk</span><span style={{fontSize:10,color:R,fontWeight:700}}>{inr(risk)}</span></div>
    <div style={{display:'flex',justifyContent:'space-between',marginBottom:2}}><span style={{fontSize:10,color:C.muted}}>Reward</span><span style={{fontSize:10,color:G,fontWeight:700}}>{inr(reward)}</span></div>
    <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:10,color:C.muted}}>R:R Ratio</span><span style={{fontSize:12,fontWeight:800,color:col}}>1:{rr.toFixed(1)}</span></div>
  </div>);
}
function OBRatioBar({bids,asks}){
  const tb=bids.reduce((s,b)=>s+b.s,0),ta=asks.reduce((s,a)=>s+a.s,0),tot=tb+ta,bp=tot?Math.round(tb/tot*100):50;
  return(<div style={{marginTop:8}}>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:9,marginBottom:3}}><span style={{color:G}}>B {bp}%</span><span style={{color:R}}>S {100-bp}%</span></div>
    <div style={{display:'flex',height:3,borderRadius:2,overflow:'hidden'}}><div style={{flex:tb,background:G,opacity:0.7}}/><div style={{flex:ta,background:R,opacity:0.7}}/></div>
  </div>);
}

// ── SIDEBAR COMPONENT (must be top-level, not nested inside ApexTrader) ──────
function SidebarContent({collapsed,isMobile,setSidebarCollapsed,user,portColor,totalVal,NAV,tab,setTab,setSidebarOpen,setUser}){
  return(
    <div style={{display:'flex',flexDirection:'column',height:'100% }}>
      <div style={{padding:collapsed?'14px 0':'14px',borderBottom:`1px solid ${C.border}`,flexShrink:0,display:'flex',alignItems:'center',gap:10,justifyContent:collapsed?'center':'flex-start'}}>
        {!collapsed&&<div style={{flex:1}}><div style={{fontSize:14,fontWeight:900,background:`linear-gradient(135deg,${B},${C.cyan})`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>⬛ APEX</div><div style={{fontSize:8,color:C.muted,letterSpacing:'0.1em'}}>TRADER PRO</div></div>}
        {!isMobile&&<button onClick={()=>setSidebarCollapsed(p=>!p)} style={{background:'transparent',border:'none',cursor:'pointer',color:C.muted,fontSize:16,padding:4,flexShrink:0}}>☰</button>}
      </div>
      {!collapsed&&user&&<div style={{padding:'8px 14px',borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
        <div style={{fontSize:10,fontWeight:700,color:C.text}}>{user.name}</div>
        <div style={{fontSize:9,color:C.muted}}>{user.email}</div>
        <div style={{fontSize:9,color:portColor,marginTop:2}}>{inr(totalVal)} total</div>
      </div>}
      <div style={{flex:1,overflow:'auto'}}>
        {NAV.map(n=>(
          <button key={n.id} style={S.nav(tab===n.id,collapsed)} onClick={()=>{setTab(n.id);if(isMobile)setSidebarOpen(false);}}>
            <span style={{fontSize:collapsed?18:15,flexShrink:0,filter:tab===n.id?`drop-shadow(0 0 6px ${B})`:'none'}}>{n.emoji}</span>
            {!collapsed&&<><span style={{flex:1,fontSize:11}}>{n.label}</span>{n.badge&&<span style={{width:7,height:7,borderRadius:'50%',background:R,flexShrink:0}}/>}</>}
            {collapsed&&n.badge&&<span style={{position:'absolute',top:6,right:6,width:6,height:6,borderRadius:'50%',background:R}}/>}
          </button>
        ))}
      </div>
      <div style={{borderTop:`1px solid ${C.border}`,padding:collapsed?'8px 0':'8px 14px',flexShrink:0}}>
        <button onClick={()=>{SecureSession.clear();setUser(null);}} style={{...S.btn('danger',true),width:'100%',justifyContent:collapsed?'center':'flex-start',padding:collapsed?'8px 0':'6px 10px',fontSize:10}}>{collapsed?'⏻':'⏻ Logout'}</button>
      </div>
    </div>
  );
}

const S={
  sidebar:(w)=>({width:w,minWidth:w,background:C.bg2,borderRight:`1px solid ${C.border}`,display:'flex',flexDirection:'column',flexShrink:0,transition:'width 0.22s cubic-bezier(.4,0,.2,1),min-width 0.22s',overflow:'hidden',zIndex:100}),
  drawerOverlay:(open)=>({position:'fixed',inset:0,zIndex:500,display:open?'flex':'none'}),
  drawerPanel:(open)=>({width:260,height:'100%',background:C.bg2,borderRight:`1px solid ${C.border}`,display:'flex',flexDirection:'column',transform:open?'translateX(0)':'translateX(-100%)',transition:'transform 0.25s cubic-bezier(.4,0,.2,1)',boxShadow:open?`8px 0 40px rgba(0,0,0,0.7)`:'none'}),
  main:{flex:1,display:'flex',flexDirection:'column',overflow:'hidden',minWidth:0},
  topbar:{height:48,background:C.bg2,borderBottom:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 12px',flexShrink:0,gap:8},
  content:{flex:1,overflow:'auto',padding:14,scrollbarWidth:'thin',scrollbarColor:`${C.b2} ${C.bg1}`},
  card:{background:C.bg3,border:`1px solid ${C.border}`,borderRadius:8,padding:14},
  card2:{background:C.bg4,border:`1px solid ${C.b2}`,borderRadius:8,padding:12},
  lbl:{fontSize:9,color:C.dim,textTransform:'uppercase',letterSpacing:'0.13em',fontWeight:700,marginBottom:4},
  inp:{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:5,color:C.text,padding:'8px 11px',fontSize:12,fontFamily:'inherit',width:'100%',outline:'none',boxSizing:'border-box',transition:'border-color 0.2s'},
  table:{width:'100%',borderCollapse:'collapse'},
  th:{textAlign:'left',fontSize:9,color:C.muted,letterSpacing:'0.1em',textTransform:'uppercase',padding:'6px 8px',borderBottom:`1px solid ${C.border}`,fontWeight:700,whiteSpace:'nowrap'},
  td:{padding:'7px 8px',borderBottom:`1px solid ${C.bg0}`,verticalAlign:'middle'},
  tag:t=>({display:'inline-block',padding:'2px 7px',borderRadius:3,fontSize:9,fontWeight:700,textTransform:'uppercase',background:t==='stock'?'#1a2348':t==='crypto'?'#1a1a3a':t==='index'?'#0a2a18':t==='commodity'?'#2a1808':t==='forex'?'#1a2a1a':'#1a1a28',color:t==='stock'?'#4a80f5':t==='crypto'?C.cyan:t==='index'?C.teal:t==='commodity'?A:t==='forex'?C.purple:C.muted}),
  chip:v=>({display:'inline-flex',alignItems:'center',gap:2,fontWeight:700,color:cc(v)}),
  btn:(v='ghost',sm=false)=>{const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:4,padding:sm?'4px 10px':'7px 14px',borderRadius:5,border:'none',cursor:'pointer',fontSize:sm?10:12,fontWeight:700,fontFamily:'inherit',letterSpacing:'0.04em',transition:'opacity 0.15s'};if(v==='buy')return{...base,background:G+'22',color:G,border:`1px solid ${G}44`};if(v==='sell')return{...base,background:R+'22',color:R,border:`1px solid ${R}44`};if(v==='primary')return{...base,background:`linear-gradient(135deg,${B},${C.cyan})`,color:'#000'};if(v==='danger')return{...base,background:R+'18',color:R,border:`1px solid ${R}30`};if(v==='amber')return{...base,background:A+'18',color:A,border:`1px solid ${A}40`};if(v==='success')return{...base,background:G+'18',color:G,border:`1px solid ${G}40`};if(v==='purple')return{...base,background:C.purple+'18',color:C.purple,border:`1px solid ${C.purple}40`};return{...base,background:'transparent',color:C.dim,border:`1px solid ${C.border}`};},
  nav:(a,collapsed)=>({display:'flex',alignItems:'center',gap:collapsed?0:10,padding:collapsed?'11px 0':'10px 14px',justifyContent:collapsed?'center':'flex-start',cursor:'pointer',fontSize:11,fontWeight:a?700:400,color:a?C.text:C.dim,background:a?`${B}18`:'transparent',borderLeft:collapsed?'none':(a?`3px solid ${B}`:'3px solid transparent'),borderBottom:'none',transition:'all 0.15s',userSelect:'none',position:'relative',flexShrink:0}),
};
// ── MAIN APP ─────────────────────────────────────────────────────────────────
export default function ApexTrader(){
  const[user,setUser]=useState(()=>SecureSession.get('apex_user'));
  const[isMobile,setIsMobile]=useState(()=>typeof window!=='undefined'&&window.innerWidth<768);
  const[sidebarCollapsed,setSidebarCollapsed]=useState(()=>typeof window!=='undefined'&&window.innerWidth>=768&&window.innerWidth<1100);
  const[sidebarOpen,setSidebarOpen]=useState(false);
  const[assets,setAssets]=useState(()=>ASSETS_INIT.map(a=>({...a,change:(a.price-a.prev)/a.prev*100})));
  const[candles,setCandles]=useState(()=>Object.fromEntries(ASSETS_INIT.map(a=>[a.id,genCandles(a.price)])));
  const[portfolio,setPortfolio]=useState(PORT_INIT);
  const[balance,setBalance]=useState(BALANCE_INIT);
  const[orders,setOrders]=useState([]);
  const[pending,setPending]=useState([]);
  const[gttOrders,setGttOrders]=useState([]);
  const[tab,setTab]=useState('dashboard');
  const[selId,setSelId]=useState('NIFTY50');
  const[tf,setTf]=useState('5m');
  const[search,setSearch]=useState('');
  const[debouncedSearch,setDebouncedSearch]=useState('');
  useEffect(()=>{const t=setTimeout(()=>setDebouncedSearch(search),180);return()=>clearTimeout(t);},[search]);
  const[fType,setFType]=useState('all');
  const[marketSubTab,setMarketSubTab]=useState('instruments');
  const[toast,setToast]=useState(null);
  const[obBook,setOBBook]=useState({bids:[],asks:[]});
  const[portHist,setPortHist]=useState([]);
  const[aiChat,setAiChat]=useState(AI_INIT);
  const[aiInput,setAiInput]=useState('');
  const[aiLoading,setAiLoading]=useState(false);
  const[oForm,setOForm]=useState({side:'buy',kind:'market',qty:'',qtyVal:'',limitPrice:'',sl:'',tp:'',leverage:1,slOn:false,tpOn:false,trailSL:false,trailPct:'2',atrSL:false});
  const[confirmOrder,setConfirmOrder]=useState(null);
  const[indicators,setIndicators]=useState({ema9:false,ema21:true,bb:false,vwap:false,rsi:false,macd:false,supertrend:false,stoch:false,atr:false});
  const[alerts,setAlerts]=useState([{id:1,symbol:'NIFTY50',type:'above',price:22500,triggered:false,note:'Resistance breakout'},{id:2,symbol:'BTC/USD',type:'below',price:65000,triggered:false,note:'Key support'}]);
  const[alertForm,setAlertForm]=useState({symbol:'',type:'above',price:'',note:''});
  const[journal,setJournal]=useState([{id:1,date:'2025-01-10',symbol:'RELIANCE',side:'buy',qty:5,entry:2780,exit:2847,pnl:335,emotion:'confident',setup:'Breakout',notes:'Clear resistance break on volume'},{id:2,date:'2025-01-08',symbol:'TCS',side:'sell',qty:3,entry:3510,exit:3420,pnl:-270,emotion:'fearful',setup:'SL hit',notes:'Should have waited for confirmation'}]);
  const[journalForm,setJournalForm]=useState({symbol:'',side:'buy',qty:'',entry:'',exit:'',pnl:'',emotion:'calm',setup:'',notes:''});
  const[notifications,setNotifications]=useState([{id:1,type:'alert',msg:'NIFTY50 touched 22,150 resistance',time:Date.now()-180000,read:false},{id:2,type:'filled',msg:'BUY 0.1 BTC/USD @ 67420 — FILLED',time:Date.now()-3600000,read:false},{id:3,type:'system',msg:'Market opens in 2 hours',time:Date.now()-7200000,read:true}]);
  const[showNotifs,setShowNotifs]=useState(false);
  const[chartFullscreen,setChartFullscreen]=useState(false);
  const[sessionExpiry,setSessionExpiry]=useState(null);
  const inactiveTimerRef=useRef(null);
  const[riskCalc,setRiskCalc]=useState({entry:'',sl:'',target:'',capital:'100000',riskPct:'2'});
  const[gForm,setGForm]=useState({symbol:'NIFTY50',side:'buy',qty:'',trigger:'',triggerType:'above',limitPrice:'',sl:'',tp:''});
  // NEW STATE
  const[dualLeft,setDualLeft]=useState('NIFTY50');
  const[dualRight,setDualRight]=useState('BANKNIFTY');
  const[mtfPositions,setMtfPositions]=useState([]);
  const[mtfForm,setMtfForm]=useState({symbol:'RELIANCE',side:'buy',qty:'',leverage:2});
  const[watchlist,setWatchlist]=useState(['NIFTY50','BANKNIFTY','RELIANCE','TCS','HDFCBANK','BTC/USD','AAPL','NVDA']);
  const[scannerMode,setScannerMode]=useState('gainers');
  const[oiExpiry,setOiExpiry]=useState('weekly');
  const[oneTapActive,setOneTapActive]=useState(false);
  const[desktopCustomMode,setDesktopCustomMode]=useState(false);
  const[mobileSwipeTab,setMobileSwipeTab]=useState(0);
  const[mobileTab,setMobileTab]=useState('quote');
  const[mfInvestModal,setMfInvestModal]=useState(null);
  const[ipoFilter,setIpoFilter]=useState('all');
  const[showHotkeys,setShowHotkeys]=useState(false);
  const[customLayout,setCustomLayout]=useState({showOB:true,showScanner:true,showWL:true,showOI:true});

  const assetsRef=useRef(assets),balanceRef=useRef(balance),portfolioRef=useRef(portfolio),execFillRef=useRef(null),contentRef=useRef(null),toastTimer=useRef(null),chatEndRef=useRef(null),lastActivity=useRef(Date.now());
  const MAX_ORDERS=500;
  const setOrdersCapped=useCallback((updater)=>{setOrders(prev=>{const next=typeof updater==='function'?updater(prev):updater;return next.length>MAX_ORDERS?next.slice(0,MAX_ORDERS):next;});},[]);
  useEffect(()=>()=>{if(toastTimer.current)clearTimeout(toastTimer.current);},[]);
  useEffect(()=>{const f=()=>{const w=window.innerWidth,m=w<768;setIsMobile(m);if(!m)setSidebarOpen(false);setSidebarCollapsed(w>=768&&w<1100);};window.addEventListener('resize',f,{passive:true});return()=>window.removeEventListener('resize',f);},[]);
  assetsRef.current=assets;balanceRef.current=balance;portfolioRef.current=portfolio;

  const selAsset=useMemo(()=>assets.find(a=>a.id===selId),[assets,selId]);
  const holding=useMemo(()=>portfolio.find(h=>h.id===selId),[portfolio,selId]);
  const portVal=useMemo(()=>portfolio.reduce((s,h)=>{const a=assets.find(x=>x.id===h.id);return s+(a?a.price*h.qty:0);},0),[portfolio,assets]);
  const totalVal=balance+portVal;
  const costBasis=useMemo(()=>portfolio.reduce((s,h)=>s+h.avg*h qty,0),[portfolio]);
  const totalPnl=portVal-costBasis;
  const totalPct=costBasis>0?totalPnl/costBasis*100:0;
  const holdPnl=holding&&selAsset?(selAsset.price-holding.avg)*holding qty:0;
  const holdPct=holding&&selAsset?(selAsset.price-holding.avg)/holding.avg*100:0;
  const unreadNotifs=notifications.filter(n=>!n.read).length;
  const activeAlerts=alerts.filter(a=>!a.triggered).length;

  const initDone=useRef(false);
  useEffect(()=>{if(initDone.current)return;initDone.current=true;setPortHist(genPortHistory(BALANCE_INIT+PORT_INIT.reduce((s,h)=>{const a=ASSETS_INIT.find(x=>x.id===h.id);return s+(a?a.price*h qty:0);},0)));},[]);
  useEffect(()=>{if(chatEndRef.current)chatEndRef.current.scrollIntoView({behavior:'smooth'});},[aiChat,aiLoading]);

  useEffect(()=>{
    if(!user)return;
    const SESSION_TIMEOUT=30*60*1000;
    const resetTimer=()=>{lastActivity.current=Date.now();setSessionExpiry(Date.now()+SESSION_TIMEOUT);if(inactiveTimerRef.current)clearTimeout(inactiveTimerRef.current);inactiveTimerRef.current=setTimeout(()=>{showToast('Session expired','warning');setTimeout(()=>{SecureSession.clear();setUser(null);},2000);},SESSION_TIMEOUT);};
    const evts=['mousedown','keydown','touchstart','scroll'];evts.forEach(e=>window.addEventListener(e,resetTimer,{passive:true}));resetTimer();
    return()=>{evts.forEach(e=>window.removeEventListener(e,resetTimer));if(inactiveTimerRef.current)clearTimeout(inactiveTimerRef.current);};
  },[user]); // eslint-disable-line

  useEffect(()=>{
    const handle=e=>{
      if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
      const map={'1':'dashboard','2':'chart','3':'markets','4':'portfolio','5':'orders','6':'analytics','7':'dualchart','8':'mtf','9':'desktop','d':'desktop','h':null};
      if(map[e.key]!==undefined&&map[e.key]!==null)setTab(map[e.key]);
      if(e.key==='h'&&!e.ctrlKey)setShowHotkeys(p=>!p);
      if(e.key==='b'&&!e.ctrlKey){setOForm(f=>({...f,side:'buy'}));setTab('chart');}
      if(e.key==='s'&&!e.ctrlKey){setOForm(f=>({...f,side:'sell'}));setTab('chart');}
      if(e.key==='l'&&!e.ctrlKey)setOForm(f=>({...f,kind:'limit'}));
      if(e.key==='m'&&!e.ctrlKey)setOForm(f=>({...f,kind:'market'}));
      if(e.key==='Escape'){setConfirmOrder(null);setShowNotifs(false);setChartFullscreen(false);setSidebarOpen(false);setShowHotkeys(false);}
    };
    window.addEventListener('keydown',handle);return()=>window.removeEventListener('keydown',handle);
  },[]);

  const showToast=useCallback((msg,type='success')=>{setToast({msg,type});if(toastTimer.current)clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(null),3200);},[]);
  const checkAlerts=useCallback(()=>{const cur=assetsRef.current;setAlerts(prev=>prev.map(alert=>{if(alert.triggered)return alert;const a=cur.find(x=>x.id===alert.symbol);if(!a)return alert;const triggered=(alert.type==='above'&&a.price>=alert.price)||(alert.type==='below'&&a.price<=alert.price);if(triggered){const msg=`🔔 Alert: ${sanitize(alert.symbol)} ${alert.type==='above'?'▲ above':'▼ below'} ${fp(alert.price)}`;showToast(msg,'warning');setNotifications(prev=>[{id:Date.now(),type:'alert',msg:sanitize(msg),time:Date.now(),read:false},...prev]);return{...alert,triggered:true};}return alert;}));},[showToast]);
  const checkGTT=useCallback(()=>{const cur=assetsRef.current;setGttOrders(prev=>{const toFill=[];const rem=prev.filter(g=>{const a=cur.find(x=>x.id===g.assetId);if(!a)return true;if(g.status==='active'){const hit=(g.triggerType==='above'&&a.price>=g.trigger)||(g.triggerType==='below'&&a.price<=g.trigger);if(hit){toFill.push({...g,ep:g.limitPrice||a.price});return false;}}return true;});toFill.forEach(g=>{execFillRef.current?.({side:g.side,kind:'gtt',qty:g.qty,assetId:g.assetId,leverage:1,sl:g.sl,tp:g.tp,avg:g.side==='sell'?(portfolioRef.current.find(h=>h.id===g.assetId)?.avg||0):0},g.ep,true);showToast(`🎯 GTT: ${g.side.toUpperCase()} ${g.qty} ${g.assetId} @ ${fp(g.ep)}`,'success');});return rem;});},[showToast]);
  const processSLTP=useCallback(()=>{const cur=assetsRef.current,port=portfolioRef.current;const triggered=[],remaining=[];for(const h of port){const a=cur.find(x=>x.id===h.id);if(!a){remaining.push(h);continue;}if(h.sl!=null&&a.price<=h.sl)triggered.push({type:'sl',h,a});else if(h.tp!=null&&a.price>=h.tp)triggered.push({type:'tp',h,a});else remaining.push(h);}if(!triggered.length)return;let balDelta=0;const newOrders=[];for(const{type,h,a}of triggered){balDelta+=a.price*h qty;newOrders.push({id:genUUID(),assetId:h.id,side:'sell',kind:type==='sl'?'stop-loss':'take-profit',qty:h qty,ep:a.price,avg:h.avg,pnl:(a.price-h.avg)*h qty,time:Date.now(),status:'filled'});showToast(type==='sl'?`⚡ SL: ${h.id} @ ${fp(a.price)}`:`🎯 TP: ${h.id} @ ${fp(a.price)}`,type==='sl'?'warning':'success');}setBalance(b=>b+balDelta);setOrdersCapped(o=>[...newOrders,...o]);setPortfolio(remaining);},[showToast,setOrdersCapped]);
  const processPendingOrders=useCallback(()=>{const cur=assetsRef.current;setPending(prev=>{const fill=[];const rem=prev.filter(o=>{const a=cur.find(x=>x.id===o.assetId);if(!a)return true;if(o.kind==='limit'&&o.side==='buy'&&a.price<=o.limitPrice){fill.push({...o,ep:a.price});return false;}if(o.kind==='limit'&&o.side==='sell'&&a.price>=o.limitPrice){fill.push({...o,ep:a.price});return false;}if(o.kind==='stop'&&o.side==='buy'&&a.price>=o.limitPrice){fill.push({...o,ep:a.price});return false;}if(o.kind==='stop'&&o.side==='sell'&&a.price<=o.limitPrice){fill.push({...o,ep:a.price});return false;}return true;});if(fill.length)setTimeout(()=>fill.forEach(o=>execFillRef.current?.(o,o.ep,true)),0);return rem;});},[]);
  const execFill=useCallback((o,ep,auto=false)=>{const qty=parseFloat(o.qty);if(!qty||qty<=0||!isFinite(qty))return;const cost=qty*ep,avgBuy=o.avg??(portfolioRef.current.find(h=>h.id===o.assetId)?.avg??ep),pnl=o.side==='sell'?(ep-avgBuy)*qty:0;if(o.side==='buy'){setBalance(b=>b-cost);setPortfolio(p=>{const ex=p.find(h=>h.id===o.assetId);if(ex)return p.map(h=>h.id===o.assetId?{...h,qty:h qty+qty,avg:(h.avg*h qty+cost)/(h qty+qty),sl:o.sl??h.sl,tp:o.tp??h.tp}:h);return[...p,{id:o.assetId,qty,avg:ep,sl:o.sl??null,tp:o.tp??null}];});}else{setBalance(b=>b+cost);setPortfolio(p=>p.map(h=>h.id===o.assetId?{...h,qty:Math.max(0,h qty-qty)}:h).filter(h=>h qty>0.000001));}setOrdersCapped(prev=>[{...o,ep,status:'filled',time:Date.now(),id:genUUID(),pnl},...prev]);if(!auto)showToast(`✓ ${o.side.toUpperCase()} ${qty} ${o.assetId} @ ${fp(ep)} FILLED`,'success');else showToast(`⚡ AUTO: ${o.side.toUpperCase()} ${qty} ${o.assetId} @ ${fp(ep)}`,'info');},[showToast,setOrdersCapped]);
  execFillRef.current=execFill;

  useEffect(()=>{
    const iv=setInterval(()=>{
      setAssets(prev=>prev.map(a=>{const d=(Math.random()-0.488)*a.price*a.vol;const np=Math.max(0.0001,isFinite(a.price+d)?a.price+d:a.price);return{...a,price:np,change:(np-a.prev)/a.prev*100};}));
      setCandles(prev=>{const nx={};Object.entries(prev).forEach(([id,arr])=>{const last=arr[arr.length-1],asset=assetsRef.current.find(x=>x.id===id);const np=asset?asset.price:last.c,isNew=Date.now()-last.t>60000;if(isNew)nx[id]=[...arr.slice(-119),{t:Date.now(),o:last.c,h:Math.max(last.c,np),l:Math.min(last.c,np),c:np,v:Math.floor(100+Math.random()*4000)}];else nx[id]=[...arr.slice(0,-1),{...last,h:Math.max(last.h,np),l:Math.min(last.l,np),c:np,v:last.v+Math.floor(Math.random()*40)}];});return nx;});
      setPortHist(prev=>{if(!prev.length)return prev;const last=prev[prev.length-1],np=Math.max(0,last.value+(Math.random()-0.44)*last.value*0.003);return[...prev.slice(-59),{i:prev.length,value:Math.round(np)}];});
      processSLTP();processPendingOrders();checkAlerts();checkGTT();
    },1500);return()=>clearInterval(iv);
  },[processSLTP,processPendingOrders,checkAlerts,checkGTT]);

  useEffect(()=>{if(!selAsset)return;const p=selAsset.price;const bids=Array.from({length:16},(_,i)=>({p:+(p*(1-0.0003*(i+1)-Math.random()*0.00006)).toFixed(4),s:Math.floor(40+Math.random()*1400)})).sort((a,b)=>b.p-a.p);const asks=Array.from({length:16},(_,i)=>({p:+(p*(1+0.0003*(i+1)+Math.random()*0.00006)).toFixed(4),s:Math.floor(40+Math.random()*1400)})).sort((a,b)=>a.p-b.p);let c=0;bids.forEach(b=>{c+=b.s;b.cum=c;});c=0;asks.forEach(a=>{c+=a.s;a.cum=c;});const mx=Math.max(...bids.map(b=>b.cum),...asks.map(a=>a.cum));bids.forEach(b=>b.pct=b.cum/mx*100);asks.forEach(a=>a.pct=a.cum/mx*100);setOBBook({bids,asks});},[selId,selAsset?.price]); // eslint-disable-line

  const submitOrder=useCallback((sideOverride,kindOverride)=>{
    const qty=parseFloat(oForm.qty);if(!qty||qty<=0){showToast('Enter a valid quantity','error');return;}if(!selAsset){showToast('No asset selected','error');return;}
    const side=sideOverride??oForm.side;const kind=kindOverride??oForm.kind;
    const sl=oForm.slOn&&oForm.sl?parseFloat(oForm.sl):null,tp=oForm.tpOn&&oForm.tp?parseFloat(oForm.tp):null,price=kind==='market'?selAsset.price:parseFloat(oForm.limitPrice||selAsset.price);
    const validErr=validateOrder(qty,price,side==='buy'?balanceRef.current:null,side==='sell'?holding:null,side);if(validErr){showToast(validErr,'error');return;}
    if(!OrderRateLimiter.check(5,10000)){showToast('Too many orders. Wait a moment.','error');return;}
    if(kind==='market'){const cost=qty*selAsset.price/(oForm.leverage||1);if(side==='buy'&&cost>balanceRef.current){showToast('Insufficient balance','error');return;}if(side==='sell'&&(!holding||holding qty<qty)){showToast('Insufficient position','error');return;}setConfirmOrder({side,kind:'market',qty,assetId:selAsset.id,leverage:oForm.leverage,sl,tp,avg:holding?.avg??selAsset.price,price:selAsset.price,estimatedValue:qty*selAsset.price});}
    else{const lp=parseFloat(oForm.limitPrice);if(!lp||lp<=0){showToast('Enter valid limit/stop price','error');return;}setPending(p=>[{side,kind,qty,assetId:selAsset.id,limitPrice:lp,leverage:oForm.leverage,sl,tp,time:Date.now(),id:genUUID(),status:'pending'},...p]);showToast(`${kind.toUpperCase()} placed: ${qty} ${selAsset.id} @ ${fp(lp)}`,'info');}
  },[oForm,selAsset,holding,showToast]);

  const tapLimitOrder=useCallback((side,pricePct)=>{if(!selAsset)return;if(!OrderRateLimiter.check(5,10000)){showToast('Too many orders','error');return;}const lp=+(selAsset.price*(1+pricePct/100)).toFixed(4),qty=parseFloat(oForm.qty)||1;setPending(p=>[{side,kind:'limit',qty,assetId:selAsset.id,limitPrice:lp,leverage:1,sl:null,tp:null,time:Date.now(),id:genUUID(),status:'pending'},...p]);showToast(`⚡ 1-Tap: ${side.toUpperCase()} ${qty} ${selAsset.id} @ ${fp(lp)}`,'success');},[selAsset,oForm.qty,showToast]);

  const submitMTFOrder=useCallback(()=>{const sym=mtfForm.symbol,asset=assetsRef.current.find(a=>a.id===sym);if(!asset){showToast('Asset not found','error');return;}if(!MTF_ELIGIBLE.includes(sym)){showToast('Asset not MTF eligible','error');return;}const qty=parseFloat(mtfForm.qty);if(!qty||qty<=0){showToast('Enter quantity','error');return;}const totalValue=qty*asset.price,marginRequired=totalValue/mtfForm.leverage;if(marginRequired>balanceRef.current){showToast('Insufficient margin','error');return;}if(!OrderRateLimiter.check(5,10000)){showToast('Too many orders','error');return;}setBalance(b=>b-marginRequired);setMtfPositions(p=>[...p,{id:genUUID(),assetId:sym,side:mtfForm.side,qty,avg:asset.price,leverage:mtfForm.leverage,marginUsed:marginRequired,interest:0,time:Date.now()}]);setOrdersCapped(prev=>[{id:genUUID(),assetId:sym,side:mtfForm.side,kind:'mtf',qty,ep:asset.price,avg:asset.price,pnl:0,leverage:mtfForm.leverage,status:'filled',time:Date.now()},...prev]);showToast(`⚡ MTF ${mtfForm.side.toUpperCase()} ${qty} ${sym} @ ${fp(asset.price)} (${mtfForm.leverage}x)`,'success');},[mtfForm,showToast,setOrdersCapped]);
  const closeMTFPosition=useCallback(pos=>{const asset=assetsRef.current.find(a=>a.id===pos.assetId);if(!asset)return;const exitVal=pos.qty*asset.price,entryVal=pos.qty*pos.avg,grossPnl=pos.side==='buy'?(exitVal-entryVal):entryVal-exitVal,netPnl=grossPnl-pos.interest;setBalance(b=>b+Math.max(0,pos.marginUsed+netPnl));setMtfPositions(p=>p.filter(x=>x.id!==pos.id));showToast(`MTF Closed: ${pos.assetId} P&L ${inr(netPnl)}`,'success');},[showToast]);

  const confirmAndExecute=useCallback(()=>{if(!confirmOrder)return;execFill(confirmOrder,confirmOrder.price);setConfirmOrder(null);},[confirmOrder,execFill]);

  const sendAiMessage=useCallback(async()=>{let msg='';setAiInput(prev=>{msg=prev.trim();return'';});await Promise.resolve();if(!msg)return;if(!AiRateLimiter.check(10,60000)){showToast('Max 10 AI messages/min','warning');return;}setAiChat(c=>[...c,{role:'user',content:sanitize(msg)}]);setAiLoading(true);
  try{await new Promise(r=>setTimeout(r,800));const cur=assetsRef.current;const resp={nifty:`📊 NIFTY 50 Analysis\n\nCurrent: ${fp(cur.find(a=>a.id==='NIFTY50')?.price||22150)}\n\n▶ Outlook: Mildly bullish — holding 22,000 support\n▶ Resistance: 22,500 → 23,000\n▶ RSI: ~58 (neutral-bullish)\n▶ EMA21 acting as support\n\n📌 Strategy: Hold longs, add dips to 21,900.\n\n⚠ Not financial advice.`,reliance:`📊 RELIANCE Analysis\n\nCurrent: ${fp(cur.find(a=>a.id==='RELIANCE')?.price||2847)}\n\n▶ Consolidating near ATH\n▶ Jio re-rating catalyst in FY25\n▶ Support: ₹2700 | Resistance: ₹3000\n\n📌 Strategy: Hold. Fresh entry on pullback to ₹2750.\n\n⚠ Not financial advice.`,risk:`📊 Portfolio Risk Assessment\n\nIT: ~28% (TCS + INFY)\nEnergy: ~22% (RELIANCE)\nBanking: ~18% | Crypto: ~12%\n\nRisk Level: MODERATE ✅\n▶ Good diversification\n▶ Sharpe: ~1.6\n\n⚠ Not financial advice.`,ipo:`📋 IPO Analysis\n\nTop performers:\n▶ Bajaj Housing Finance: +114% ✅\n▶ Waaree Energies: +67% ✅\n▶ Ola Electric: -50% ❌\n\nUpcoming:\n▶ Hexaware Tech: GMP ₹45 (₹674 issue)\n▶ Ather Energy: GMP ₹22 (OPEN)\n\n⚠ Not financial advice.`,mtf:`⚡ MTF Strategy\n\nMTF = 4x leverage on NSE-approved stocks\n▶ Interest: 0.035%/day = ~12.8% annual\n▶ Best for: 1-5 day momentum trades\n▶ Always use SL with MTF!\n\n⚠ MTF amplifies losses too. Not financial advice.`,mf:`📊 Top Mutual Fund Picks\n\n▶ Parag Parikh Flexi Cap: 34.5% (1Y) ⭐⭐⭐⭐⭐\n▶ Quant Small Cap: 68.4% (1Y) - High Risk\n▶ HDFC Index Nifty 50: 26.8% (1Y) - Safe\n\n📌 Invest via SIP for rupee cost averaging.\n\n⚠ Not financial advice.`,default:`📊 APEX AI Ready\n\nAsk me:\n• "Analyze NIFTY"\n• "IPO outlook"\n• "MTF strategy"\n• "Best mutual funds"\n• "Portfolio risk"\n\nConnect Anthropic API for full AI capabilities.`};const k=msg.toLowerCase().includes('ipo')?'ipo':msg.toLowerCase().includes('mtf')||msg.toLowerCase().includes('margin')?'mtf':msg.toLowerCase().includes('mutual')||msg.toLowerCase().includes('mf')?'mf':msg.toLowerCase().includes('nifty')?'nifty':msg.toLowerCase().includes('reliance')?'reliance':msg.toLowerCase().includes('risk')||msg.toLowerCase().includes('portfolio')?'risk':'default';setAiChat(c=>[...c,{role:'assistant',content:resp[k]}]);}catch{setAiChat(c=>[...c,{role:'assistant',content:'❌ AI service unavailable.'}]);}setAiLoading(false);},[showToast]);

  const riskCalcResult=useMemo(()=>{const e=parseFloat(riskCalc.entry),sl=parseFloat(riskCalc.sl),t=parseFloat(riskCalc.target),cap=parseFloat(riskCalc.capital),rPct=parseFloat(riskCalc.riskPct);if(!e||!sl||e===sl||!isFinite(e)||!isFinite(sl))return null;if(!isFinite(cap)||cap<=0||!isFinite(rPct)||rPct<=0)return null;const riskPerUnit=Math.abs(e-sl),maxRiskAmt=cap*(rPct/100),positionSize=Math.max(0,Math.floor(maxRiskAmt/riskPerUnit)),totalRisk=positionSize*riskPerUnit,reward=t&&isFinite(t)?Math.abs(t-e)*positionSize:null,rrRatio=t&&isFinite(t)&&riskPerUnit>0?Math.abs(t-e)/riskPerUnit:null;return{riskPerUnit,maxRiskAmt,positionSize,totalRisk,reward,rrRatio};},[riskCalc]);

  const filtered=useMemo(()=>assets.filter(a=>(fType==='all'||a.type===fType)&&(!debouncedSearch||a.id.toLowerCase().includes(debouncedSearch.toLowerCase())||a.name.toLowerCase().includes(debouncedSearch.toLowerCase()))),[assets,fType,debouncedSearch]);
  const topGain=useMemo(()=>[...assets].sort((a,b)=>b.change-a.change).slice(0,8),[assets]);
  const topLoss=useMemo(()=>[...assets].sort((a,b)=>a.change-b.change).slice(0,8),[assets]);
  const topVol=useMemo(()=>[...assets].sort((a,b)=>b.vol-a.vol).slice(0,8),[assets]);
  const selC=candles[selId]||[];
  const pieData=useMemo(()=>portfolio.map(h=>{const a=assets.find(x=>x.id===h.id);return{name:h.id,value:a?a.price*h qty:0};}).filter(d=>d.value>0),[portfolio,assets]);
  const portColor=cc(totalPnl);
  const dayPnl=portHist.length>=2?portHist[portHist.length-1].value-portHist[portHist.length-2].value:0;
  const watchlistAssets=useMemo(()=>watchlist.map(id=>assets.find(a=>a.id===id)).filter(Boolean),[watchlist,assets]);
  const scannerResults=useMemo(()=>{if(scannerMode==='gainers')return topGain;if(scannerMode==='losers')return topLoss;if(scannerMode==='volume')return topVol;return assets.filter(a=>{const c=candles[a.id]||[];if(c.length<20)return false;const h20=Math.max(...c.slice(-20).slice(0,-1).map(x=>x.c));return a.price>h20;}).slice(0,8);},[scannerMode,topGain,topLoss,topVol,assets,candles]);

  const NAV=[
    {id:'dashboard',  emoji:'⬛',label:'Dashboard'},
    {id:'chart',      emoji:'📊',label:'Chart & Trade'},
    {id:'dualchart',  emoji:'⊞', label:'Dual Chart'},
    {id:'markets',    emoji:'🌐',label:'Markets'},
    {id:'mtf',        emoji:'⚡',label:'MTF Trading'},
    {id:'desktop',    emoji:'🖥', label:'Desktop Mode'},
    {id:'mobile',     emoji:'📱',label:'Mobile Mode'},
    {id:'portfolio',  emoji:'💼',label:'Portfolio'},
    {id:'orders',     emoji:'📋',label:'Orders'},
    {id:'analytics',  emoji:'📈',label:'Analytics'},
    {id:'leaderboard',emoji:'🏆',label:'Leaderboard'},
    {id:'ai',         emoji:'🤖',label:'AI Assistant'},
    {id:'alerts',     emoji:'🔔',label:'Alerts',badge:activeAlerts>0},
    {id:'journal',    emoji:'📓',label:'Trade Journal'},
    {id:'risk',       emoji:'🧮',label:'Risk Calc'},
    {id:'gtt',        emoji:'⏰',label:'GTT Orders'},
  ];

  if(!user)return<LoginScreen onLogin={u=>setUser(u)}/>;

  // ── RENDER FUNCTIONS ────────────────────────────────────────────────────────
  const renderOrderForm=()=>(
    <div style={{display:'flex',flexDirection:'column',gap:8,overflow:'auto',width:isMobile?'100%':270,flexShrink:0}}>
      <div style={S.card}>
        <div style={{display:'flex',marginBottom:12,borderRadius:6,overflow:'hidden',border:`1px solid ${C.border}`}}>{['buy','sell'].map(s=>(<button key={s} onClick={()=>setOForm(f=>({...f,side:s,qty:'',qtyVal:''}))} style={{flex:1,padding:'10px',border:'none',cursor:'pointer',fontWeight:800,fontSize:13,fontFamily:'inherit',background:oForm.side===s?(s==='buy'?G:R):C.bg0,color:oForm.side===s?'#000':(s==='buy'?G:R)}}>{s==='buy'?'▲ BUY':'▼ SELL'}</button>))}</div>
        <div style={{marginBottom:10}}><div style={S.lbl}>Order Type</div><div style={{display:'flex',gap:4}}>{['market','limit','stop'].map(k=>(<button key={k} style={{...S.btn(oForm.kind===k?'primary':'ghost',true),flex:1,fontSize:9,textTransform:'uppercase'}} onClick={()=>setOForm(f=>({...f,kind:k}))}>{k}</button>))}</div></div>
        <div style={{marginBottom:8}}><div style={S.lbl}>Quantity</div><input style={S.inp} type="number" min="0" step="any" placeholder="0.00" value={oForm.qty} onChange={e=>{const q=e.target.value,v=selAsset?parseFloat(q||0)*selAsset.price:0;setOForm(f=>({...f,qty:q,qtyVal:v?v.toFixed(0):''}));}}/>{selAsset&&oForm.qty&&<div style={{fontSize:10,color:C.muted,marginTop:3}}>≈ {inr(parseFloat(oForm.qty||0)*selAsset.price)}</div>}</div>
        <div style={{marginBottom:10}}><div style={S.lbl}>Amount (₹)</div><input style={S.inp} type="number" min="0" step="any" placeholder="10000" value={oForm.qtyVal} onChange={e=>{const v=e.target.value,q=selAsset&&v?(parseFloat(v)/selAsset.price):0;setOForm(f=>({...f,qtyVal:v,qty:q>0?q.toFixed(6):''}));}}/></div>
        <div style={{display:'flex',gap:4,marginBottom:10}}>{[25,50,75,100].map(p=>(<button key={p} style={{...S.btn('ghost',true),flex:1,fontSize:10}} onClick={()=>{if(oForm.side==='buy'&&selAsset){const v=balance*p/100;setOForm(f=>({...f,qty:(v/selAsset.price).toFixed(6),qtyVal:v.toFixed(0)}));}else if(holding){const q=(holding qty*p/100).toFixed(6);setOForm(f=>({...f,qty:q,qtyVal:selAsset?(parseFloat(q)*selAsset.price).toFixed(0):''}));}}}>{p}%</button>))}</div>
        {(oForm.kind==='limit'||oForm.kind==='stop')&&<div style={{marginBottom:10}}><div style={S.lbl}>{oForm.kind==='limit'?'Limit':'Stop'} Price</div><input style={S.inp} type="number" min="0" step="any" placeholder={selAsset?fp(selAsset.price):''} value={oForm.limitPrice} onChange={e=>setOForm(f=>({...f,limitPrice:e.target.value}))}/>{selAsset&&oForm.limitPrice&&<div style={{fontSize:10,color:C.muted,marginTop:2}}>{(((parseFloat(oForm.limitPrice)-selAsset.price)/selAsset.price)*100).toFixed(2)}%</div>}</div>}
        {/* Auto SL */}
        <div style={{background:C.bg0,border:`1px solid ${C.border}`,borderRadius:6,padding:10,marginBottom:7}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:oForm.slOn?10:0}}><div style={{display:'flex',alignItems:'center',gap:8}}><Toggle on={oForm.slOn} onChange={v=>setOForm(f=>({...f,slOn:v}))} color={R}/><span style={{fontSize:11,fontWeight:700,color:oForm.slOn?R:C.muted}}>Auto Stop Loss</span></div>{oForm.slOn&&oForm.sl&&selAsset&&<span style={{fontSize:9,color:R}}>{(((parseFloat(oForm.sl)-selAsset.price)/selAsset.price)*100).toFixed(2)}%</span>}</div>
          {oForm.slOn&&<>
            <input style={{...S.inp,borderColor:R+'44'}} type="number" min="0" step="any" placeholder={selAsset?fp(selAsset.price*(oForm.side==='buy'?0.97:1.03)):'SL Price'} value={oForm.sl} onChange={e=>setOForm(f=>({...f,sl:e.target.value}))}/>
            <div style={{display:'flex',gap:12,marginTop:6,flexWrap:'wrap'}}>
              <label style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:C.muted,cursor:'pointer'}}><input type="checkbox" checked={oForm.trailSL} onChange={e=>setOForm(f=>({...f,trailSL:e.target.checked}))} style={{accentColor:R}}/>Trailing SL{oForm.trailSL&&<input style={{...S.inp,width:50,padding:'2px 5px',fontSize:10,display:'inline'}} type="number" min="0.1" max="20" step="0.1" value={oForm.trailPct} onChange={e=>setOForm(f=>({...f,trailPct:e.target.value}))} placeholder="%"/>}%</label>
              <label style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:C.muted,cursor:'pointer'}}><input type="checkbox" checked={oForm.atrSL} onChange={e=>{if(e.target.checked&&selAsset){const atr=calcATR(selC,14),lastATR=atr.filter(v=>v!=null).at(-1)||0;const slV=(oForm.side==='buy'?selAsset.price-2*lastATR:selAsset.price+2*lastATR).toFixed(2);setOForm(f=>({...f,atrSL:true,sl:slV}));}else setOForm(f=>({...f,atrSL:false}));}} style={{accentColor:C.indigo}}/>ATR-SL</label>
            </div>
            <div style={{display:'flex',gap:6,marginTop:6}}>{[1,2,3,5].map(pct2=>(<button key={pct2} style={{...S.btn('ghost',true),fontSize:9,flex:1}} onClick={()=>{if(selAsset){const sl2=oForm.side==='buy'?selAsset.price*(1-pct2/100):selAsset.price*(1+pct2/100);setOForm(f=>({...f,sl:sl2.toFixed(2)}))}}}>{pct2}%</button>))}</div>
            {selAsset&&oForm.sl&&oForm.qty&&<div style={{fontSize:10,color:R,marginTop:4}}>Max loss: {inr(Math.abs((parseFloat(oForm.sl)-selAsset.price)*parseFloat(oForm.qty)))}</div>}
          </>}
        </div>
        {/* Auto TP */}
        <div style={{background:C.bg0,border:`1px solid ${C.border}`,borderRadius:6,padding:10,marginBottom:10}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:oForm.tpOn?10:0}}><div style={{display:'flex',alignItems:'center',gap:8}}><Toggle on={oForm.tpOn} onChange={v=>setOForm(f=>({...f,tpOn:v}))} color={G}/><span style={{fontSize:11,fontWeight:700,color:oForm.tpOn?G:C.muted}}>Auto Take Profit</span></div>{oForm.tpOn&&oForm.tp&&selAsset&&<span style={{fontSize:9,color:G}}>{(((parseFloat(oForm.tp)-selAsset.price)/selAsset.price)*100).toFixed(2)}%</span>}</div>
          {oForm.tpOn&&<>
            <input style={{...S.inp,borderColor:G+'44'}} type="number" min="0" step="any" placeholder={selAsset?fp(selAsset.price*(oForm.side==='buy'?1.05:0.95)):'TP Price'} value={oForm.tp} onChange={e=>setOForm(f=>({...f,tp:e.target.value}))}/>
            <div style={{display:'flex',gap:6,marginTop:6}}>{[3,5,8,10].map(pct2=>(<button key={pct2} style={{...S.btn('ghost',true),fontSize:9,flex:1}} onClick={()=>{if(selAsset){const tp2=oForm.side==='buy'?selAsset.price*(1+pct2/100):selAsset.price*(1-pct2/100);setOForm(f=>({...f,tp:tp2.toFixed(2)}))}}}>{pct2}%</button>))}</div>
            {selAsset&&oForm.tp&&oForm.qty&&<div style={{fontSize:10,color:G,marginTop:4}}>Target: {inr(Math.abs((parseFloat(oForm.tp)-selAsset.price)*parseFloat(oForm.qty)))}</div>}
          </>}
        </div>
        {selAsset&&oForm.slOn&&oForm.sl&&oForm.tpOn&&oForm.tp&&oForm.qty&&<RRAnalysis sl={parseFloat(oForm.sl)} tp={parseFloat(oForm.tp)} qty={parseFloat(oForm.qty)} entry={selAsset.price}/>}
        <Slider min={1} max={20} value={oForm.leverage} onChange={v=>setOForm(f=>({...f,leverage:Math.round(v)}))} color={C.purple} label="Leverage" fmt={v=>`${Math.round(v)}x`} step={1} markers={[{val:1,label:'1x'},{val:5,label:'5x'},{val:10,label:'10x'},{val:20,label:'20x'}]}/>
        {oForm.leverage>1&&<div style={{fontSize:9,color:R,padding:'4px 8px',background:R+'0d',borderRadius:4,marginBottom:10}}>⚠ {oForm.leverage}x leverage amplifies gains and losses</div>}
        <div style={{background:C.bg0,border:`1px solid ${C.border}`,borderRadius:5,padding:'9px 11px',marginBottom:10}}>{[{l:'Qty',v:oForm qty?parseFloat(oForm qty||0).toFixed(4):'—'},{l:'Mkt Price',v:selAsset?fp(selAsset.price):'—'},{l:'Est. Total',v:selAsset&&oForm qty?inr(parseFloat(oForm qty||0)*selAsset.price):'—',bold:true,c:oForm.side==='buy'?G:R},{l:'Available',v:oForm.side==='buy'?inr(balance):(holding?holding qty.toFixed(4)+' units':'—'},{l:'SL',v:fp(oForm.sl),c:R},{l:'TP',v:fp(oForm.tp),c:G}].map(({l,v,bold,c},i)=>(<div key={i} style={{display:'flex',justifyContent:'space-between',marginBottom:3,color:c||(bold?C.text:C.muted)}}><span style={{fontSize:10}}>{l}</span><span style={{fontSize:10,fontWeight:bold?700:500}}>{v}</span></div>))}</div>
        <button style={{...S.btn(oForm.side==='buy'?'buy':'sell'),width:'100%',padding:11,fontSize:14}} onClick={submitOrder}>{oForm.side==='buy'?'▲ BUY':'▼ SELL'} {selId}{oForm qty?` · ${parseFloat(oForm qty||0).toFixed(4)}`:''}</button>
        <div style={{fontSize:9,color:C.muted,textAlign:'center',marginTop:6}}>🔐 Order confirmation required · Rate limited</div>
      </div>
      {pending.filter(o=>o.assetId===selId).length>0&&<div style={S.card}><div style={S.lbl}>Pending — {selId}</div>{pending.filter(o=>o.assetId===selId).map(o=>(<div key={o.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:`1px solid ${C.bg0}`}}><div><span style={{fontWeight:700,color:o.side==='buy'?G:R,fontSize:11}}>{o.side.toUpperCase()}</span><span style={{color:C.muted,marginLeft:6,fontSize:10}}>{o.kind} · {o qty} @ {fp(o.limitPrice)}</span></div><button style={S.btn('danger',true)} onClick={()=>setPending(p=>p.filter(x=>x.id!==o.id))}>✕</button></div>))}</div>}
    </div>
  );

  const renderIndicatorBar=()=>(
    <div style={{display:'flex',gap:4,flexWrap:'wrap',alignItems:'center',flexShrink:0}}>
      {['1m','5m','15m','1H','4H','1D','1W'].map(t=><button key={t} style={{...S.btn(tf===t?'primary':'ghost',true),padding:'3px 9px',fontSize:10}} onClick={()=>setTf(t)}>{t}</button>)}
      <div style={{width:1,height:18,background:C.border,margin:'0 2px'}}/>
      {[['EMA9',C.amber,'ema9'],['EMA21',C.purple,'ema21'],['BB',C.cyan,'bb'],['VWAP',C.teal,'vwap'],['RSI',C.orange,'rsi'],['MACD',B,'macd'],['ST',G,'supertrend'],['Stoch',C.cyan,'stoch'],['ATR',C.indigo,'atr']].map(([lbl,col,key])=>(
        <button key={key} style={{padding:'3px 8px',borderRadius:4,border:`1px solid ${indicators[key]?col:C.border}`,fontSize:9,fontWeight:700,cursor:'pointer',fontFamily:'inherit',background:indicators[key]?col+'22':C.bg3,color:indicators[key]?col:C.muted}} onClick={()=>setIndicators(p=>({...p,[key]:!p[key]}))}>
          {lbl}
        </button>
      ))}
    </div>
  );

  const renderDashboard=()=>(
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      <div style={{display:'flex',alignItems:'center',gap:10,padding:'6px 10px',background:C.bg2,borderRadius:6,border:`1px solid ${C.border}`}}><span style={{fontSize:10,color:C.muted}}>📋 Dashboard</span><div style={{flex:1,height:3,background:C.border,borderRadius:2,overflow:'hidden'}}><DashScrollBar scrollEl={contentRef.current}/></div><span style={{fontSize:9,color:C.muted}}>↕ Scroll to explore</span></div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)',gap:10}}>
        {[{l:'Total Portfolio',v:inr(totalVal),s:`Cash: ${inr(balance)}`,c:B,icon:'💰'},{l:'Invested',v:inr(portVal),s:`Basis: ${inr(costBasis)}`,c:C.purple,icon:'📦'},{l:'Unrealised P&L',v:inr(totalPnl),s:pct(totalPct),c:portColor,icon:'📊'},{l:"Today's Change",v:inr(dayPnl),s:totalVal>0?pct(dayPnl/totalVal*100):'+0.00%',c:cc(dayPnl),icon:'⚡'}].map(({l,v,s,c,icon},i)=>(
          <div key={i} style={{...S.card,borderTop:`2px solid ${c}`,position:'relative',overflow:'hidden'}}><div style={{position:'absolute',right:14,top:10,fontSize:22,opacity:0.12}}>{icon}</div><div style={S.lbl}>{l}</div><div style={{fontSize:18,fontWeight:700,color:c,marginBottom:2}}>{v}</div><div style={{fontSize:10,color:c,opacity:0.7}}>{s}</div></div>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1.7fr 1fr',gap:12}}>
        <div style={S.card}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}><div><div style={S.lbl}>Portfolio Performance</div><div style={{fontSize:22,fontWeight:700,color:portColor}}>{inr(totalVal)}</div><div style={{fontSize:11,color:portColor,marginTop:2}}>{totalPnl>=0?'▲':'▼'} {inr(Math.abs(totalPnl))} ({pct(totalPct)})</div></div><div style={{display:'flex',gap:5}}>{['1D','1W','1M','3M'].map(p=><button key={p} style={{...S.btn('ghost',true),padding:'3px 8px',fontSize:9}}>{p}</button>)}</div></div>
          {portHist.length>0&&(<ResponsiveContainer width="100%" height={130}><AreaChart data={portHist} margin={{top:4,right:0,left:0,bottom:0}}><defs><linearGradient id="pgh" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={portColor} stopOpacity={0.28}/><stop offset="95%" stopColor={portColor} stopOpacity={0}/></linearGradient></defs><YAxis domain={['dataMin - 50000','dataMax + 50000']} hide/><Tooltip contentStyle={{background:C.bg3,border:`1px solid ${C.border}`,fontSize:10}} formatter={v=>[inr(v),'Value']} labelFormatter={()=>''}/><Area type="monotone" dataKey="value" stroke={portColor} strokeWidth={2} fill="url(#pgh)" dot={false}/></AreaChart></ResponsiveContainer>)}
        </div>
        <div style={S.card}>
          <div style={S.lbl}>⭐ Watchlist</div>
          <div style={{display:'flex',gap:4,flexWrap:'wrap',marginBottom:8}}>{assets.map(a=>(<button key={a.id} style={{...S.btn(watchlist.includes(a.id)?'primary':'ghost',true),fontSize:9,padding:'2px 6px'}} onClick={()=>setWatchlist(w=>w.includes(a.id)?w.filter(x=>x!==a.id):[...w,a.id])}>{a.id.split('/')[0]}</button>)).slice(0,10)}</div>
          {watchlistAssets.slice(0,6).map(a=>(<div key={a.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:`1px solid ${C.bg0}`,cursor:'pointer'}} onClick={()=>{setSelId(a.id);setTab('chart');}}>
            <div style={{flex:1}}><div style={{fontWeight:700,fontSize:11}}>{a.id}</div><div style={{fontSize:9,color:C.muted}}>{a.exch}</div></div>
            <div style={{textAlign:'right'}}><Spark candles={(candles[a.id]||[]).slice(-20)} color={cc(a.change)} h={20} w={50}/><div style={{textAlign:'right'}}><div style={{fontSize:11,fontWeight:600}}>{fp(a.price)}</div><div style={{fontSize:10,color:cc(a.change),fontWeight:700}}>{pct(a.change)}</div></div></div>
          </div>))}
        </div>
      </div>
      {/* Real-time scanner */}
      <div style={S.card}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}><div style={S.lbl}>🔍 Real-Time Scanner</div><div style={{display:'flex',gap:4}}>{['gainers','losers','volume','breakout'].map(m=><button key={m} style={{...S.btn(scannerMode===m?'primary':'ghost',true),fontSize:9,padding:'2px 8px'}} onClick={()=>setScannerMode(m)}>{m.toUpperCase()}</button>)}</div></div>
        <div style={{display:'flex',gap:8,overflowX:'auto',paddingBottom:4}}>
          {scannerResults.map(a=>(<div key={a.id} style={{flexShrink:0,background:C.bg0,border:`1px solid ${C.border}`,borderRadius:6,padding:'8px 12px',cursor:'pointer',minWidth:110}} onClick={()=>{setSelId(a.id);setTab('chart');}}><div style={{fontWeight:800,fontSize:12,marginBottom:2}}>{a.id}</div><div style={{fontSize:11,fontWeight:600}}>{fp(a.price)}</div><div style={{fontSize:10,color:cc(a.change),fontWeight:700}}>{pct(a.change)}</div><Spark candles={(candles[a.id]||[]).slice(-20)} color={cc(a.change)} h={20} w={80}/></div>))}
        </div>
      </div>
      {portfolio.length>0&&<div style={S.card}><div style={S.lbl}>Open Positions</div><div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(3,1fr)',gap:8}}>{portfolio.map(h=>{const a=assets.find(x=>x.id===h.id);if(!a)return null;const pp=(a.price-h.avg)/h.avg*100,intensity=Math.min(1,Math.abs(pp)/10),bg=pp>=0?`rgba(0,230,118,${0.05+intensity*0.25})`:`rgba(255,61,90,${0.05+intensity*0.25})`;return(<div key={h.id} style={{background:bg,border:`1px solid ${pp>=0?G+44:R+44}`,borderRadius:6,padding:'10px',cursor:'pointer'}} onClick={()=>{setSelId(h.id);setTab('chart');}}><div style={{fontWeight:800}}>{h.id}</div><div style={{fontSize:10,color:C.muted}}>{inr(a.price*h qty)}</div><div style={{fontSize:12,fontWeight:700,color:cc(pp)}}>{pct(pp)}</div><Spark candles={(candles[h.id]||[]).slice(-20)} color={cc(pp)} h={20} w={90}/></div>);})}</div></div>}
    </div>
  );

  const renderChart=()=>(
    <div style={{display:'flex',flexDirection:isMobile?'column':'row',gap:8,height:'100%',minHeight:0}}>
      <div style={{display:'flex',flexDirection:'column',gap:8,flex:1,minWidth:0,minHeight:0}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8,flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}><span style={{fontSize:18,fontWeight:900}}>{selId}</span>{selAsset&&<span style={S.tag(selAsset.type)}>{selAsset.type}</span>}<span style={{fontSize:10,color:C.muted}}>{selAsset?.exch}</span>{holding&&<span style={{fontSize:10,color:A,background:A+'18',padding:'2px 7px',borderRadius:3}}>HOLDING {holding qty.toFixed(4)}</span>}</div>
          <div style={{textAlign:'right'}}><div style={{fontSize:24,fontWeight:700}}>{selAsset?fp(selAsset.price):'—'}</div>{selAsset&&<div style={S.chip(selAsset.change)}>{selAsset.change>=0?'▲':'▼'} {pct(selAsset.change)}</div>}</div>
          {holding&&<div style={{borderLeft:`1px solid ${C.border}`,paddingLeft:14}}><div style={S.lbl}>P&L</div><div style={{fontWeight:700,fontSize:14,color:cc(holdPnl)}}>{inr(holdPnl)}</div><div style={{fontSize:10,color:cc(holdPct)}}>{pct(holdPct)}</div></div>}
        </div>
        {renderIndicatorBar()}
        <div style={{...S.card,flex:1,padding:0,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
          <button style={{position:'absolute',top:6,right:6,zIndex:10,background:C.bg3+'cc',border:`1px solid ${C.border}`,borderRadius:4,color:C.dim,cursor:'pointer',fontSize:14,padding:'2px 6px'}} onClick={()=>setChartFullscreen(f=>!f)}>⤢</button>
          <CandleChart candles={selC} slPrice={holding?.sl??null} tpPrice={holding?.tp??null} indicators={indicators}/>
        </div>
        {/* 1-Tap Limit Orders */}
        <div style={{...S.card,flexShrink:0,padding:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}><div style={S.lbl}>⚡ 1-Tap Limit Orders</div><Toggle on={oneTapActive} onChange={setOneTapActive} color={B}/></div>
          {oneTapActive&&selAsset&&<div style={{display:'flex',flexDirection:'column',gap:6}}>
            <div style={{fontSize:9,color:C.muted}}>CMP: <b style={{color:C.text}}>{fp(selAsset.price)}</b> · Click to place instant limit order</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
              <span style={{fontSize:9,color:G,fontWeight:700,padding:'2px 6px',alignSelf:'center'}}>BUY:</span>
              {[[-2,'−2%'],[-1,'−1%'],[-0.5,'−0.5%'],[0,'CMP']].map(([p2,l])=>(<button key={p2} style={{...S.btn('buy',true),fontSize:9,flexDirection:'column',padding:'4px 8px',gap:0}} onClick={()=>tapLimitOrder('buy',p2)}><span style={{fontSize:8,color:C.muted}}>{l}</span><span>{fp(selAsset.price*(1+p2/100))}</span></button>))}
              <span style={{fontSize:9,color:R,fontWeight:700,padding:'2px 6px',alignSelf:'center'}}>SELL:</span>
              {[[0,'CMP'],[0.5,'+0.5%'],[1,'+1%'],[2,'+2%']].map(([p2,l])=>(<button key={p2} style={{...S.btn('sell',true),fontSize:9,flexDirection:'column',padding:'4px 8px',gap:0}} onClick={()=>tapLimitOrder('sell',p2)}><span style={{fontSize:8,color:C.muted}}>{l}</span><span>{fp(selAsset.price*(1+p2/100))}</span></button>))}
            </div>
          </div>}
          {!oneTapActive&&<div style={{fontSize:10,color:C.muted}}>Enable to place limit orders at preset price levels instantly.</div>}
        </div>
      </div>
      {!isMobile&&<div style={{display:'flex',flexDirection:'column',gap:8,overflow:'hidden',width:210,flexShrink:0}}>
        <div style={{...S.card,flex:1,display:'flex',flexDirection:'column',overflow:'hidden',padding:10}}>
          <div style={S.lbl}>Order Book</div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:9,color:C.muted,padding:'2px 4px',marginBottom:3}}><span>PRICE</span><span>QTY</span><span>TOT</span></div>
          <div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column'}}>{obBook.asks.slice().reverse().slice(0,10).map((a,i)=>(<div key={i} style={{position:'relative',display:'flex',justifyContent:'space-between',padding:'2px 4px',flex:1,color:R}}><div style={{position:'absolute',right:0,top:0,bottom:0,background:R+'18',width:a.pct+'%'}}/><span style={{fontFamily:'monospace',fontSize:10}}>{fp(a.p)}</span><span style={{color:C.muted,fontSize:10}}>{a.s}</span><span style={{color:C.muted,fontSize:9}}>{a.cum}</span></div>))}</div>
          <div style={{border:`1px solid ${C.border}`,padding:'4px',textAlign:'center',margin:'3px 0',borderRadius:4}}><div style={{fontSize:15,fontWeight:700,color:selAsset?cc(selAsset.change):C.text}}>{selAsset?fp(selAsset.price):'—'}</div><div style={{fontSize:9,color:C.muted}}>Spread: {obBook.asks[0]&&obBook.bids[0]?fp(obBook.asks[0].p-obBook.bids[0].p):'—'}</div></div>
          <div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column'}}>{obBook.bids.slice(0,10).map((b,i)=>(<div key={i} style={{position:'relative',display:'flex',justifyContent:'space-between',padding:'2px 4px',flex:1,color:G}}><div style={{position:'absolute',right:0,top:0,bottom:0,background:G+'14',width:b.pct+'%'}}/><span style={{fontFamily:'monospace',fontSize:10}}>{fp(b.p)}</span><span style={{color:C.muted,fontSize:10}}>{b.s}</span><span style={{color:C.muted,fontSize:9}}>{b.cum}</span></div>))}</div>
          <OBRatioBar bids={obBook.bids} asks={obBook.asks}/>
        </div>
        <div style={{...S.card,padding:8}}><div style={{...S.lbl,marginBottom:5}}>Depth</div><DepthChart bids={obBook.bids.map(b=>({p:b.p,s:b.s}))} asks={obBook.asks.map(a=>({p:a.p,s:a.s}))} mid={selAsset?.price}/></div>
      </div>}
      {renderOrderForm()}
    </div>
  );

  const renderDualChart=()=>{
    const lA=assets.find(a=>a.id===dualLeft),rA=assets.find(a=>a.id===dualRight);
    const lC=candles[dualLeft]||[],rC=candles[dualRight]||[];
    const lH=portfolio.find(h=>h.id===dualLeft),rH=portfolio.find(h=>h.id===dualRight);
    return(<div style={{display:'flex',flexDirection:'column',gap:8,height:'100%'}}>
      <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',flexShrink:0,...S.card,padding:10}}>
        <span style={{fontSize:11,fontWeight:700,color:C.cyan}}>⊞ Dual Chart Comparison</span>
        <div style={{display:'flex',alignItems:'center',gap:4}}><span style={{fontSize:10,color:C.muted}}>Left:</span><select style={{...S.inp,width:140,padding:'4px 8px',fontSize:11}} value={dualLeft} onChange={e=>setDualLeft(e.target.value)}>{assets.map(a=><option key={a.id} value={a.id}>{a.id} — {a.name.slice(0,14)}</option>)}</select></div>
        <div style={{display:'flex',alignItems:'center',gap:4}}><span style={{fontSize:10,color:C.muted}}>Right:</span><select style={{...S.inp,width:140,padding:'4px 8px',fontSize:11}} value={dualRight} onChange={e=>setDualRight(e.target.value)}>{assets.map(a=><option key={a.id} value={a.id}>{a.id} — {a.name.slice(0,14)}</option>)}</select></div>
        <div style={{marginLeft:'auto',fontSize:10,color:C.muted}}>Indicators shared with chart tab</div>
      </div>
      {lA&&rA&&<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,flexShrink:0}}>
        {[{a:lA,h:lH},{a:rA,h:rH}].map(({a,h},i)=>(
          <div key={i} style={{...S.card,display:'flex',gap:12,alignItems:'center'}}>
            <div style={{flex:1}}><div style={{fontWeight:900,fontSize:15}}>{a.id}</div><div style={{fontSize:10,color:C.muted}}>{a.name}</div></div>
            <div style={{textAlign:'right'}}><div style={{fontSize:18,fontWeight:700}}>{fp(a.price)}</div><div style={{fontSize:11,color:cc(a.change),fontWeight:700}}>{pct(a.change)}</div></div>
            {h&&<div style={{borderLeft:`1px solid ${C.border}`,paddingLeft:10}}><div style={{fontSize:9,color:C.muted}}>P&L</div><div style={{fontSize:12,fontWeight:700,color:cc((a.price-h.avg)*h qty)}}>{inr((a.price-h.avg)*h qty)}</div></div>}
            <div style={{display:'flex',flexDirection:'column',gap:4}}><button style={{...S.btn('buy',true),fontSize:9}} onClick={()=>{setSelId(a.id);setOForm(f=>({...f,side:'buy'}));setTab('chart');}}>BUY</button><button style={{...S.btn('sell',true),fontSize:9}} onClick={()=>{setSelId(a.id);setOForm(f=>({...f,side:'sell'}));setTab('chart');}}>SELL</button></div>
          </div>
        ))}
      </div>}
      <div style={{display:'flex',gap:8,flex:1,minHeight:0}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
          <div style={{...S.card,flex:1,padding:0,overflow:'hidden',display:'flex',flexDirection:'column'}}>
            <CandleChart candles={lC} slPrice={lH?.sl??null} tpPrice={lH?.tp??null} indicators={indicators}/>
          </div>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
          <div style={{...S.card,flex:1,padding:0,overflow:'hidden',display:'flex',flexDirection:'column'}}>
            <CandleChart candles={rC} slPrice={rH?.sl??null} tpPrice={rH?.tp??null} indicators={indicators}/>
          </div>
        </div>
      </div>
      {lA&&rA&&<div style={{...S.card,flexShrink:0,padding:10}}>
        <div style={S.lbl}>Performance Comparison (Today)</div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <span style={{fontSize:11,fontWeight:700,minWidth:80}}>{dualLeft}</span>
          <div style={{flex:1,height:10,background:C.bg0,borderRadius:5,overflow:'hidden',position:'relative'}}><div style={{position:'absolute',left:'50%',top:0,bottom:0,width:2,background:C.border}}/><div style={{position:'absolute',top:0,bottom:0,background:cc(lA.change),opacity:0.7,...(lA.change>=0?{right:'50%',width:Math.min(48,Math.abs(lA.change)*5)+'%'}:{left:'50%',width:Math.min(48,Math.abs(lA.change)*5)+'%'})}}/></div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}><span style={{fontSize:11,color:cc(lA.change),fontWeight:700}}>{pct(lA.change)}</span><span style={{color:C.border,fontSize:10}}>vs</span><span style={{fontSize:11,color:cc(rA.change),fontWeight:700}}>{pct(rA.change)}</span></div>
          <div style={{flex:1,height:10,background:C.bg0,borderRadius:5,overflow:'hidden',position:'relative'}}><div style={{position:'absolute',left:'50%',top:0,bottom:0,width:2,background:C.border}}/><div style={{position:'absolute',top:0,bottom:0,background:cc(rA.change),opacity:0.7,...(rA.change>=0?{right:'50%',width:Math.min(48,Math.abs(rA.change)*5)+'%'}:{left:'50%',width:Math.min(48,Math.abs(rA.change)*5)+'%'})}}/></div>
          <span style={{fontSize:11,fontWeight:700,minWidth:80,textAlign:'right'}}>{dualRight}</span>
        </div>
      </div>}
    </div>);
  };

  const renderMTF=()=>{
    const mtfAsset=assets.find(a=>a.id===mtfForm.symbol);
    const totalMtfVal=mtfPositions.reduce((s,p)=>{const a=assets.find(x=>x.id===p.assetId);return s+(a?a.price*p.qty:0);},0);
    const totalMargin=mtfPositions.reduce((s,p)=>s+p.marginUsed,0);
    const totalInterest=mtfPositions.reduce((s,p)=>s+p.interest,0);
    const totalMtfPnl=mtfPositions.reduce((s,p)=>{const a=assets.find(x=>x.id===p.assetId);if(!a)return s;return s+(p.side==='buy'?(a.price-p.avg)*p qty:(p.avg-a.price)*p qty)-p.interest;},0);
    const marginUtil=balance>0?Math.min(100,(totalMargin/(balance+totalMargin))*100):0;
    return(<div style={{display:'flex',flexDirection:'column',gap:12}}>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)',gap:10}}>
        {[{l:'MTF Positions',v:mtfPositions.length,c:B},{l:'Total MTF Value',v:inr(totalMtfVal),c:C.purple},{l:'Margin Used',v:inr(totalMargin),c:A},{l:'Net MTF P&L',v:inr(totalMtfPnl),c:cc(totalMtfPnl)}].map(({l,v,c},i)=>(<div key={i} style={{...S.card,borderTop:`2px solid ${c}`}}><div style={S.lbl}>{l}</div><div style={{fontSize:16,fontWeight:700,color:c}}>{v}</div></div>))}
      </div>
      <div style={S.card}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><div style={S.lbl}>Margin Utilization</div><span style={{fontSize:11,fontWeight:700,color:marginUtil>70?R:marginUtil>40?A:G}}>{marginUtil.toFixed(1)}%</span></div>
        <div style={{height:12,background:C.bg0,borderRadius:6,overflow:'hidden',border:`1px solid ${C.border}`}}><div style={{height:'100%',width:marginUtil+'%',background:marginUtil>70?R:marginUtil>40?A:G,borderRadius:6,transition:'width 0.3s'}}/></div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:6,fontSize:9,color:C.muted}}><span>Available: {inr(balance)}</span><span>Interest: {inr(totalInterest)}</span><span>Rate: 0.035%/day (≈12.8% p.a.)</span></div>
        {marginUtil>70&&<div style={{padding:'6px 10px',background:R+'12',border:`1px solid ${R}30`,borderRadius:4,fontSize:10,color:R,marginTop:8}}>⚠ High margin utilization. Risk of margin call below 25% equity.</div>}
      </div>
      <div style={{...S.card,background:B+'08',border:`1px solid ${B}20`}}>
        <div style={{fontWeight:700,fontSize:12,color:B,marginBottom:6}}>⚡ MTF — Margin Trading Facility</div>
        <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(3,1fr)',gap:10,fontSize:10,color:C.dim}}>
          <div><b style={{color:C.text}}>Max Leverage:</b> 4x (SEBI regulated)<br/>Eligible: NSE large caps<br/>Min order: ₹25,000</div>
          <div><b style={{color:C.text}}>Interest Rate:</b> 0.035%/day<br/>Annual: ≈12.75%<br/>On borrowed amount only</div>
          <div><b style={{color:C.text}}>Margin Call:</b> Below 25% equity<br/>Square-off: Below 20%<br/>Holdings pledged as collateral</div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:12}}>
        <div style={S.card}>
          <div style={S.lbl}>New MTF Order</div>
          <div style={{display:'flex',marginBottom:12,borderRadius:6,overflow:'hidden',border:`1px solid ${C.border}`}}>{['buy','sell'].map(s=>(<button key={s} onClick={()=>setMtfForm(f=>({...f,side:s}))} style={{flex:1,padding:'10px',border:'none',cursor:'pointer',fontWeight:800,fontSize:13,fontFamily:'inherit',background:mtfForm.side===s?(s==='buy'?G:R):C.bg0,color:mtfForm.side===s?'#000':(s==='buy'?G:R)}}>{s==='buy'?'▲ BUY MTF':'▼ SELL MTF'}</button>))}</div>
          <div style={{marginBottom:10}}><div style={S.lbl}>Symbol (MTF Eligible)</div><select style={{...S.inp,padding:'8px 11px'}} value={mtfForm.symbol} onChange={e=>setMtfForm(f=>({...f,symbol:e.target.value}))}>{MTF_ELIGIBLE.map(sym=>{const a=assets.find(x=>x.id===sym);return<option key={sym} value={sym}>{sym}{a?` — ${fp(a.price)}`:''}</option>;})}</select></div>
          <div style={{marginBottom:10}}><div style={S.lbl}>Quantity</div><input style={S.inp} type="number" min="0" step="any" placeholder="0" value={mtfForm.qty} onChange={e=>setMtfForm(f=>({...f,qty:e.target.value}))}/>{mtfAsset&&mtfForm.qty&&<div style={{fontSize:10,color:C.muted,marginTop:3}}>Total Value: {inr(parseFloat(mtfForm.qty||0)*mtfAsset.price)}</div>}</div>
          <Slider min={2} max={4} value={mtfForm.leverage} onChange={v=>setMtfForm(f=>({...f,leverage:Math.round(v)}))} color={C.purple} label="MTF Leverage" fmt={v=>`${Math.round(v)}x`} step={1} markers={[{val:2,label:'2x'},{val:3,label:'3x'},{val:4,label:'4x'}]}/>
          {mtfAsset&&mtfForm.qty&&(<div style={{background:C.bg0,border:`1px solid ${C.border}`,borderRadius:5,padding:'9px 11px',marginBottom:10}}>{[{l:'Total Value',v:inr(parseFloat(mtfForm.qty||0)*mtfAsset.price)},{l:'Margin Required',v:inr(parseFloat(mtfForm.qty||0)*mtfAsset.price/mtfForm.leverage),c:A},{l:'Borrowed',v:inr(parseFloat(mtfForm.qty||0)*mtfAsset.price*(1-1/mtfForm.leverage)),c:C.purple},{l:'Daily Interest',v:inr(parseFloat(mtfForm.qty||0)*mtfAsset.price*(1-1/mtfForm.leverage)*MTF_RATE),c:R},{l:'Available Cash',v:inr(balance)}].map(({l,v,c},i)=>(<div key={i} style={{display:'flex',justifyContent:'space-between',marginBottom:3}}><span style={{fontSize:10,color:C.muted}}>{l}</span><span style={{fontSize:10,fontWeight:700,color:c||C.text}}>{v}</span></div>))}</div>)}
          <button style={{...S.btn('primary'),width:'100%',padding:11,fontSize:14}} onClick={submitMTFOrder}>⚡ PLACE MTF ORDER</button>
          <div style={{fontSize:9,color:C.muted,textAlign:'center',marginTop:6}}>Interest: 0.035%/day on borrowed amount</div>
        </div>
        <div style={S.card}>
          <div style={S.lbl}>Active MTF Positions ({mtfPositions.length})</div>
          {mtfPositions.length===0?<div style={{fontSize:11,color:C.muted,padding:'20px 0',textAlign:'center'}}>No active MTF positions<br/><span style={{fontSize:10}}>Place an order to start</span></div>:mtfPositions.map(pos=>{const a=assets.find(x=>x.id===pos.assetId);if(!a)return null;const pnl=(pos.side==='buy'?(a.price-pos.avg)*pos qty:(pos.avg-a.price)*pos qty)-pos.interest;const equity=pos.marginUsed+pnl;const eqPct=pos.marginUsed>0?(equity/pos.marginUsed)*100:0;return(<div key={pos.id} style={{background:C.bg0,border:`1px solid ${C.border}`,borderRadius:6,padding:10,marginBottom:8}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}><span style={{fontWeight:700,fontSize:12}}>{pos.assetId}</span><span style={{fontSize:10,color:pos.side==='buy'?G:R,fontWeight:700}}>{pos.side.toUpperCase()} {pos.leverage}x</span></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:4,marginBottom:8}}>{[{l:'Qty',v:pos qty.toFixed(4)},{l:'Avg',v:fp(pos.avg)},{l:'LTP',v:fp(a.price)},{l:'Interest',v:inr(pos.interest),c:R},{l:'P&L',v:inr(pnl),c:cc(pnl)},{l:'Equity',v:`${eqPct.toFixed(1)}%`,c:eqPct<25?R:G}].map(({l,v,c},i)=>(<div key={i}><div style={{fontSize:9,color:C.muted}}>{l}</div><div style={{fontSize:10,fontWeight:700,color:c||C.text}}>{v}</div></div>))}</div>
            {eqPct<30&&<div style={{fontSize:9,color:R,padding:'3px 6px',background:R+'12',borderRadius:3,marginBottom:6}}>⚠ Low equity margin! Risk of call at 25%</div>}
            <button style={{...S.btn('danger'),width:'100%',padding:6,fontSize:11}} onClick={()=>closeMTFPosition(pos)}>Close Position — {inr(pnl)}</button>
          </div>);})}
        </div>
      </div>
    </div>);
  };

  const renderMarkets=()=>(
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div style={{display:'flex',gap:4,flexShrink:0,flexWrap:'wrap'}}>{['instruments','ipo','mf'].map(t=>(<button key={t} style={{...S.btn(marketSubTab===t?'primary':'ghost',true),padding:'7px 16px',fontSize:11}} onClick={()=>setMarketSubTab(t)}>{t==='instruments'?'🌐 Instruments':t==='ipo'?'🚀 IPO':t==='mf'?'📊 Mutual Funds':t}</button>))}</div>
      {marketSubTab==='instruments'&&<>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{position:'relative',flex:1,maxWidth:280}}><span style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',color:C.muted,fontSize:13,pointerEvents:'none'}}>⌕</span><input style={{...S.inp,paddingLeft:28}} placeholder="Search symbol…" value={search} onChange={e=>setSearch(e.target.value)}/></div>
          {['all','stock','index','crypto','commodity','forex'].map(t=><button key={t} style={S.btn(fType===t?'primary':'ghost',true)} onClick={()=>setFType(t)}>{t.toUpperCase()}</button>)}
          <span style={{marginLeft:'auto',fontSize:10,color:C.muted}}>{filtered.length} instruments</span>
        </div>
        <div style={S.card}><table style={S.table}><thead><tr><th style={S.th}>Symbol</th><th style={S.th}>Price</th><th style={S.th}>Change</th><th style={S.th}>Chart</th><th style={S.th}>Sector</th><th style={S.th}>Exch</th><th style={S.th}>WL</th><th style={S.th}>Action</th></tr></thead>
          <tbody>{filtered.map(a=>(<tr key={a.id} style={{cursor:'pointer'}} onMouseEnter={e=>e.currentTarget.style.background=C.bg4} onMouseLeave={e=>e.currentTarget.style.background=''}>
            <td style={S.td}><div style={{fontWeight:700,fontSize:12}}>{a.id}</div><div style={{fontSize:9,color:C.muted}}>{a.name.slice(0,18)}</div></td>
            <td style={{...S.td,fontWeight:700}}>{fp(a.price)}</td>
            <td style={S.td}><span style={S.chip(a.change)}>{a.change>=0?'▲':'▼'} {pct(a.change)}</span></td>
            <td style={{...S.td,width:80}}><Spark candles={(candles[a.id]||[]).slice(-30)} color={cc(a.change)} h={28} w={70}/></td>
            <td style={{...S.td,color:C.muted,fontSize:10}}>{a.sector}</td>
            <td style={{...S.td,fontSize:10,color:C.muted}}><span style={S.tag(a.type)}>{a.type}</span></td>
            <td style={S.td}><button style={{...S.btn(watchlist.includes(a.id)?'success':'ghost',true),padding:'3px 8px',fontSize:10}} onClick={()=>setWatchlist(w=>w.includes(a.id)?w.filter(x=>x!==a.id):[...w,a.id])}>{watchlist.includes(a.id)?'★':'☆'}</button></td>
            <td style={S.td}><div style={{display:'flex',gap:4}}><button style={S.btn('buy',true)} onClick={()=>{setSelId(a.id);setOForm(f=>({...f,side:'buy',qty:'',qtyVal:''}));setTab('chart');}}>BUY</button><button style={S.btn('sell',true)} onClick={()=>{setSelId(a.id);setOForm(f=>({...f,side:'sell',qty:'',qtyVal:''}));setTab('chart');}}>SELL</button></div></td>
          </tr>))}</tbody>
        </table></div>
      </>}
      {marketSubTab==='ipo'&&<>
        <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>{['all','listed','open','upcoming'].map(f=>(<button key={f} style={S.btn(ipoFilter===f?'primary':'ghost',true)} onClick={()=>setIpoFilter(f)}>{f.toUpperCase()}</button>))}</div>
        <div style={S.card}>
          <table style={S.table}><thead><tr><th style={S.th}>Company</th><th style={S.th}>Category</th><th style={S.th}>Issue Price</th><th style={S.th}>CMP</th><th style={S.th}>Gain%</th><th style={S.th}>GMP</th><th style={S.th}>Lot Size</th><th style={S.th}>Date</th><th style={S.th}>Status</th></tr></thead>
          <tbody>{IPO_DATA.filter(ipo=>ipoFilter==='all'||ipo.status===ipoFilter).map(ipo=>(
            <tr key={ipo.id} onMouseEnter={e=>e.currentTarget.style.background=C.bg4} onMouseLeave={e=>e.currentTarget.style.background=''}>
              <td style={S.td}><div style={{fontWeight:700,fontSize:11}}>{ipo.name}</div><div style={{fontSize:9,color:C.muted}}>{ipo.exchange}</div></td>
              <td style={{...S.td,fontSize:9,color:C.muted}}>{ipo.category}</td>
              <td style={{...S.td,fontWeight:700,fontFamily:'monospace'}}>₹{ipo.price}</td>
              <td style={{...S.td,fontWeight:700}}>{ipo.cmp?`₹${ipo.cmp}`:'—'}</td>
              <td style={S.td}>{ipo.gain!=null?<span style={{color:cc(ipo.gain),fontWeight:700}}>{pct(ipo.gain)}</span>:'—'}</td>
              <td style={{...S.td,color:ipo.gmp>0?G:C.muted,fontWeight:700}}>{ipo.gmp?`+₹${ipo.gmp}`:'—'}</td>
              <td style={{...S.td,fontSize:10,color:C.muted}}>{ipo.lot}</td>
              <td style={{...S.td,fontSize:10,color:C.muted}}>{ipo.date}</td>
              <td style={S.td}><span style={{padding:'2px 7px',borderRadius:3,fontSize:9,fontWeight:700,background:ipo.status==='listed'?G+'22':ipo.status==='open'?A+'22':B+'22',color:ipo.status==='listed'?G:ipo.status==='open'?A:B}}>{ipo.status.toUpperCase()}</span></td>
            </tr>
          ))}</tbody></table>
        </div>
        <div style={{...S.card,background:A+'08',border:`1px solid ${A}20`,padding:12}}>
          <div style={{fontWeight:700,fontSize:11,color:A,marginBottom:6}}>📋 IPO Statistics</div>
          <div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)',gap:10}}>
            {[{l:'Total Listed',v:IPO_DATA.filter(i=>i.status==='listed').length,c:G},{l:'Positive Returns',v:IPO_DATA.filter(i=>i.gain!=null&&i.gain>0).length,c:G},{l:'Negative Returns',v:IPO_DATA.filter(i=>i.gain!=null&&i.gain<0).length,c:R},{l:'Avg Gain (Listed)',v:pct(IPO_DATA.filter(i=>i.gain!=null).reduce((s,i)=>s+i.gain,0)/IPO_DATA.filter(i=>i.gain!=null).length||0),c:G}].map(({l,v,c},i)=>(<div key={i}><div style={{fontSize:9,color:C.muted}}>{l}</div><div style={{fontSize:16,fontWeight:700,color:c}}>{v}</div></div>))}
          </div>
        </div>
      </>}
      {marketSubTab==='mf'&&<>
        <div style={S.card}>
          <div style={S.lbl}>Mutual Fund Explorer — Top Performers</div>
          <table style={S.table}><thead><tr><th style={S.th}>Fund Name</th><th style={S.th}>Category</th><th style={S.th}>NAV</th><th style={S.th}>1Y Returns</th><th style={S.th}>3Y</th><th style={S.th}>5Y</th><th style={S.th}>Risk</th><th style={S.th}>Rating</th><th style={S.th}>Min SIP</th><th style={S.th}>AUM (Cr)</th></tr></thead>
          <tbody>{MF_DATA.map(mf=>(
            <tr key={mf.id} onMouseEnter={e=>e.currentTarget.style.background=C.bg4} onMouseLeave={e=>e.currentTarget.style.background=''}>
              <td style={S.td}><div style={{fontWeight:700,fontSize:11}}>{mf.name}</div></td>
              <td style={{...S.td,fontSize:9,color:C.muted}}><span style={{padding:'2px 6px',borderRadius:3,fontSize:8,fontWeight:700,background:B+'22',color:B}}>{mf.category}</span></td>
              <td style={{...S.td,fontWeight:700,fontFamily:'monospace'}}>₹{mf.nav.toLocaleString('en-IN',{minimumFractionDigits:2})}</td>
              <td style={{...S.td,color:cc(mf.r1Y),fontWeight:700}}>{pct(mf.r1Y)}</td>
              <td style={{...S.td,color:cc(mf.r3Y),fontWeight:600}}>{pct(mf.r3Y)}</td>
              <td style={{...S.td,color:cc(mf.r5Y),fontWeight:600}}>{pct(mf.r5Y)}</td>
              <td style={{...S.td,fontSize:9,color:mf.risk==='Very High'?R:mf.risk==='High'?C.orange:mf.risk.includes('Low')?G:A}}>{mf.risk}</td>
              <td style={S.td}><span style={{color:A,fontSize:12}}>{'★'.repeat(mf.rating)}<span style={{color:C.muted}}>{'★'.repeat(5-mf.rating)}</span></span></td>
              <td style={{...S.td,fontSize:10,color:G,fontWeight:700}}>₹{mf.minSIP}/mo</td>
              <td style={{...S.td,fontSize:10,color:C.muted}}>₹{mf.aum} Cr</td>
            </tr>
          ))}</tbody></table>
        </div>
        <div style={{...S.card,background:G+'08',border:`1px solid ${G}20`,padding:12}}>
          <div style={{fontWeight:700,color:G,marginBottom:6}}>💡 SIP Investment Tip</div>
          <div style={{fontSize:10,color:C.dim}}>Start a Systematic Investment Plan (SIP) as low as ₹100/month. SIP harnesses the power of rupee cost averaging and compounding over time. For wealth creation, Large Cap funds suit conservative investors while Flexi Cap & Mid Cap suit moderate-to-aggressive long-term investors.</div>
        </div>
      </>}
    </div>
  );

  const renderDesktop=()=>(
    <div style={{display:'flex',flexDirection:'column',gap:8,height:'100%'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0,...S.card,padding:10}}>
        <span style={{fontSize:13,fontWeight:900,color:B}}>🖥 Desktop Pro Mode</span>
        <div style={{display:'flex',gap:4,marginLeft:8}}>{[['watchlist','⭐ Watchlist'],['scanner','🔍 Scanner'],['oi','📊 OI Analysis'],['custom','⚙ Custom']].map(([key,lbl])=>(<button key={key} style={{...S.btn(desktopCustomMode===key?'primary':'ghost',true),fontSize:10}} onClick={()=>setDesktopCustomMode(key)}>{lbl}</button>))}</div>
        <button style={{...S.btn('ghost',true),marginLeft:'auto',fontSize:10}} onClick={()=>setShowHotkeys(p=>!p)}>⌨ Hotkeys [H]</button>
        <div style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:G,fontWeight:700}}><span style={{width:6,height:6,borderRadius:'50%',background:G,display:'inline-block',animation:'blink 1.5s infinite'}}/>LIVE FEED</div>
      </div>
      {showHotkeys&&<div style={{...S.card,background:C.bg2,flexShrink:0}}>
        <div style={{fontWeight:700,fontSize:11,color:B,marginBottom:8}}>⌨ Keyboard Hotkeys</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
          {[['1-6','Navigate tabs'],['7','Dual Chart'],['8','MTF'],['9 / D','Desktop Mode'],['B','Buy side'],['S','Sell side'],['L','Limit order'],['M','Market order'],['H','Toggle hotkeys'],['Esc','Close modals']].map(([key,desc],i)=>(<div key={i} style={{display:'flex',gap:6,alignItems:'center'}}><kbd style={{background:C.bg0,border:`1px solid ${C.b2}`,borderRadius:4,padding:'2px 7px',fontSize:10,fontFamily:'monospace',color:C.cyan,flexShrink:0}}>{key}</kbd><span style={{fontSize:10,color:C.dim}}>{desc}</span></div>))}
        </div>
      </div>}
      <div style={{display:'flex',gap:8,flex:1,minHeight:0}}>
        {/* Main chart */}
        <div style={{flex:2,display:'flex',flexDirection:'column',gap:4,minWidth:0}}>
          <div style={{display:'flex',gap:4,alignItems:'center',flexShrink:0}}>
            <div style={{fontWeight:700,fontSize:14,color:C.text}}>{selId}</div>
            {selAsset&&<><span style={S.tag(selAsset.type)}>{selAsset.type}</span><span style={{fontSize:18,fontWeight:700,marginLeft:8}}>{fp(selAsset.price)}</span><span style={{fontSize:12,color:cc(selAsset.change),fontWeight:700}}>{pct(selAsset.change)}</span></>}
            <div style={{marginLeft:'auto',display:'flex',gap:4}}>
              {['1m','5m','15m','1H','4H','1D'].map(t=><button key={t} style={{...S.btn(tf===t?'primary':'ghost',true),padding:'3px 8px',fontSize:9}} onClick={()=>setTf(t)}>{t}</button>)}
            </div>
          </div>
          {renderIndicatorBar()}
          <div style={{...S.card,flex:1,padding:0,overflow:'hidden',display:'flex',flexDirection:'column',position:'relative'}}>
            <button style={{position:'absolute',top:6,right:6,zIndex:10,background:C.bg3+'cc',border:`1px solid ${C.border}`,borderRadius:4,color:C.dim,cursor:'pointer',fontSize:14,padding:'2px 6px'}} onClick={()=>setChartFullscreen(f=>!f)}>⤢</button>
            <CandleChart candles={selC} slPrice={holding?.sl??null} tpPrice={holding?.tp??null} indicators={indicators}/>
          </div>
          {/* 1-click execution */}
          <div style={{...S.card,flexShrink:0,padding:10}}>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <span style={{fontSize:10,fontWeight:700,color:C.cyan}}>⚡ 1-Click Execution</span>
              <input style={{...S.inp,width:80,padding:'4px 8px',fontSize:11}} type="number" min="0" step="any" placeholder="Qty" value={oForm.qty} onChange={e=>setOForm(f=>({...f,qty:e.target.value}))}/>
              <button style={{...S.btn('buy'),padding:'6px 16px',fontSize:12}} onClick={()=>submitOrder('buy','market')}>▲ BUY {selId}</button>
              <button style={{...S.btn('sell'),padding:'6px 16px',fontSize:12}} onClick={()=>submitOrder('sell','market')}>▼ SELL {selId}</button>
              <div style={{marginLeft:'auto',display:'flex',gap:4}}>
                <button style={{...S.btn('ghost',true),fontSize:10}} onClick={()=>tapLimitOrder('buy',-0.5)}>BUY−0.5%</button>
                <button style={{...S.btn('ghost',true),fontSize:10}} onClick={()=>tapLimitOrder('buy',-1)}>BUY−1%</button>
                <button style={{...S.btn('ghost',true),fontSize:10}} onClick={()=>tapLimitOrder('sell',0.5)}>SELL+0.5%</button>
                <button style={{...S.btn('ghost',true),fontSize:10}} onClick={()=>tapLimitOrder('sell',1)}>SELL+1%</button>
              </div>
            </div>
          </div>
        </div>
        {/* Right panel */}
        <div style={{width:280,display:'flex',flexDirection:'column',gap:8}}>
          {/* Watchlist panel */}
          {(desktopCustomMode==='watchlist'||desktopCustomMode===false)&&<div style={{...S.card,flex:1,overflow:'auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><div style={S.lbl}>⭐ Watchlist</div><span style={{fontSize:9,color:C.muted}}>{watchlistAssets.length} symbols</span></div>
            {watchlistAssets.map(a=>(<div key={a.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:`1px solid ${C.bg0}`,cursor:'pointer'}} onClick={()=>setSelId(a.id)}>
              <div style={{flex:1}}><div style={{fontWeight:700,fontSize:11,color:selId===a.id?B:C.text}}>{a.id}</div><div style={{fontSize:9,color:C.muted}}>{fp(a.price)}</div></div>
              <div style={{textAlign:'right'}}><Spark candles={(candles[a.id]||[]).slice(-20)} color={cc(a.change)} h={18} w={50}/><div style={{fontSize:10,color:cc(a.change),fontWeight:700}}>{pct(a.change)}</div></div>
              <button style={{...S.btn('danger',true),padding:'2px 5px',fontSize:9,marginLeft:4}} onClick={e=>{e.stopPropagation();setWatchlist(w=>w.filter(x=>x!==a.id));}}>✕</button>
            </div>))}
          </div>}
          {/* Scanner */}
          {desktopCustomMode==='scanner'&&<div style={{...S.card,flex:1,overflow:'auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><div style={S.lbl}>🔍 Real-Time Scanner</div></div>
            <div style={{display:'flex',gap:4,marginBottom:8,flexWrap:'wrap'}}>{['gainers','losers','volume','breakout'].map(m=><button key={m} style={{...S.btn(scannerMode===m?'primary':'ghost',true),fontSize:8,padding:'2px 6px'}} onClick={()=>setScannerMode(m)}>{m}</button>)}</div>
            {scannerResults.map(a=>(<div key={a.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:`1px solid ${C.bg0}`,cursor:'pointer'}} onClick={()=>setSelId(a.id)}>
              <div><div style={{fontWeight:700,fontSize:11}}>{a.id}</div><div style={{fontSize:9,color:C.muted}}>{a.exch}</div></div>
              <div style={{textAlign:'right'}}><div style={{fontSize:11,fontWeight:600}}>{fp(a.price)}</div><div style={{fontSize:10,color:cc(a.change),fontWeight:700}}>{pct(a.change)}</div></div>
            </div>))}
          </div>}
          {/* OI Analysis */}
          {desktopCustomMode==='oi'&&<div style={{...S.card,flex:1,overflow:'auto'}}>
            <div style={S.lbl}>📊 Open Interest Analysis</div>
            <div style={{display:'flex',gap:8,marginBottom:8,fontSize:10,color:C.dim}}>
              <span>NIFTY50</span><span style={{color:C.muted}}>Spot: {fp(assets.find(a=>a.id==='NIFTY50')?.price||22150)}</span>
              <span style={{marginLeft:'auto',color:G}}>PCR: 1.12</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:9,color:C.muted,padding:'4px 0',borderBottom:`1px solid ${C.border}`,marginBottom:4}}>
              <span style={{width:60,textAlign:'right',color:G}}>CE OI</span>
              <span style={{width:50,textAlign:'center'}}>Strike</span>
              <span style={{width:60,color:R}}>PE OI</span>
            </div>
            {OI_STRIKES.map(s=>(<div key={s.strike} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'3px 0',borderBottom:`1px solid ${C.bg0}`,background:s.strike===22200?B+'12':s.strike===22000?A+'12':'transparent'}}>
              <div style={{width:60,textAlign:'right'}}>
                <div style={{fontSize:10,color:G,fontWeight:s.strike===22200?700:400}}>{(s.ce_oi/1000).toFixed(0)}K</div>
                <div style={{fontSize:8,color:s.ce_chg>=0?G:R}}>{s.ce_chg>=0?'+':''}{s.ce_chg}%</div>
              </div>
              <div style={{width:50,textAlign:'center'}}>
                <div style={{fontSize:10,fontWeight:700,color:s.strike===22200?B:s.strike===22000?A:C.dim}}>{s.strike}</div>
              </div>
              <div style={{width:60}}>
                <div style={{fontSize:10,color:R,fontWeight:s.strike===22000?700:400}}>{(s.pe_oi/1000).toFixed(0)}K</div>
                <div style={{fontSize:8,color:s.pe_chg>=0?G:R}}>{s.pe_chg>=0?'+':''}{s.pe_chg}%</div>
              </div>
            </div>))}
            <div style={{marginTop:8,padding:'6px',background:C.bg0,borderRadius:4}}>
              <div style={{fontSize:9,color:C.muted}}>Max Pain: <b style={{color:A}}>22,000</b></div>
              <div style={{fontSize:9,color:C.muted}}>Support: <b style={{color:G}}>22,000</b> | Resistance: <b style={{color:R}}>22,200</b></div>
            </div>
          </div>}
          {/* Custom layout */}
          {desktopCustomMode==='custom'&&<div style={{...S.card,flex:1,overflow:'auto'}}>
            <div style={S.lbl}>⚙ Custom Layout</div>
            <div style={{fontSize:10,color:C.dim,marginBottom:12}}>Configure your desktop trading workspace</div>
            {[['Show Order Book','showOB'],['Show Scanner','showScanner'],['Show Watchlist','showWL'],['Show OI Panel','showOI']].map(([label,key])=>(<div key={key} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:`1px solid ${C.bg0}`}}><span style={{fontSize:11,color:C.text}}>{label}</span><Toggle on={customLayout[key]} onChange={v=>setCustomLayout(p=>({...p,[key]:v}))}/></div>))}
            <div style={{marginTop:12}}><div style={S.lbl}>Symbol Switcher</div><div style={{display:'flex',flexWrap:'wrap',gap:4}}>{assets.slice(0,12).map(a=>(<button key={a.id} onClick={()=>setSelId(a.id)} style={{padding:'3px 8px',borderRadius:4,border:`1px solid ${selId===a.id?B:C.border}`,fontSize:9,fontWeight:600,cursor:'pointer',fontFamily:'inherit',background:selId===a.id?B+'22':C.bg0,color:selId===a.id?C.cyan:cc(a.change)}}>{a.id.split('/')[0]}</button>))}</div></div>
          </div>}
          {/* Order form mini */}
          <div style={{...S.card,flexShrink:0,padding:10}}>
            <div style={S.lbl}>Order Form</div>
            <div style={{display:'flex',gap:4,marginBottom:8}}>{['buy','sell'].map(s=>(<button key={s} onClick={()=>setOForm(f=>({...f,side:s}))} style={{flex:1,padding:'6px',border:`1px solid ${oForm.side===s?(s==='buy'?G:R):C.border}`,borderRadius:5,cursor:'pointer',fontWeight:700,fontSize:11,fontFamily:'inherit',background:oForm.side===s?(s==='buy'?G+'22':R+'22'):'transparent',color:oForm.side===s?(s==='buy'?G:R):C.muted}}>{s==='buy'?'▲ BUY':'▼ SELL'}</button>))}</div>
            <div style={{display:'flex',gap:4,marginBottom:8}}>{['market','limit','stop'].map(k=>(<button key={k} style={{...S.btn(oForm.kind===k?'primary':'ghost',true),flex:1,fontSize:9,textTransform:'uppercase'}} onClick={()=>setOForm(f=>({...f,kind:k}))}>{k}</button>))}</div>
            <input style={{...S.inp,marginBottom:8,fontSize:11}} type="number" placeholder="Quantity" value={oForm.qty} onChange={e=>setOForm(f=>({...f,qty:e.target.value}))}/>
            {(oForm.kind==='limit'||oForm.kind==='stop')&&<input style={{...S.inp,marginBottom:8,fontSize:11}} type="number" placeholder={`${oForm.kind} price`} value={oForm.limitPrice} onChange={e=>setOForm(f=>({...f,limitPrice:e.target.value}))}/>}
            <button style={{...S.btn(oForm.side==='buy'?'buy':'sell'),width:'100%',padding:8,fontSize:12}} onClick={submitOrder}>{oForm.side==='buy'?'▲ BUY':'▼ SELL'} {selId}</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobile=()=>{
    return(<div style={{display:'flex',flexDirection:'column',gap:8}}>
      <div style={{...S.card,padding:10,background:B+'08',border:`1px solid ${B}30`}}>
        <div style={{fontWeight:700,fontSize:12,color:B,marginBottom:4}}>📱 Mobile Trading Mode</div>
        <div style={{fontSize:10,color:C.dim}}>Optimized for touch trading. Swipe charts, 1-tap orders, compact OB.</div>
      </div>
      {/* Symbol quick nav */}
      <div style={{display:'flex',gap:6,overflowX:'auto',paddingBottom:4,flexShrink:0}}>
        {assets.slice(0,10).map(a=>(<button key={a.id} onClick={()=>setSelId(a.id)} style={{flexShrink:0,background:selId===a.id?B+'22':C.bg3,border:`1px solid ${selId===a.id?B:C.border}`,borderRadius:8,padding:'6px 10px',cursor:'pointer',fontFamily:'inherit',minWidth:80,textAlign:'center'}}>
          <div style={{fontSize:10,fontWeight:700,color:selId===a.id?B:C.text}}>{a.id.split('/')[0]}</div>
          <div style={{fontSize:9,color:cc(a.change),fontWeight:600}}>{pct(a.change)}</div>
        </button>))}
      </div>
      {/* Price header */}
      {selAsset&&<div style={{...S.card,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div><div style={{fontSize:20,fontWeight:900}}>{selId}</div><div style={{fontSize:10,color:C.muted}}>{selAsset.name}</div></div>
        <div style={{textAlign:'right'}}><div style={{fontSize:28,fontWeight:700}}>{fp(selAsset.price)}</div><div style={{fontSize:13,color:cc(selAsset.change),fontWeight:700}}>{pct(selAsset.change)}</div></div>
      </div>}
      {/* Mobile chart */}
      <div style={{...S.card,padding:0,overflow:'hidden',height:280,display:'flex',flexDirection:'column'}}>
        <CandleChart candles={selC} slPrice={holding?.sl??null} tpPrice={holding?.tp??null} indicators={indicators}/>
      </div>
      {/* Mobile TF bar */}
      <div style={{display:'flex',gap:4,overflowX:'auto'}}>{['1m','5m','15m','1H','4H','1D'].map(t=><button key={t} style={{...S.btn(tf===t?'primary':'ghost',true),flexShrink:0,padding:'4px 12px',fontSize:11}} onClick={()=>setTf(t)}>{t}</button>)}</div>
      {/* Quick indicators */}
      <div style={{display:'flex',gap:4,overflowX:'auto'}}>{[['EMA9',C.amber,'ema9'],['EMA21',C.purple,'ema21'],['RSI',C.orange,'rsi'],['MACD',B,'macd'],['ST',G,'supertrend']].map(([lbl,col,key])=>(<button key={key} style={{flexShrink:0,padding:'3px 8px',borderRadius:4,border:`1px solid ${indicators[key]?col:C.border}`,fontSize:9,fontWeight:700,cursor:'pointer',fontFamily:'inherit',background:indicators[key]?col+'22':C.bg3,color:indicators[key]?col:C.muted}} onClick={()=>setIndicators(p=>({...p,[key]:!p[key]}))}>  {lbl}</button>))}</div>
      {/* Mobile 1-tap order buttons */}
      {selAsset&&<div style={{display:'flex',flexDirection:'column',gap:6,...S.card}}>
        <div style={{display:'flex',gap:6,marginBottom:4}}>
          <input style={{...S.inp,flex:1,fontSize:14,textAlign:'center'}} type="number" placeholder="Qty" value={oForm.qty} onChange={e=>setOForm(f=>({...f,qty:e.target.value}))}/>
          <div style={{display:'flex',gap:4,flex:1}}>
            <Toggle on={oForm.slOn} onChange={v=>setOForm(f=>({...f,slOn:v}))} color={R}/><span style={{fontSize:10,color:oForm.slOn?R:C.muted,alignSelf:'center'}}>Auto SL</span>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <button style={{...S.btn('buy'),padding:'14px',fontSize:16,letterSpacing:'0.1em'}} onClick={()=>submitOrder('buy','market')}>▲ BUY</button>
          <button style={{...S.btn('sell'),padding:'14px',fontSize:16,letterSpacing:'0.1em'}} onClick={()=>submitOrder('sell','market')}>▼ SELL</button>
        </div>
        <div style={{display:'flex',gap:4}}>
          {[[-1,'Lmt−1%'],[-0.5,'Lmt−0.5%'],[0,'Lmt CMP'],[0.5,'Lmt+0.5%'],[1,'Lmt+1%']].map(([p2,l])=>(<button key={p2} style={{...S.btn('ghost',true),flex:1,fontSize:8,flexDirection:'column',padding:'4px 2px',gap:0,textAlign:'center'}} onClick={()=>tapLimitOrder('buy',p2)}><span style={{color:G,fontWeight:700}}>B</span><span style={{color:C.muted}}>{l}</span></button>))}
        </div>
        <div style={{display:'flex',gap:4}}>
          {[[0,'Lmt CMP'],[0.5,'Lmt+0.5%'],[1,'Lmt+1%'],[1.5,'Lmt+1.5%'],[2,'Lmt+2%']].map(([p2,l])=>(<button key={p2} style={{...S.btn('ghost',true),flex:1,fontSize:8,flexDirection:'column',padding:'4px 2px',gap:0,textAlign:'center'}} onClick={()=>tapLimitOrder('sell',p2)}><span style={{color:R,fontWeight:700}}>S</span><span style={{color:C.muted}}>{l}</span></button>))}
        </div>
      </div>}
      {/* Portfolio summary */}
      <div style={S.card}>
        <div style={S.lbl}>Your Positions</div>
        {portfolio.length===0?<div style={{fontSize:11,color:C.muted,textAlign:'center',padding:'12px 0'}}>No open positions</div>:portfolio.map(h=>{const a=assets.find(x=>x.id===h.id);if(!a)return null;const pp=(a.price-h.avg)/h.avg*100;return(<div key={h.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:`1px solid ${C.bg0}`,cursor:'pointer'}} onClick={()=>setSelId(h.id)}>
          <div><div style={{fontWeight:700}}>{h.id}</div><div style={{fontSize:9,color:C.muted}}>Qty: {h qty.toFixed(4)} · Avg: {fp(h.avg)}</div></div>
          <div style={{textAlign:'right'}}><div style={{fontSize:11,fontWeight:600}}>{fp(a.price)}</div><div style={{fontSize:11,fontWeight:700,color:cc(pp)}}>{pct(pp)}</div></div>
        </div>);})}
      </div>
      {/* Market movers strip */}
      <div style={S.card}>
        <div style={S.lbl}>🔥 Hot Movers</div>
        <div style={{display:'flex',gap:8,overflowX:'auto'}}>
          {topGain.slice(0,5).map(a=>(<div key={a.id} style={{flexShrink:0,background:G+'12',border:`1px solid ${G}30`,borderRadius:6,padding:'6px 10px',cursor:'pointer',minWidth:90,textAlign:'center'}} onClick={()=>setSelId(a.id)}>
            <div style={{fontSize:10,fontWeight:700}}>{a.id.split('/')[0]}</div>
            <div style={{fontSize:9,color:G,fontWeight:700}}>{pct(a.change)}</div>
          </div>))}
          {topLoss.slice(0,5).map(a=>(<div key={a.id} style={{flexShrink:0,background:R+'12',border:`1px solid ${R}30`,borderRadius:6,padding:'6px 10px',cursor:'pointer',minWidth:90,textAlign:'center'}} onClick={()=>setSelId(a.id)}>
            <div style={{fontSize:10,fontWeight:700}}>{a.id.split('/')[0]}</div>
            <div style={{fontSize:9,color:R,fontWeight:700}}>{pct(a.change)}</div>
          </div>))}
        </div>
      </div>
    </div>);
  };

  const renderPortfolio=()=>(
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)',gap:10}}>
        {[{l:'Total Value',v:inr(totalVal),c:B},{l:'Invested',v:inr(portVal),c:C.purple},{l:'Free Cash',v:inr(balance),c:A},{l:'Total P&L',v:`${inr(totalPnl)} (${pct(totalPct)})`,c:cc(totalPnl)}].map(({l,v,c},i)=>(<div key={i} style={{...S.card,borderTop:`2px solid ${c}`}}><div style={S.lbl}>{l}</div><div style={{fontSize:16,fontWeight:700,color:c}}>{v}</div></div>))}
      </div>
      {portHist.length>0&&<div style={S.card}><div style={S.lbl}>Equity Curve</div><ResponsiveContainer width="100%" height={110}><AreaChart data={portHist} margin={{top:4,right:0,left:0,bottom:0}}><defs><linearGradient id="eq2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={cc(totalPnl)} stopOpacity={0.25}/><stop offset="95%" stopColor={cc(totalPnl)} stopOpacity={0}/></linearGradient></defs><YAxis domain={['dataMin - 50000','dataMax + 50000']} hide/><Tooltip contentStyle={{background:C.bg3,border:`1px solid ${C.border}`,fontSize:10}} formatter={v=>[inr(v),'Value']} labelFormatter={()=>''}/><Area type="monotone" dataKey="value" stroke={cc(totalPnl)} strokeWidth={2} fill="url(#eq2)" dot={false}/></AreaChart></ResponsiveContainer></div>}
      <div style={S.card}><div style={S.lbl}>Portfolio Heatmap</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6,marginTop:8}}>{portfolio.map(h=>{const a=assets.find(x=>x.id===h.id);if(!a)return null;const pp=(a.price-h.avg)/h.avg*100;return(<div key={h.id} style={{background:bg,border:`1px solid ${pp>=0?G+44:R+44}`,borderRadius:6,padding:'10px 12px',cursor:'pointer'}} onClick={()=>{setSelId(h.id);setTab('chart');}}><div style={{fontWeight:800,fontSize:13}}>{h.id}</div><div style={{fontSize:10,color:C.muted,marginTop:2}}>{inr(a.price*h qty)}</div><div style={{fontSize:12,fontWeight:700,color:cc(pp),marginTop:4}}>{pct(pp)}</div><Spark candles={(candles[h.id]||[]).slice(-20)} color={cc(pp)} h={22} w={80}/></div>);})}</div></div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 240px',gap:10}}>
        <div style={S.card}><div style={S.lbl}>Holdings</div><table style={S.table}><thead><tr><th style={S.th}>Asset</th><th style={S.th}>Qty</th><th style={S.th}>Avg</th><th style={S.th}>LTP</th><th style={S.th}>Value</th><th style={S.th}>P&L</th><th style={S.th}>SL</th><th style={S.th}>TP</th><th style={S.th}></th></tr></thead><tbody>{portfolio.map(h=>{const a=assets.find(x=>x.id===h.id);if(!a)return null;const val=a.price*h qty,pnl2=val-h.avg*h qty,pp2=(a.price-h.avg)/h.avg*100;return(<tr key={h.id}><td style={S.td}><div style={{fontWeight:700}}>{h.id}</div><div style={{fontSize:9,color:C.muted}}>{a.name.slice(0,14)}</div></td><td style={S.td}>{h qty.toFixed(4)}</td><td style={S.td}>{fp(h.avg)}</td><td style={{...S.td,fontWeight:600}}>{fp(a.price)}</td><td style={{...S.td,fontWeight:600}}>{inr(val)}</td><td style={{...S.td,color:cc(pnl2),fontWeight:700}}>{inr(pnl2)} ({pct(pp2)})</td><td style={{...S.td,color:R,fontSize:10}}>{h.sl!=null?fp(h.sl):'—'}</td><td style={{...S.td,color:G,fontSize:10}}>{h.tp!=null?fp(h.tp):'—'}</td><td style={S.td}><button style={S.btn('sell',true)} onClick={()=>{setSelId(h.id);setOForm(f=>({...f,side:'sell',qty:h qty.toFixed(6),qtyVal:''}));setTab('chart');}}>Sell</button></td></tr>);})}</tbody></table></div>
        <div style={S.card}><div style={S.lbl}>Allocation</div><ResponsiveContainer width="100%" height={170}><PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">{pieData.map((_,i)=><Cell key={i} fill={PIE_C[i%PIE_C.length]}/>)}</Pie><Tooltip contentStyle={{background:C.bg3,border:`1px solid ${C.border}`,fontSize:10}} formatter={v=>[inr(v),'Value']}/></PieChart></ResponsiveContainer>{pieData.map((d,i)=>(<div key={d.name} style={{display:'flex',justifyContent:'space-between',padding:'3px 0'}}><div style={{display:'flex',alignItems:'center',gap:6}}><div style={{width:7,height:7,borderRadius:'50%',background:PIE_C[i%PIE_C.length]}}/><span style={{fontSize:11,fontWeight:700}}>{d.name}</span></div><span style={{fontSize:10,color:C.dim}}>{portVal>0?(d.value/portVal*100).toFixed(1)+'%':'—'}</span></div>))}</div>
      </div>
    </div>
  );

  const renderOrders=()=>(<div style={{display:'flex',flexDirection:'column',gap:10}}>
    <div style={S.card}><div style={S.lbl}>Pending Orders ({pending.length})</div>{pending.length===0?<div style={{fontSize:11,color:C.muted}}>No pending orders</div>:<table style={S.table}><thead><tr><th style={S.th}>Asset</th><th style={S.th}>Side</th><th style={S.th}>Type</th><th style={S.th}>Qty</th><th style={S.th}>Trigger</th><th style={S.th}>SL</th><th style={S.th}>TP</th><th style={S.th}>Placed</th><th style={S.th}></th></tr></thead><tbody>{pending.map(o=>(<tr key={o.id}><td style={{...S.td,fontWeight:700}}>{o.assetId}</td><td style={{...S.td,color:o.side==='buy'?G:R,fontWeight:700}}>{o.side.toUpperCase()}</td><td style={{...S.td,fontSize:10,color:C.muted,textTransform:'uppercase'}}>{o.kind}</td><td style={S.td}>{parseFloat(o.qty).toFixed(4)}</td><td style={S.td}>{fp(o.limitPrice)}</td><td style={{...S.td,color:R,fontSize:10}}>{o.sl!=null?fp(o.sl):'—'}</td><td style={{...S.td,color:G,fontSize:10}}>{o.tp!=null?fp(o.tp):'—'}</td><td style={{...S.td,fontSize:10,color:C.muted}}>{new Date(o.time).toLocaleTimeString()}</td><td style={S.td}><button style={S.btn('danger',true)} onClick={()=>setPending(p=>p.filter(x=>x.id!==o.id))}>Cancel</button></td></tr>))}</tbody></table>}</div>
    <div style={S.card}><div style={S.lbl}>Order History ({orders.length})</div>{orders.length===0?<div style={{fontSize:11,color:C.muted}}>No filled orders yet</div>:<table style={S.table}><thead><tr><th style={S.th}>Asset</th><th style={S.th}>Side</th><th style={S.th}>Type</th><th style={S.th}>Qty</th><th style={S.th}>Price</th><th style={S.th}>Total</th><th style={S.th}>P&L</th><th style={S.th}>SL</th><th style={S.th}>TP</th><th style={S.th}>Time</th></tr></thead><tbody>{orders.map(o=>(<tr key={o.id}><td style={{...S.td,fontWeight:700}}>{o.assetId}</td><td style={{...S.td,color:o.side==='buy'?G:R,fontWeight:700}}>{o.side.toUpperCase()}</td><td style={{...S.td,fontSize:10,color:C.muted,textTransform:'uppercase'}}>{o.kind}</td><td style={S.td}>{parseFloat(o.qty).toFixed(4)}</td><td style={{...S.td,fontWeight:600}}>{fp(o.ep)}</td><td style={{...S.td,fontWeight:600}}>{inr(parseFloat(o.qty)*o.ep)}</td><td style={{...S.td,color:o.pnl!=null?cc(o.pnl):C.muted,fontWeight:700}}>{o.pnl!=null?inr(o.pnl):'—'}</td><td style={{...S.td,color:R,fontSize:10}}>{o.sl!=null?fp(o.sl):'—'}</td><td style={{...S.td,color:G,fontSize:10}}>{o.tp!=null?fp(o.tp):'—'}</td><td style={{...S.td,fontSize:10,color:C.muted}}>{new Date(o.time).toLocaleTimeString()}</td></tr>))}</tbody></table>}</div>
  </div>);

  const renderAnalytics=()=>(<div style={{display:'flex',flexDirection:'column',gap:12}}>
    <div style={{display:'grid',gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(4,1fr)',gap:10}}>
      {[{l:'Win Rate',v:`${ANALYTICS_DATA.winRate}%`,c:G,icon:'🎯'},{l:'Profit Factor',v:ANALYTICS_DATA.profitFactor,c:B,icon:'⚡'},{l:'Avg Win',v:inr(ANALYTICS_DATA.avgWin),c:G,icon:'▲'},{l:'Avg Loss',v:inr(ANALYTICS_DATA.avgLoss),c:R,icon:'▼'},{l:'Sharpe',v:ANALYTICS_DATA.sharpe,c:C.cyan,icon:'📐'},{l:'Max DD',v:`${ANALYTICS_DATA.maxDrawdown}%`,c:R,icon:'📉'},{l:'Total Trades',v:orders.length+34,c:A,icon:'🔄'},{l:'Net P&L',v:inr(totalPnl),c:cc(totalPnl),icon:'💰'}].map(({l,v,c,icon},i)=>(<div key={i} style={{...S.card,borderLeft:`3px solid ${c}`}}><div style={{fontSize:18,marginBottom:4}}>{icon}</div><div style={S.lbl}>{l}</div><div style={{fontSize:16,fontWeight:700,color:c}}>{v}</div></div>))}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
      <div style={S.card}><div style={S.lbl}>Daily P&L (30 days)</div><ResponsiveContainer width="100%" height={160}><BarChart data={ANALYTICS_DATA.daily} margin={{top:4,right:4,left:0,bottom:0}}><XAxis dataKey="date" hide/><YAxis hide/><Tooltip contentStyle={{background:C.bg3,border:`1px solid ${C.border}`,fontSize:10}} formatter={v=>[inr(v),'P&L']}/><Bar dataKey="pnl" radius={[2,2,0,0]}>{ANALYTICS_DATA.daily.map((d,i)=><Cell key={i} fill={d.pnl>=0?G+'88':R+'88'}/>)}</Bar><ReferenceLine y={0} stroke={C.muted} strokeWidth={0.8}/></BarChart></ResponsiveContainer></div>
      <div style={S.card}><div style={S.lbl}>Monthly P&L</div><ResponsiveContainer width="100%" height={160}><BarChart data={ANALYTICS_DATA.monthly} margin={{top:4,right:4,left:0,bottom:0}}><XAxis dataKey="month" tick={{fontSize:9,fill:C.muted}}/><YAxis hide/><Tooltip contentStyle={{background:C.bg3,border:`1px solid ${C.border}`,fontSize:10}} formatter={v=>[inr(v),'P&L']}/><Bar dataKey="pnl" radius={[3,3,0,0]}>{ANALYTICS_DATA.monthly.map((d,i)=><Cell key={i} fill={d.pnl>=0?G+'aa':R+'aa'}/>)}</Bar><ReferenceLine y={0} stroke={C.muted} strokeWidth={0.8}/></BarChart></ResponsiveContainer></div>
    </div>
    <div style={S.card}><div style={S.lbl}>By Symbol</div><table style={S.table}><thead><tr><th style={S.th}>Symbol</th><th style={S.th}>Trades</th><th style={S.th}>P&L</th><th style={S.th}>Win Rate</th><th style={S.th}>Avg P&L/Trade</th></tr></thead><tbody>{ANALYTICS_DATA.bySymbol.map((r,i)=>(<tr key={i}><td style={{...S.td,fontWeight:700}}>{r.symbol}</td><td style={S.td}>{r.trades}</td><td style={{...S.td,color:cc(r.pnl),fontWeight:700}}>{inr(r.pnl)}</td><td style={{...S.td,color:r.wr>=60?G:r.wr>=50?A:R}}>{r.wr}%</td><td style={{...S.td,color:cc(r.pnl/r.trades)}}>{inr(r.pnl/r.trades)}</td></tr>))}</tbody></table></div>
  </div>);

  const renderLeaderboard=()=>(<div style={{display:'flex',flexDirection:'column',gap:10}}>
    <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(3,1fr)',gap:10}}>
      {LEADERBOARD_DATA.slice(0,3).map((u,i)=>(<div key={i} style={{...S.card,borderTop:`3px solid ${i===0?'#FFD700':i===1?'#C0C0C0':'#CD7F32'}`,textAlign:'center'}}>
        <div style={{fontSize:32,marginBottom:8}}>{i===0?'🥇':i===1?'🥈':'🥉'}</div>
        <div style={{width:40,height:40,borderRadius:'50%',background:`linear-gradient(135deg,${B},${C.purple})`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:700,color:'#000',margin:'0 auto 8px'}}>{u.avatar}</div>
        <div style={{fontWeight:800,fontSize:14,marginBottom:2}}>{u.name}</div>
        <div style={{fontSize:20,fontWeight:700,color:G}}>{inr(u.pnl)}</div>
        <div style={{fontSize:11,color:C.dim}}>{pct(u.pnl_pct)} returns</div>
        <div style={{marginTop:6,display:'inline-block',padding:'2px 8px',borderRadius:10,background:BADGE_C[u.badge]+'22',border:`1px solid ${BADGE_C[u.badge]}44`,color:BADGE_C[u.badge],fontSize:10,fontWeight:700}}>{u.badge}</div>
      </div>))}
    </div>
    <div style={S.card}><div style={S.lbl}>Full Leaderboard</div><table style={S.table}><thead><tr><th style={S.th}>#</th><th style={S.th}>Trader</th><th style={S.th}>P&L</th><th style={S.th}>Returns</th><th style={S.th}>Trades</th><th style={S.th}>Win Rate</th><th style={S.th}>Streak</th><th style={S.th}>Badge</th></tr></thead><tbody>{LEADERBOARD_DATA.map(u=>(<tr key={u.rank} style={{background:u.isMe?B+'0a':'transparent'}}><td style={{...S.td,fontWeight:700,color:u.rank<=3?'#FFD700':C.dim}}>{u.rank}</td><td style={S.td}><div style={{display:'flex',alignItems:'center',gap:8}}><div style={{width:28,height:28,borderRadius:'50%',background:`linear-gradient(135deg,${B},${C.purple})`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:700,color:'#fff'}}>{u.avatar}</div><div><div style={{fontWeight:700,fontSize:11}}>{u.name}{u.isMe&&<span style={{color:B,marginLeft:4}}>(You)</span>}</div></div></div></td><td style={{...S.td,color:G,fontWeight:700}}>{inr(u.pnl)}</td><td style={{...S.td,color:G,fontWeight:700}}>{pct(u.pnl_pct)}</td><td style={S.td}>{u.trades}</td><td style={{...S.td,color:u.win_rate>=60?G:u.win_rate>=50?A:R}}>{u.win_rate}%</td><td style={{...S.td,color:A}}>{u.streak>0?`🔥 ${u.streak}`:'—'}</td><td style={S.td}><span style={{padding:'2px 7px',borderRadius:8,fontSize:9,fontWeight:700,background:BADGE_C[u.badge]+'22',color:BADGE_C[u.badge]}}>{u.badge}</span></td></tr>))}</tbody></table></div>
  </div>);

  const renderAI=()=>(<div style={{display:'flex',flexDirection:'column',height:'100%',gap:8}}>
    <div style={{...S.card,display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
      <div><div style={{fontWeight:700,fontSize:13}}>🤖 APEX AI Assistant</div><div style={{fontSize:10,color:C.muted}}>Powered by Claude · Market analysis · Portfolio insights</div></div>
      <div style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:G,fontWeight:700}}><span style={{width:6,height:6,borderRadius:'50%',background:G,display:'inline-block',animation:'blink 1.5s infinite'}}/>LIVE</div>
    </div>
    <div style={{...S.card,flex:1,overflow:'auto',display:'flex',flexDirection:'column',gap:8,padding:12}}>
      {aiChat.map((m,i)=>(<div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start'}}>
        <div style={{maxWidth:'80%',padding:'10px 14px',borderRadius:m.role==='user'?'12px 12px 4px 12px':'12px 12px 12px 4px',background:m.role==='user'?B+'22':C.bg2,border:`1px solid ${m.role==='user'?B+'33':C.border}`,fontSize:12,color:C.text,lineHeight:1.6,whiteSpace:'pre-wrap',fontFamily:'"IBM Plex Mono",monospace'}}>{m.content}</div>
      </div>))}
      {aiLoading&&<div style={{display:'flex',gap:6,alignItems:'center',padding:'10px 14px'}}><span style={{width:6,height:6,borderRadius:'50%',background:B,animation:'blink 0.8s infinite'}}/><span style={{width:6,height:6,borderRadius:'50%',background:B,animation:'blink 0.8s 0.2s infinite'}}/><span style={{width:6,height:6,borderRadius:'50%',background:B,animation:'blink 0.8s 0.4s infinite'}}/><span style={{fontSize:10,color:C.muted,marginLeft:4}}>AI is analyzing…</span></div>}
      <div ref={chatEndRef}/>
    </div>
    <div style={{display:'flex',gap:8,flexShrink:0}}>
      <input style={{...S.inp,flex:1}} placeholder="Ask about market analysis, IPOs, MTF strategy, risk…" value={aiInput} onChange={e=>setAiInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAiMessage();}}}/>
      <button style={{...S.btn('primary'),padding:'8px 16px',flexShrink:0}} onClick={sendAiMessage} disabled={aiLoading}>{aiLoading?'…':'Send'}</button>
    </div>
    <div style={{display:'flex',gap:4,flexWrap:'wrap',flexShrink:0}}>
      {['Analyze NIFTY','IPO outlook','MTF strategy','Best mutual funds','Portfolio risk','RELIANCE target'].map(q=>(<button key={q} style={{...S.btn('ghost',true),fontSize:9,padding:'3px 8px'}} onClick={()=>{setAiInput(q);}}>{q}</button>))}
    </div>
  </div>);

  const renderAlerts=()=>{
    return(<div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div style={S.card}>
        <div style={S.lbl}>Create Price Alert</div>
        <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr 1fr 2fr',gap:8,marginBottom:10}}>
          <div><div style={S.lbl}>Symbol</div><select style={S.inp} value={alertForm.symbol} onChange={e=>setAlertForm(f=>({...f,symbol:e.target.value}))}><option value="">Select…</option>{assets.map(a=><option key={a.id} value={a.id}>{a.id}</option>)}</select></div>
          <div><div style={S.lbl}>Condition</div><select style={S.inp} value={alertForm.type} onChange={e=>setAlertForm(f=>({...f,type:e.target.value}))}><option value="above">Price Above</option><option value="below">Price Below</option></select></div>
          <div><div style={S.lbl}>Price</div><input style={S.inp} type="number" placeholder="0.00" value={alertForm.price} onChange={e=>setAlertForm(f=>({...f,price:e.target.value}))}/></div>
          <div><div style={S.lbl}>Note (optional)</div><input style={S.inp} placeholder="e.g. Resistance breakout" value={alertForm.note} onChange={e=>setAlertForm(f=>({...f,note:sanitize(e.target.value)}))}/></div>
        </div>
        <button style={S.btn('primary')} onClick={()=>{if(!alertForm.symbol||!alertForm.price)return;setAlerts(a=>[...a,{id:Date.now(),symbol:alertForm.symbol,type:alertForm.type,price:parseFloat(alertForm.price),triggered:false,note:sanitize(alertForm.note)}]);setAlertForm({symbol:'',type:'above',price:'',note:''});showToast('Alert created','success');}}>+ Add Alert</button>
      </div>
      <div style={S.card}>
        <div style={S.lbl}>Active Alerts ({alerts.filter(a=>!a.triggered).length})</div>
        {alerts.filter(a=>!a.triggered).map(a=>(<div key={a.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:`1px solid ${C.bg0}`}}>
          <div><div style={{fontWeight:700,fontSize:12}}>{a.symbol}</div><div style={{fontSize:10,color:C.muted}}>{a.type==='above'?'▲ Above':'▼ Below'} {fp(a.price)}{a.note&&<span style={{marginLeft:8,color:C.dim}}>{a.note}</span>}</div></div>
          <div style={{display:'flex',gap:6,alignItems:'center'}}>
            <div style={{fontSize:10,color:C.muted}}>Current: {fp(assets.find(x=>x.id===a.symbol)?.price||0)}</div>
            <button style={S.btn('danger',true)} onClick={()=>setAlerts(p=>p.filter(x=>x.id!==a.id))}>✕</button>
          </div>
        </div>))}
        {alerts.filter(a=>a.triggered).length>0&&<><div style={{...S.lbl,marginTop:12}}>Triggered Alerts</div>{alerts.filter(a=>a.triggered).map(a=>(<div key={a.id} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',opacity:0.5,borderBottom:`1px solid ${C.bg0}`}}><span style={{fontSize:11}}>{a.symbol} {a.type==='above'?'▲':'▼'} {fp(a.price)}</span><span style={{fontSize:10,color:G}}>✓ Triggered</span></div>))}</>}
      </div>
    </div>);
  };

  const renderJournal=()=>(<div style={{display:'flex',flexDirection:'column',gap:10}}>
    <div style={S.card}>
      <div style={S.lbl}>Add Trade Entry</div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(4,1fr)',gap:8,marginBottom:10}}>
        <div><div style={S.lbl}>Symbol</div><input style={S.inp} placeholder="e.g. RELIANCE" value={journalForm.symbol} onChange={e=>setJournalForm(f=>({...f,symbol:sanitize(e.target.value)}))}/></div>
        <div><div style={S.lbl}>Side</div><select style={S.inp} value={journalForm.side} onChange={e=>setJournalForm(f=>({...f,side:e.target.value}))}><option value="buy">Buy</option><option value="sell">Sell</option></select></div>
        <div><div style={S.lbl}>Entry Price</div><input style={S.inp} type="number" placeholder="0" value={journalForm.entry} onChange={e=>setJournalForm(f=>({...f,entry:e.target.value}))}/></div>
        <div><div style={S.lbl}>Exit Price</div><input style={S.inp} type="number" placeholder="0" value={journalForm.exit} onChange={e=>{const exit=parseFloat(e.target.value),entry=parseFloat(journalForm.entry),qty=parseFloat(journalForm.qty)||1;const pnl2=isFinite(exit)&&isFinite(entry)?((journalForm.side==='buy'?exit-entry:entry-exit)*qty).toFixed(2):'';setJournalForm(f=>({...f,exit:e.target.value,pnl:pnl2}));}}/></div>
        <div><div style={S.lbl}>Quantity</div><input style={S.inp} type="number" placeholder="0" value={journalForm.qty} onChange={e=>setJournalForm(f=>({...f,qty:e.target.value}))}/></div>
        <div><div style={S.lbl}>Emotion</div><select style={S.inp} value={journalForm.emotion} onChange={e=>setJournalForm(f=>({...f,emotion:e.target.value}))}><option>calm</option><option>confident</option><option>fearful</option><option>greedy</option><option>anxious</option></select></div>
        <div><div style={S.lbl}>Setup</div><input style={S.inp} placeholder="e.g. Breakout" value={journalForm.setup} onChange={e=>setJournalForm(f=>({...f,setup:sanitize(e.target.value)}))}/></div>
        <div><div style={S.lbl}>Calc P&L</div><div style={{...S.inp,display:'flex',alignItems:'center',color:cc(parseFloat(journalForm.pnl)),fontWeight:700}}>{journalForm.pnl?inr(parseFloat(journalForm.pnl)):'—'}</div></div>
      </div>
      <div style={{marginBottom:10}}><div style={S.lbl}>Notes</div><textarea style={{...S.inp,height:60,resize:'vertical'}} placeholder="What worked, what didn't, lessons learned…" value={journalForm.notes} onChange={e=>setJournalForm(f=>({...f,notes:sanitize(e.target.value)}))}/></div>
      <button style={S.btn('primary')} onClick={()=>{if(!journalForm.symbol)return;setJournal(j=>[{id:Date.now(),date:new Date().toISOString().slice(0,10),...journalForm,pnl:parseFloat(journalForm.pnl)||0},...j]);setJournalForm({symbol:'',side:'buy',qty:'',entry:'',exit:'',pnl:'',emotion:'calm',setup:'',notes:''});showToast('Trade logged','success');}}>+ Log Trade</button>
    </div>
    <div style={S.card}><div style={S.lbl}>Journal ({journal.length} trades)</div><table style={S.table}><thead><tr><th style={S.th}>Date</th><th style={S.th}>Symbol</th><th style={S.th}>Side</th><th style={S.th}>Qty</th><th style={S.th}>Entry</th><th style={S.th}>Exit</th><th style={S.th}>P&L</th><th style={S.th}>Emotion</th><th style={S.th}>Setup</th><th style={S.th}>Notes</th></tr></thead><tbody>{journal.map(t=>(<tr key={t.id}><td style={{...S.td,fontSize:10,color:C.muted}}>{t.date}</td><td style={{...S.td,fontWeight:700}}>{t.symbol}</td><td style={{...S.td,color:t.side==='buy'?G:R,fontWeight:700}}>{t.side.toUpperCase()}</td><td style={S.td}>{t qty}</td><td style={S.td}>{fp(t.entry)}</td><td style={S.td}>{fp(t.exit)}</td><td style={{...S.td,color:cc(t.pnl),fontWeight:700}}>{inr(t.pnl)}</td><td style={{...S.td,fontSize:10,color:C.muted}}>{t.emotion}</td><td style={{...S.td,fontSize:10,color:C.dim}}>{t.setup}</td><td style={{...S.td,fontSize:10,color:C.muted,maxWidth:160,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{t.notes}</td></tr>))}</tbody></table></div>
  </div>);

  const renderRisk=()=>(<div style={{display:'flex',flexDirection:'column',gap:10}}>
    <div style={S.card}>
      <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>🧮 Position Size & Risk Calculator</div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(3,1fr)',gap:10,marginBottom:12}}>
        {[{l:'Entry Price',k:'entry',ph:'e.g. 2847.50'},{l:'Stop Loss',k:'sl',ph:'e.g. 2750.00'},{l:'Target Price',k:'target',ph:'e.g. 3000.00'},{l:'Capital (₹)',k:'capital',ph:'e.g. 100000'},{l:'Risk %',k:'riskPct',ph:'e.g. 2'}].map(({l,k,ph})=>(<div key={k}><div style={S.lbl}>{l}</div><input style={S.inp} type="number" placeholder={ph} value={riskCalc[k]} onChange={e=>setRiskCalc(r=>({...r,[k]:e.target.value}))}/></div>))}
      </div>
      {riskCalcResult&&<div style={{background:C.bg0,border:`1px solid ${riskCalcResult.rrRatio>=2?G:riskCalcResult.rrRatio>=1?A:R}33`,borderRadius:8,padding:16}}>
        <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(3,1fr)',gap:12}}>
          {[{l:'Recommended Qty',v:riskCalcResult.positionSize,c:B},{l:'Risk Per Unit',v:inr(riskCalcResult.riskPerUnit),c:R},{l:'Total Risk',v:inr(riskCalcResult.totalRisk),c:R},{l:'Max Risk Amount',v:inr(riskCalcResult.maxRiskAmt),c:A},...(riskCalcResult.reward?[{l:'Potential Reward',v:inr(riskCalcResult.reward),c:G}]:[]),...(riskCalcResult.rrRatio!=null?[{l:'Risk:Reward',v:`1 : ${riskCalcResult.rrRatio.toFixed(2)}`,c:riskCalcResult.rrRatio>=2?G:riskCalcResult.rrRatio>=1?A:R}]:[])].map(({l,v,c},i)=>(<div key={i} style={{textAlign:'center'}}><div style={S.lbl}>{l}</div><div style={{fontSize:18,fontWeight:700,color:c}}>{v}</div></div>))}
        </div>
        {riskCalcResult.rrRatio!=null&&<div style={{marginTop:12,padding:'8px 12px',background:riskCalcResult.rrRatio>=2?G+'12':riskCalcResult.rrRatio>=1?A+'12':R+'12',borderRadius:5,fontSize:10,color:riskCalcResult.rrRatio>=2?G:riskCalcResult.rrRatio>=1?A:R,textAlign:'center'}}>{riskCalcResult.rrRatio>=2?'✅ Excellent R:R ratio — favourable trade setup':riskCalcResult.rrRatio>=1?'⚠ Acceptable R:R — consider tightening SL or widening target':'❌ Poor R:R ratio — not recommended'}</div>}
      </div>}
    </div>
  </div>);

  const renderGTT=()=>(<div style={{display:'flex',flexDirection:'column',gap:10}}>
    <div style={S.card}>
      <div style={S.lbl}>Create GTT Order (Good Till Triggered)</div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(4,1fr)',gap:8,marginBottom:10}}>
        <div><div style={S.lbl}>Symbol</div><select style={S.inp} value={gForm.symbol} onChange={e=>setGForm(f=>({...f,symbol:e.target.value}))}>{assets.map(a=><option key={a.id} value={a.id}>{a.id}</option>)}</select></div>
        <div><div style={S.lbl}>Side</div><select style={S.inp} value={gForm.side} onChange={e=>setGForm(f=>({...f,side:e.target.value}))}><option value="buy">Buy</option><option value="sell">Sell</option></select></div>
        <div><div style={S.lbl}>Trigger Type</div><select style={S.inp} value={gForm.triggerType} onChange={e=>setGForm(f=>({...f,triggerType:e.target.value}))}><option value="above">Above</option><option value="below">Below</option></select></div>
        <div><div style={S.lbl}>Trigger Price</div><input style={S.inp} type="number" placeholder="0" value={gForm.trigger} onChange={e=>setGForm(f=>({...f,trigger:e.target.value}))}/></div>
        <div><div style={S.lbl}>Quantity</div><input style={S.inp} type="number" placeholder="0" value={gForm.qty} onChange={e=>setGForm(f=>({...f,qty:e.target.value}))}/></div>
        <div><div style={S.lbl}>Limit Price (opt)</div><input style={S.inp} type="number" placeholder="Market" value={gForm.limitPrice} onChange={e=>setGForm(f=>({...f,limitPrice:e.target.value}))}/></div>
        <div><div style={S.lbl}>Stop Loss (opt)</div><input style={S.inp} type="number" placeholder="0" value={gForm.sl} onChange={e=>setGForm(f=>({...f,sl:e.target.value}))}/></div>
        <div><div style={S.lbl}>Take Profit (opt)</div><input style={S.inp} type="number" placeholder="0" value={gForm.tp} onChange={e=>setGForm(f=>({...f,tp:e.target.value}))}/></div>
      </div>
      <button style={S.btn('primary')} onClick={()=>{if(!gForm.symbol||!gForm.trigger||!gForm.qty)return;setGttOrders(g=>[...g,{id:genUUID(),assetId:g.symbol,side:g.side,qty:parseFloat(g.qty),trigger:parseFloat(g.trigger),triggerType:g.triggerType,limitPrice:g.limitPrice?parseFloat(g.limitPrice):null,sl:g.sl?parseFloat(g.sl):null,tp:g.tp?parseFloat(g.tp):null,status:'active',createdAt:Date.now()}]);setGForm(f=>({...f,qty:'',trigger:'',limitPrice:'',sl:'',tp:''}));showToast('GTT order placed','success');}}>+ Place GTT Order</button>
    </div>
    <div style={S.card}><div style={S.lbl}>Active GTT Orders ({gttOrders.filter(g=>g.status==='active').length})</div>{gttOrders.filter(g=>g.status==='active').length===0?<div style={{fontSize:11,color:C.muted}}>No active GTT orders</div>:gttOrders.filter(g=>g.status==='active').map(g=>(<div key={g.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:`1px solid ${C.bg0}`}}><div><div style={{fontWeight:700,fontSize:12}}>{g.assetId}</div><div style={{fontSize:10,color:C.muted}}>{g.side.toUpperCase()} {g.qty} · Trigger {g.triggerType} {fp(g.trigger)}{g.limitPrice?` · Limit ${fp(g.limitPrice)}`:' · Market'}</div></div><button style={S.btn('danger',true)} onClick={()=>setGttOrders(o=>o.filter(x=>x.id!==g.id))}>Cancel</button></div>))}</div>
  </div>);

  // ── SIDEBAR ──────────────────────────────────────────────────────────────────
  const sidebarW = isMobile ? 0 : sidebarCollapsed ? 52 : 220;
  const sidebarProps = {isMobile,setSidebarCollapsed,user,portColor,totalVal,NAV,tab,setTab,setSidebarOpen,setUser};

  // ── MAIN LAYOUT ───────────────────────────────────────────────────────────────
  return(
    <div style={{display:'flex',height:'100vh',background:C.bg1,color:C.text,fontFamily:'"IBM Plex Mono",monospace',overflow:'hidden',fontSize:12}}>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}} input:focus,select:focus{border-color:${B}!important;outline:none;} .apex-slider{-webkit-appearance:none;width:100%;height:3px;border-radius:2px;background:linear-gradient(to right,var(--tc) var(--pct),${C.b2} var(--pct));outline:none;} .apex-slider::-webkit-slider-thumb{-webkit-appearance:none;width:13px;height:13px;border-radius:50%;background:var(--tc);cursor:pointer;} .apex-slider::-moz-range-thumb{width:13px;height:13px;border-radius:50%;background:var(--tc);cursor:pointer;border:none;} ::-webkit-scrollbar{width:4px;height:4px;} ::-webkit-scrollbar-thumb{background:${C.b2};border-radius:2px;} .apex-content-scroll::-webkit-scrollbar{width:4px;}.apex-content-scroll::-webkit-scrollbar-thumb{background:${C.b2};border-radius:2px;} select{-webkit-appearance:none;}`}</style>

      {/* Sidebar — desktop */}
      {!isMobile&&<div style={S.sidebar(sidebarW)}><SidebarContent collapsed={sidebarCollapsed} {...sidebarProps}/></div>}

      {/* Drawer — mobile */}
      {isMobile&&<div style={S.drawerOverlay(sidebarOpen)} onClick={()=>setSidebarOpen(false)}>
        <div style={{...S.drawerPanel(sidebarOpen),position:'relative'}} onClick={e=>e.stopPropagation()}>
          <SidebarContent collapsed={false} {...sidebarProps}/>
        </div>
        <div style={{flex:1,background:'rgba(0,0,0,0.5)'}}/>
      </div>

      <div style={S.main}>
        {/* Topbar */}
        <div style={S.topbar}>
          <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0}}>
            {isMobile&&<button onClick={()=>setSidebarOpen(true)} style={{background:'transparent',border:'none',cursor:'pointer',color:C.dim,fontSize:20,padding:4,flexShrink:0}}>☰</button>}
            <div style={{display:'flex',alignItems:'center',gap:4,overflow:'hidden'}}>
              <span style={{fontWeight:700,fontSize:isMobile?11:12,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{NAV.find(n=>n.id===tab)?.emoji} {NAV.find(n=>n.id===tab)?.label}</span>
              {!isMobile&&selAsset&&<div style={{display:'flex',gap:8,marginLeft:12,alignItems:'center'}}><span style={{fontWeight:700,fontSize:12,color:C.text}}>{selId}</span><span style={{fontSize:11,fontWeight:600}}>{fp(selAsset.price)}</span><span style={{fontSize:10,color:cc(selAsset.change),fontWeight:700}}>{pct(selAsset.change)}</span></div>}
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
            {/* Notifs */}
            <div style={{position:'relative',flexShrink:0}}>
              <button style={{...S.btn('ghost',true),padding:'4px 8px',fontSize:14,position:'relative'}} onClick={()=>setShowNotifs(p=>!p)}>
                🔔{unreadNotifs>0&&<span style={{position:'absolute',top:-2,right:-2,background:R,color:'#fff',borderRadius:'50%',width:14,height:14,fontSize:8,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center'}}>{unreadNotifs}</span>}
              </button>
              {showNotifs&&<div style={{position:'absolute',right:0,top:'calc(100% + 8px)',width:isMobile?'calc(100vw - 24px)':320,background:C.bg3,border:`1px solid ${C.border}`,borderRadius:10,boxShadow:`0 16px 48px rgba(0,0,0,0.7)`,zIndex:1000,overflow:'hidden'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',borderBottom:`1px solid ${C.border}`}}><span style={{fontWeight:700,fontSize:12}}>Notifications</span><button style={{...S.btn('ghost',true),fontSize:9,padding:'2px 8px'}} onClick={()=>setNotifications(p=>p.map(n=>({...n,read:true})))}>Mark all read</button></div>
                <div style={{maxHeight:320,overflow:'auto'}}>{notifications.length===0?<div style={{padding:'24px',textAlign:'center',color:C.muted,fontSize:11}}>No notifications</div>:notifications.map(n=>(<div key={n.id} style={{display:'flex',gap:10,padding:'10px 14px',borderBottom:`1px solid ${C.border}`,background:n.read?'transparent':B+'0a',cursor:'pointer'}} onClick={()=>setNotifications(p=>p.map(x=>x.id===n.id?{...x,read:true}:x))}><span style={{fontSize:16,flexShrink:0}}>{n.type==='alert'?'🔔':n.type==='filled'?'✅':'ℹ️'}</span><div style={{minWidth:0}}><div style={{fontSize:11,color:n.read?C.muted:C.text}}>{n.msg}</div><div style={{fontSize:9,color:C.muted,marginTop:2}}>{new Date(n.time).toLocaleTimeString()}</div></div>{!n.read&&<div style={{width:7,height:7,borderRadius:'50%',background:B,marginLeft:'auto',flexShrink:0,marginTop:4}}/>}</div>))}</div>
              </div>}
            </div>
            <div style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:G,fontWeight:700,flexShrink:0}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:G,display:'inline-block',animation:'blink 1.5s infinite'}}/>
              {!isMobile&&'LIVE'}
            </div>
          </div>
        </div>
        {/* Page */}
        <div ref={contentRef} style={{...S.content,paddingBottom:isMobile?72:14}} className="apex-content-scroll">
          {tab==='dashboard'  &&renderDashboard()}
          {tab==='chart'      &&renderChart()}
          {tab==='dualchart'  &&renderDualChart()}
          {tab==='markets'    &&renderMarkets()}
          {tab==='mtf'        &&renderMTF()}
          {tab==='desktop'    &&renderDesktop()}
          {tab==='mobile'     &&renderMobile()}
          {tab==='portfolio'  &&renderPortfolio()}
          {tab==='orders'     &&renderOrders()}
          {tab==='analytics'  &&renderAnalytics()}
          {tab==='leaderboard'&&renderLeaderboard()}
          {tab==='ai'         &&renderAI()}
          {tab==='alerts'     &&renderAlerts()}
          {tab==='journal'    &&renderJournal()}
          {tab==='risk'       &&renderRisk()}
          {tab==='gtt'        &&renderGTT()}
        </div>
      </div>

      {/* Mobile bottom nav */}
      {isMobile&&<div style={{position:'fixed',bottom:0,left:0,right:0,zIndex:400,background:C.bg2,borderTop:`1px solid ${C.border}`,display:'flex',alignItems:'stretch',height:60,boxShadow:'0 -4px 24px rgba(0,0,0,0.5)'}}>
        {[...NAV.slice(0,4),{id:'__more__',emoji:'⋯',label:'More'}].map(({id,emoji,label,badge})=>{
          const active=id==='__more__'?!NAV.slice(0,4).find(n=>n.id===tab):tab===id;
          return(<button key={id} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:3,background:'transparent',border:'none',cursor:'pointer',position:'relative',color:active?B:C.muted,borderTop:active?`2px solid ${B}`:'2px solid transparent',transition:'all 0.15s',padding:'6px 2px'}} onClick={()=>{if(id==='__more__')setSidebarOpen(true);else setTab(id);}}>
            {id==='orders'&&pending.length>0&&<span style={{position:'absolute',top:6,right:'calc(50% - 14px)',width:8,height:8,borderRadius:'50%',background:A}}/>}
            {badge&&<span style={{position:'absolute',top:6,right:'calc(50% - 12px)',width:8,height:8,borderRadius:'50%',background:R}}/>}
            <span style={{fontSize:20,lineHeight:1,filter:active?`drop-shadow(0 0 8px ${B})`:'none'}}>{emoji}</span>
            <span style={{fontSize:9,fontWeight:active?700:400}}>{label}</span>
          </button>);
        })}
      </div>}

      {/* Fullscreen chart */}
      {chartFullscreen&&<div style={{position:'fixed',inset:0,zIndex:8000,background:C.bg0,display:'flex',flexDirection:'column'}}>
        <div style={{background:C.bg2,borderBottom:`1px solid ${C.border}`,display:'flex',flexDirection:'column',flexShrink:0}}>
          <div style={{height:42,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 14px',gap:8}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}><span style={{fontWeight:800,fontSize:15}}>{selId}</span>{selAsset&&<span style={S.tag(selAsset.type)}>{selAsset.type}</span>}<span style={{fontSize:13,fontWeight:700}}>{selAsset?fp(selAsset.price):'—'}</span>{selAsset&&<span style={{fontSize:11,color:cc(selAsset.change),fontWeight:700}}>{pct(selAsset.change)}</span>}{holding&&<span style={{fontSize:10,color:A,background:A+'18',padding:'2px 7px',borderRadius:3}}>{inr(holdPnl)}</span>}</div>
            <button style={{...S.btn('danger',true),padding:'5px 14px',fontSize:11}} onClick={()=>setChartFullscreen(false)}>✕ Exit</button>
          </div>
          <div style={{display:'flex',gap:4,padding:'0 8px 8px',overflowX:'auto',flexShrink:0,scrollbarWidth:'none'}}>
            {['1m','5m','15m','1H','4H','1D','1W'].map(t=><button key={t} style={{...S.btn(tf===t?'primary':'ghost',true),padding:'4px 10px',fontSize:10,flexShrink:0}} onClick={()=>setTf(t)}>{t}</button>)}
            <div style={{width:1,height:18,background:C.border,margin:'0 2px',flexShrink:0}}/>
            {[['EMA9',C.amber,'ema9'],['EMA21',C.purple,'ema21'],['BB',C.cyan,'bb'],['VWAP',C.teal,'vwap'],['RSI',C.orange,'rsi'],['MACD',B,'macd'],['ST',G,'supertrend'],['Stoch',C.cyan,'stoch']].map(([lbl,col,key])=>(<button key={key} style={{padding:'4px 9px',borderRadius:4,border:`1px solid ${indicators[key]?col:C.border}`,fontSize:9,fontWeight:700,cursor:'pointer',fontFamily:'inherit',background:indicators[key]?col+'22':C.bg3,color:indicators[key]?col:C.muted,flexShrink:0}} onClick={()=>setIndicators(p=>({...p,[key]:!p[key]}))}>{lbl}</button>))}
          </div>
        </div>
        <div style={{flex:1,padding:8,display:'flex',flexDirection:'column',minHeight:0}}>
          <div style={{flex:1,borderRadius:8,overflow:'hidden',border:`1px solid ${C.border}`,display:'flex',flexDirection:'column'}}>
            <CandleChart candles={selC} slPrice={holding?.sl??null} tpPrice={holding?.tp??null} indicators={indicators}/>
          </div>
        </div>
        <div style={{padding:'4px 14px',fontSize:9,color:C.muted,background:C.bg0,textAlign:'center',flexShrink:0}}>🖱 Scroll to zoom · Drag to pan · <kbd style={{background:C.bg3,border:`1px solid ${C.border}`,borderRadius:3,padding:'1px 5px',fontSize:9}}>Esc</kbd> to exit</div>
      </div>}

      {/* Order confirmation modal */}
      {confirmOrder&&<OrderConfirmModal order={confirmOrder} onConfirm={confirmAndExecute} onCancel={()=>setConfirmOrder(null) />}

      {/* Notifs backdrop */}
      {showNotifs&&<div style={{position:'fixed',inset:0,zIndex:999}} onClick={()=>setShowNotifs(false) />}

      {/* Toast */}
      {toast&&<div style={{position:'fixed',bottom:isMobile?70:20,right:isMobile?12:20,left:isMobile?12:'auto',zIndex:9999,background:toast.type==='success'?G+'18':toast.type==='error'?R+'18':toast.type==='warning'?A+'18':B+'18',border:`1px solid ${toast.type==='success'?G:toast.type==='error'?R:toast.type==='warning'?A:B}44`,color:toast.type==='success'?G:toast.type==='error'?R:toast.type==='warning'?A:'#7eb3ff',borderRadius:10,padding:'11px 16px',fontSize:12,fontWeight:700,display:'flex',alignItems:'center',gap:8,boxShadow:'0 8px 30px rgba(0,0,0,0.6)',fontFamily:'inherit',backdropFilter:'blur(6px)'}}>{toast.msg}</div>}
    </div>
  );
}
