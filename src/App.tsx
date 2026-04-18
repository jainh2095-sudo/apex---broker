import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ReferenceLine, LineChart, Line } from "recharts";

// Apple-inspired color palette with more sophistication
const C = {
  // Core colors
  black: '#000000',
  white: '#ffffff',
  gray: {
    50: '#f9f9f9',
    100: '#f2f2f7',
    200: '#e5e5ea',
    300: '#d1d1d6',
    400: '#c7c7cc',
    500: '#aeaeb2',
    600: '#8e8e93',
    700: '#636366',
    800: '#48484a',
    900: '#1c1c1e',
  },
  blue: '#007aff',
  green: '#34c759',
  red: '#ff3b30',
  orange: '#ff9500',
  purple: '#af52de',
  cyan: '#5ac8fa',
  teal: '#30d158',
  yellow: '#ffcc00',
  pink: '#ff2d55',
  indigo: '#5856d6',

  // Semantic colors
  systemGreen: '#30d158',
  systemRed: '#ff3b30',
  systemBlue: '#007aff',
  systemOrange: '#ff9500',
  systemPurple: '#af52de',
  systemTeal: '#5ac8fa',
  systemYellow: '#ffcc00',
  systemPink: '#ff2d55',
  systemIndigo: '#5856d6',

  // Backgrounds
  bgPrimary: '#000000',
  bgSecondary: '#1c1c1e',
  bgTertiary: '#2c2c2e',
  bgQuaternary: '#3a3a3c',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#ebebf5',
  textTertiary: '#c7c7cc',
  textQuaternary: '#8e8e93',

  // Separators
  separatorOpaque: '#38383a',
  separatorNonOpaque: '#545458',
};

// Utility functions with Apple precision
const formatPrice = (price: number | null) => {
  if (price == null || isNaN(price)) return '—';
  if (Math.abs(price) >= 10000000) return `₹${(price / 10000000).toFixed(2)}Cr`;
  if (Math.abs(price) >= 100000) return `₹${(price / 100000).toFixed(2)}L`;
  if (Math.abs(price) >= 1000) return `₹${(price / 1000).toFixed(1)}K`;
  return `₹${price.toFixed(2)}`;
};

const formatChange = (change: number | null) => {
  if (change == null || isNaN(change)) return '—';
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
};

const getChangeColor = (change: number | null) => {
  if (change == null || isNaN(change)) return C.gray[600];
  return change >= 0 ? C.systemGreen : C.systemRed;
};

// Enhanced session storage with Apple-like persistence
const SecureSession = {
  set(key: string, value: any, expiryHours = 8) {
    try {
      const expiry = Date.now() + (expiryHours * 60 * 60 * 1000);
      const data = { value, expiry };
      localStorage.setItem(`apex_${key}`, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save session data:', error);
    }
  },

  get(key: string) {
    try {
      const stored = localStorage.getItem(`apex_${key}`);
      if (!stored) return null;

      const { value, expiry } = JSON.parse(stored);
      if (Date.now() > expiry) {
        localStorage.removeItem(`apex_${key}`);
        return null;
      }

      return value;
    } catch (error) {
      console.warn('Failed to retrieve session data:', error);
      return null;
    }
  },

  clear() {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('apex_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear session data:', error);
    }
  },
};

// Generate realistic market data
const generateCandles = (basePrice: number, periods = 120) => {
  const candles = [];
  let price = basePrice * (0.95 + Math.random() * 0.1);

  for (let i = 0; i < periods; i++) {
    const volatility = 0.005 + Math.random() * 0.003;
    const trend = (Math.random() - 0.48) * volatility;
    const open = price;
    const close = Math.max(0.01, open + (Math.random() - 0.5) * open * volatility + trend * open);
    const high = Math.max(open, close) * (1 + Math.random() * volatility * 0.3);
    const low = Math.min(open, close) * (1 - Math.random() * volatility * 0.3);
    const volume = Math.floor(10000 + Math.random() * 50000);

    candles.push({
      time: Date.now() - (periods - i) * 60000,
      open: +open.toFixed(2),
      high: +high.toFixed(2),
      low: +low.toFixed(2),
      close: +close.toFixed(2),
      volume,
    });

    price = close;
  }

  return candles;
};

const generatePortfolioHistory = (initialValue: number, days = 60) => {
  const history = [];
  let value = initialValue * 0.9;

  for (let i = 0; i < days; i++) {
    const change = (Math.random() - 0.45) * 0.02;
    value = Math.max(0, value * (1 + change));

    history.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.round(value),
      change: change * 100,
    });
  }

  return history;
};

// Asset data with more realistic information
const ASSETS_DATA = [
  {
    id: 'NIFTY50',
    name: 'Nifty 50',
    symbol: '^NSEI',
    type: 'index',
    exchange: 'NSE',
    price: 22150.30,
    previousClose: 21980.50,
    volume: 285000000,
    marketCap: '—',
    pe: 22.5,
    sector: 'Index',
    change: 0,
  },
  {
    id: 'RELIANCE',
    name: 'Reliance Industries',
    symbol: 'RELIANCE.NS',
    type: 'stock',
    exchange: 'NSE',
    price: 2847.30,
    previousClose: 2878.50,
    volume: 8500000,
    marketCap: '₹18.5T',
    pe: 28.3,
    sector: 'Energy',
    change: 0,
  },
  {
    id: 'TCS',
    name: 'Tata Consultancy Services',
    symbol: 'TCS.NS',
    type: 'stock',
    exchange: 'NSE',
    price: 3542.10,
    previousClose: 3510.40,
    volume: 4200000,
    marketCap: '₹13.2T',
    pe: 31.8,
    sector: 'Technology',
    change: 0,
  },
  {
    id: 'AAPL',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    type: 'stock',
    exchange: 'NASDAQ',
    price: 189.50,
    previousClose: 187.26,
    volume: 52000000,
    marketCap: '$2.9T',
    pe: 29.2,
    sector: 'Technology',
    change: 0,
  },
  {
    id: 'BTC',
    name: 'Bitcoin',
    symbol: 'BTC-USD',
    type: 'crypto',
    exchange: 'Crypto',
    price: 67420.50,
    previousClose: 65800.00,
    volume: 28500000000,
    marketCap: '$1.3T',
    pe: '—',
    sector: 'Cryptocurrency',
    change: 0,
  },
];

const PORTFOLIO_DATA = [
  { id: 'RELIANCE', quantity: 10, averagePrice: 2780.50, stopLoss: 2700, target: 3000 },
  { id: 'TCS', quantity: 5, averagePrice: 3480.00, stopLoss: 3350, target: 3700 },
  { id: 'AAPL', quantity: 8, averagePrice: 178.20, stopLoss: 170, target: 200 },
];

const INITIAL_BALANCE = 1000000;

// Main App Component with Apple-level sophistication
export default function ApexTrader() {
  const [user, setUser] = useState(() => SecureSession.get('user'));
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1100);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assets, setAssets] = useState(() => ASSETS_DATA.map(asset => ({
    ...asset,
    change: ((asset.price - asset.previousClose) / asset.previousClose) * 100
  })));
  const [candles, setCandles] = useState(() => Object.fromEntries(ASSETS_DATA.map(asset => [asset.id, generateCandles(asset.price)])));
  const [portfolio, setPortfolio] = useState(PORTFOLIO_DATA);
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [tab, setTab] = useState('dashboard');
  const [selectedAsset, setSelectedAsset] = useState('NIFTY50');
  const [portfolioHistory, setPortfolioHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const assetsRef = useRef(assets);
  const balanceRef = useRef(balance);
  const portfolioRef = useRef(portfolio);

  // Apple-style smooth animations
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
      setSidebarCollapsed(width >= 768 && width < 1100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    assetsRef.current = assets;
    balanceRef.current = balance;
    portfolioRef.current = portfolio;
  }, [assets, balance, portfolio]);

  // Initialize portfolio history
  useEffect(() => {
    const totalValue = balance + portfolio.reduce((sum, position) => {
      const asset = assets.find(a => a.id === position.id);
      return sum + (asset ? asset.price * position.quantity : 0);
    }, 0);
    setPortfolioHistory(generatePortfolioHistory(totalValue));
  }, []);

  // Real-time price updates with Apple-like smoothness
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets => prevAssets.map(asset => {
        const volatility = asset.type === 'crypto' ? 0.008 : asset.type === 'index' ? 0.003 : 0.005;
        const change = (Math.random() - 0.48) * volatility;
        const newPrice = Math.max(0.01, asset.price * (1 + change));
        const newChange = ((newPrice - asset.previousClose) / asset.previousClose) * 100;

        return {
          ...asset,
          price: newPrice,
          change: newChange,
        };
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Computed values with memoization
  const selectedAssetData = useMemo(() =>
    assets.find(asset => asset.id === selectedAsset),
    [assets, selectedAsset]
  );

  const portfolioValue = useMemo(() =>
    portfolio.reduce((sum, position) => {
      const asset = assets.find(a => a.id === position.id);
      return sum + (asset ? asset.price * position.quantity : 0);
    }, 0),
    [portfolio, assets]
  );

  const totalValue = balance + portfolioValue;

  const costBasis = useMemo(() =>
    portfolio.reduce((sum, position) => sum + position.averagePrice * position.quantity, 0),
    [portfolio]
  );

  const totalPnL = portfolioValue - costBasis;
  const totalReturn = costBasis > 0 ? (totalPnL / costBasis) * 100 : 0;

  const dayPnL = useMemo(() => {
    if (portfolioHistory.length < 2) return 0;
    return portfolioHistory[portfolioHistory.length - 1].value - portfolioHistory[portfolioHistory.length - 2].value;
  }, [portfolioHistory]);

  const allocationData = useMemo(() =>
    portfolio.map(position => {
      const asset = assets.find(a => a.id === position.id);
      const value = asset ? asset.price * position.quantity : 0;
      const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0;
      return {
        name: asset?.name || position.id,
        value,
        percentage,
        color: asset?.change >= 0 ? C.systemGreen : C.systemRed,
      };
    }).filter(item => item.value > 0),
    [portfolio, assets, totalValue]
  );

  // Apple-style navigation
  const navigationItems = [
    { id: 'dashboard', icon: '􀎟', label: 'Dashboard', description: 'Portfolio overview' },
    { id: 'markets', icon: '􀐫', label: 'Markets', description: 'Market data' },
    { id: 'trade', icon: '􀌗', label: 'Trade', description: 'Buy & sell' },
    { id: 'portfolio', icon: '􀏅', label: 'Portfolio', description: 'Positions' },
    { id: 'analytics', icon: '􀣉', label: 'Analytics', description: 'Insights' },
  ];

  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  }, []);

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Apple-style Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-black/80 backdrop-blur-2xl border-r border-white/10 transition-all duration-500 ease-out ${
        isMobile
          ? (sidebarOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-full')
          : (sidebarCollapsed ? 'w-16' : 'w-64')
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className={`flex items-center gap-3 transition-opacity duration-300 ${sidebarCollapsed && !isMobile ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Apex Trader</div>
              <div className="text-white/60 text-xs">Professional</div>
            </div>
          </div>
          {!isMobile && (
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <span className="text-white/60 text-sm">􀆈</span>
            </button>
          )}
        </div>

        {/* User Info */}
        <div className={`p-6 border-b border-white/10 transition-all duration-300 ${sidebarCollapsed && !isMobile ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">{user.name}</div>
              <div className="text-white/60 text-xs">{user.email}</div>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-white/60 text-xs mb-1">Portfolio Value</div>
            <div className="text-white font-semibold">{formatPrice(totalValue)}</div>
            <div className={`text-xs font-medium ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {formatChange(totalReturn)}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setTab(item.id);
                if (isMobile) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                tab === item.id
                  ? 'bg-white/10 text-white shadow-lg shadow-white/10'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <div className={`flex-1 text-left transition-all duration-300 ${sidebarCollapsed && !isMobile ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-white/50">{item.description}</div>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={() => {
              SecureSession.clear();
              setUser(null);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <span className="text-lg">􀎡</span>
            <span className={`text-sm font-medium transition-all duration-300 ${sidebarCollapsed && !isMobile ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-500 ease-out ${
        isMobile ? 'ml-0' : (sidebarCollapsed ? 'ml-16' : 'ml-64')
      }`}>
        {/* Top Bar */}
        <header className="h-16 bg-black/50 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-40">
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <span className="text-white text-lg">􀌟</span>
            </button>
          )}

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            {/* Portfolio Summary */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="text-right">
                <div className="text-white font-semibold">{formatPrice(totalValue)}</div>
                <div className={`text-sm font-medium ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {formatChange(totalReturn)}
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-right">
                <div className="text-white/60 text-sm">Day P&L</div>
                <div className={`font-semibold ${dayPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {formatPrice(dayPnL)}
                </div>
              </div>
            </div>

            {/* Notifications */}
            <button className="relative w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <span className="text-white text-lg">􀋙</span>
              {notifications.length > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              )}
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 max-w-7xl mx-auto">
          {tab === 'dashboard' && <DashboardTab {...{ assets, portfolio, balance, portfolioHistory, allocationData, totalValue, totalReturn, dayPnL }} />}
          {tab === 'markets' && <MarketsTab {...{ assets, selectedAsset, setSelectedAsset, setTab }} />}
          {tab === 'trade' && <TradeTab {...{ selectedAsset: selectedAssetData, assets, portfolio, balance, showNotification }} />}
          {tab === 'portfolio' && <PortfolioTab {...{ portfolio, assets, totalValue, totalPnL, totalReturn }} />}
          {tab === 'analytics' && <AnalyticsTab {...{ portfolioHistory, allocationData, assets }} />}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Notifications */}
      <div className="fixed top-20 right-6 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`max-w-sm p-4 rounded-2xl backdrop-blur-2xl border shadow-2xl transition-all duration-300 ${
              notification.type === 'success'
                ? 'bg-green-500/10 border-green-500/20 text-green-400'
                : notification.type === 'error'
                  ? 'bg-red-500/10 border-red-500/20 text-red-400'
                  : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
            }`}
          >
            <div className="text-sm font-medium">{notification.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dashboard Tab Component
function DashboardTab({ assets, portfolio, balance, portfolioHistory, allocationData, totalValue, totalReturn, dayPnL }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-white/70 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Markets Open
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mb-4">
          Welcome back
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Your portfolio is performing well. Here's what's happening in your investments.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Portfolio Value</div>
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-400 text-lg">􀏅</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{formatPrice(totalValue)}</div>
          <div className={`text-sm font-medium ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatChange(totalReturn)} all time
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Day P&L</div>
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <span className="text-green-400 text-lg">􀱤</span>
            </div>
          </div>
          <div className={`text-3xl font-bold ${dayPnL >= 0 ? 'text-green-400' : 'text-red-400'} mb-2`}>
            {formatPrice(dayPnL)}
          </div>
          <div className="text-white/60 text-sm">Today's change</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Cash Balance</div>
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-purple-400 text-lg">􀗕</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{formatPrice(balance)}</div>
          <div className="text-white/60 text-sm">Available to trade</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Positions</div>
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <span className="text-orange-400 text-lg">􀐫</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{portfolio.length}</div>
          <div className="text-white/60 text-sm">Active holdings</div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Portfolio Performance</h3>
            <p className="text-white/60 text-sm">60-day performance overview</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">1W</button>
            <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">1M</button>
            <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">3M</button>
            <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">1Y</button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioHistory}>
              <defs>
                <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.systemBlue} stopOpacity={0.3}/>
                  <stop offset="50%" stopColor={C.systemBlue} stopOpacity={0.1}/>
                  <stop offset="95%" stopColor={C.systemBlue} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{fill: C.gray[600], fontSize: 12}}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{fill: C.gray[600], fontSize: 12}}
                tickFormatter={(value) => formatPrice(value)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: C.bgSecondary,
                  border: `1px solid ${C.separatorOpaque}`,
                  borderRadius: '12px',
                  color: C.textPrimary,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
                formatter={(value: number) => [formatPrice(value), 'Portfolio Value']}
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={C.systemBlue}
                fillOpacity={1}
                fill="url(#performanceGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Asset Allocation & Top Movers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Allocation */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Asset Allocation</h3>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[
                      C.systemBlue,
                      C.systemGreen,
                      C.systemOrange,
                      C.systemPurple,
                      C.systemTeal
                    ][index % 5]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: C.bgSecondary,
                    border: `1px solid ${C.separatorOpaque}`,
                    borderRadius: '12px',
                    color: C.textPrimary,
                  }}
                  formatter={(value: number, name: string) => [
                    `${formatPrice(value)} (${allocationData.find(d => d.name === name)?.percentage.toFixed(1)}%)`,
                    'Value'
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {allocationData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: [
                        C.systemBlue,
                        C.systemGreen,
                        C.systemOrange,
                        C.systemPurple,
                        C.systemTeal
                      ][index % 5]
                    }}
                  ></div>
                  <span className="text-white/80 text-sm font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-sm">{formatPrice(item.value)}</div>
                  <div className="text-white/60 text-xs">{item.percentage.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Movers */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Market Movers</h3>
          <div className="space-y-4">
            {assets
              .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
              .slice(0, 5)
              .map((asset) => (
                <div key={asset.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-white/70 text-sm font-bold">
                        {asset.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{asset.name}</div>
                      <div className="text-white/60 text-xs">{asset.exchange}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold text-sm">{formatPrice(asset.price)}</div>
                    <div className={`text-xs font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatChange(asset.change)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Markets Tab Component
function MarketsTab({ assets, selectedAsset, setSelectedAsset, setTab }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('change');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredAssets = useMemo(() => {
    let filtered = assets.filter(asset =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'change':
          aValue = Math.abs(a.change);
          bValue = Math.abs(b.change);
          break;
        case 'volume':
          aValue = a.volume;
          bValue = b.volume;
          break;
        default:
          aValue = Math.abs(a.change);
          bValue = Math.abs(b.change);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [assets, searchTerm, sortBy, sortOrder]);

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Markets</h1>
          <p className="text-white/60">Real-time market data and analysis</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 text-lg">􀊫</span>
            <input
              type="text"
              placeholder="Search markets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['NIFTY50', 'RELIANCE', 'TCS', 'AAPL'].map(symbol => {
          const asset = assets.find(a => a.id === symbol);
          if (!asset) return null;

          return (
            <div
              key={symbol}
              onClick={() => {
                setSelectedAsset(symbol);
                setTab('trade');
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-white/60 text-sm font-medium">{asset.name}</div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                  asset.change >= 0
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {formatChange(asset.change)}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{formatPrice(asset.price)}</div>
              <div className="text-white/40 text-xs">{asset.exchange}</div>
            </div>
          );
        })}
      </div>

      {/* Markets Table */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  className="text-left py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Asset
                    {sortBy === 'name' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    Price
                    {sortBy === 'price' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('change')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    Change
                    {sortBy === 'change' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('volume')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    Volume
                    {sortBy === 'volume' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-white/70">Exchange</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, index) => (
                <tr
                  key={asset.id}
                  onClick={() => {
                    setSelectedAsset(asset.id);
                    setTab('trade');
                  }}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                    index % 2 === 0 ? 'bg-transparent' : 'bg-white/2'
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <span className="text-white/70 text-sm font-bold">
                          {asset.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{asset.name}</div>
                        <div className="text-white/60 text-sm">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white font-mono font-medium">{formatPrice(asset.price)}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className={`font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatChange(asset.change)}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white/70 text-sm">
                      {asset.volume >= 1000000
                        ? `${(asset.volume / 1000000).toFixed(1)}M`
                        : asset.volume >= 1000
                          ? `${(asset.volume / 1000).toFixed(1)}K`
                          : asset.volume.toString()
                      }
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-blue-400 font-medium text-sm">{asset.exchange}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Trade Tab Component
function TradeTab({ selectedAsset, assets, portfolio, balance, showNotification }) {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [orderQuantity, setOrderQuantity] = useState('');
  const [orderPrice, setOrderPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const asset = assets.find(a => a.id === selectedAsset);
  const position = portfolio.find(p => p.id === selectedAsset);

  const currentPrice = asset?.price || 0;
  const availableBalance = balance;
  const maxBuyQuantity = Math.floor(availableBalance / currentPrice);
  const maxSellQuantity = position?.quantity || 0;

  const handlePlaceOrder = async () => {
    if (!asset) return;

    const quantity = parseFloat(orderQuantity);
    const price = orderPrice ? parseFloat(orderPrice) : currentPrice;

    if (isNaN(quantity) || quantity <= 0) {
      showNotification('Please enter a valid quantity', 'error');
      return;
    }

    if (orderType === 'buy' && quantity * price > availableBalance) {
      showNotification('Insufficient balance', 'error');
      return;
    }

    if (orderType === 'sell' && quantity > maxSellQuantity) {
      showNotification('Insufficient position', 'error');
      return;
    }

    setIsLoading(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    showNotification(
      `${orderType.toUpperCase()} order for ${quantity} ${asset.name} executed successfully`,
      'success'
    );

    setOrderQuantity('');
    setOrderPrice('');
    setIsLoading(false);
  };

  if (!asset) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">􀌗</div>
        <h2 className="text-2xl font-bold text-white mb-2">Select an Asset</h2>
        <p className="text-white/60">Choose an asset from the Markets tab to start trading</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Chart Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Asset Header */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {asset.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{asset.name}</h2>
                <p className="text-white/60">{asset.symbol} • {asset.exchange}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white mb-1">{formatPrice(asset.price)}</div>
              <div className={`text-lg font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {formatChange(asset.change)}
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-white/60 text-sm mb-1">Market Cap</div>
              <div className="text-white font-semibold">{asset.marketCap}</div>
            </div>
            <div className="text-center">
              <div className="text-white/60 text-sm mb-1">P/E Ratio</div>
              <div className="text-white font-semibold">{asset.pe}</div>
            </div>
            <div className="text-center">
              <div className="text-white/60 text-sm mb-1">Volume</div>
              <div className="text-white font-semibold">
                {asset.volume >= 1000000
                  ? `${(asset.volume / 1000000).toFixed(1)}M`
                  : `${(asset.volume / 1000).toFixed(1)}K`
                }
              </div>
            </div>
            <div className="text-center">
              <div className="text-white/60 text-sm mb-1">Sector</div>
              <div className="text-white font-semibold">{asset.sector}</div>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Price Chart</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">1D</button>
              <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">1W</button>
              <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">1M</button>
              <button className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors">1Y</button>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl flex items-center justify-center border border-white/5">
            <div className="text-center">
              <div className="text-6xl mb-4 text-white/20">􀣉</div>
              <div className="text-white/60 text-lg mb-2">Interactive Chart</div>
              <div className="text-white/40 text-sm">Advanced candlestick charts with technical indicators</div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Panel */}
      <div className="space-y-6">
        {/* Order Type */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Place Order</h3>

          {/* Buy/Sell Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setOrderType('buy')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                orderType === 'buy'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setOrderType('sell')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                orderType === 'sell'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Sell
            </button>
          </div>

          {/* Quantity Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/70 mb-2">Quantity</label>
            <div className="relative">
              <input
                type="number"
                value={orderQuantity}
                onChange={(e) => setOrderQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 text-sm">
                Max: {orderType === 'buy' ? maxBuyQuantity : maxSellQuantity}
              </div>
            </div>
          </div>

          {/* Price Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/70 mb-2">Price (Optional)</label>
            <input
              type="number"
              value={orderPrice}
              onChange={(e) => setOrderPrice(e.target.value)}
              placeholder={`Market price: ${formatPrice(currentPrice)}`}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white/5 rounded-xl p-4 mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70">Estimated Total</span>
              <span className="text-white font-medium">
                {formatPrice((parseFloat(orderQuantity) || 0) * (parseFloat(orderPrice) || currentPrice))}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Available Balance</span>
              <span className="text-white font-medium">{formatPrice(availableBalance)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            disabled={isLoading || !orderQuantity}
            className={`w-full py-4 rounded-xl font-semibold transition-all ${
              orderType === 'buy'
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25'
                : 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/25'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              `Place ${orderType.toUpperCase()} Order`
            )}
          </button>
        </div>

        {/* Position Info */}
        {position && (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Your Position</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Shares Owned</span>
                <span className="text-white font-medium">{position.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Average Price</span>
                <span className="text-white font-medium">{formatPrice(position.averagePrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Current Value</span>
                <span className="text-white font-medium">{formatPrice(position.quantity * currentPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">P&L</span>
                <span className={`font-medium ${
                  (currentPrice - position.averagePrice) * position.quantity >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}>
                  {formatPrice((currentPrice - position.averagePrice) * position.quantity)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Portfolio Tab Component
function PortfolioTab({ portfolio, assets, totalValue, totalPnL, totalReturn }) {
  const [sortBy, setSortBy] = useState('value');
  const [sortOrder, setSortOrder] = useState('desc');

  const portfolioData = useMemo(() => {
    return portfolio.map(position => {
      const asset = assets.find(a => a.id === position.id);
      if (!asset) return null;

      const currentValue = asset.price * position.quantity;
      const costBasis = position.averagePrice * position.quantity;
      const pnl = currentValue - costBasis;
      const pnlPercentage = costBasis > 0 ? (pnl / costBasis) * 100 : 0;
      const allocation = totalValue > 0 ? (currentValue / totalValue) * 100 : 0;

      return {
        ...position,
        asset,
        currentValue,
        costBasis,
        pnl,
        pnlPercentage,
        allocation,
      };
    }).filter(Boolean).sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'name':
          aValue = a.asset.name.toLowerCase();
          bValue = b.asset.name.toLowerCase();
          break;
        case 'value':
          aValue = a.currentValue;
          bValue = b.currentValue;
          break;
        case 'pnl':
          aValue = Math.abs(a.pnl);
          bValue = Math.abs(b.pnl);
          break;
        case 'allocation':
          aValue = a.allocation;
          bValue = b.allocation;
          break;
        default:
          aValue = a.currentValue;
          bValue = b.currentValue;
      }

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }, [portfolio, assets, totalValue, sortBy, sortOrder]);

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  if (portfolio.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4 text-white/20">􀏅</div>
        <h2 className="text-2xl font-bold text-white mb-2">No Positions Yet</h2>
        <p className="text-white/60 mb-6">Start building your portfolio by trading assets</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
          Browse Markets
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Total Value</div>
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-400 text-lg">􀏅</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{formatPrice(totalValue)}</div>
          <div className={`text-sm font-medium ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatChange(totalReturn)} total return
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Total P&L</div>
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <span className="text-green-400 text-lg">􀱤</span>
            </div>
          </div>
          <div className={`text-3xl font-bold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'} mb-2`}>
            {formatPrice(totalPnL)}
          </div>
          <div className="text-white/60 text-sm">Unrealized gains</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Positions</div>
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-purple-400 text-lg">􀐫</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{portfolio.length}</div>
          <div className="text-white/60 text-sm">Active holdings</div>
        </div>
      </div>

      {/* Positions Table */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  className="text-left py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Asset
                    {sortBy === 'name' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-white/70">Shares</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-white/70">Avg Price</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-white/70">Current Price</th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('value')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    Value
                    {sortBy === 'value' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('pnl')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    P&L
                    {sortBy === 'pnl' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className="text-right py-4 px-6 text-sm font-semibold text-white/70 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('allocation')}
                >
                  <div className="flex items-center gap-2 justify-end">
                    Allocation
                    {sortBy === 'allocation' && (
                      <span className="text-white/50 text-xs">
                        {sortOrder === 'asc' ? '􀄩' : '􀄨'}
                      </span>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.map((position, index) => (
                <tr
                  key={position.id}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                    index % 2 === 0 ? 'bg-transparent' : 'bg-white/2'
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <span className="text-white/70 text-sm font-bold">
                          {position.asset.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{position.asset.name}</div>
                        <div className="text-white/60 text-sm">{position.asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white font-medium">{position.quantity}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white/70 font-mono">{formatPrice(position.averagePrice)}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white font-mono font-medium">{formatPrice(position.asset.price)}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white font-semibold">{formatPrice(position.currentValue)}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className={`font-medium ${position.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatPrice(position.pnl)}
                      <div className="text-xs text-white/60">
                        ({formatChange(position.pnlPercentage)})
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="text-white font-medium">{position.allocation.toFixed(1)}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Analytics Tab Component
function AnalyticsTab({ portfolioHistory, allocationData, assets }) {
  const [timeRange, setTimeRange] = useState('1M');

  const performanceMetrics = useMemo(() => {
    if (portfolioHistory.length < 2) return null;

    const latest = portfolioHistory[portfolioHistory.length - 1].value;
    const previous = portfolioHistory[portfolioHistory.length - 2].value;
    const dailyChange = latest - previous;
    const dailyChangePercent = (dailyChange / previous) * 100;

    const startValue = portfolioHistory[0].value;
    const totalReturn = ((latest - startValue) / startValue) * 100;

    const positiveDays = portfolioHistory.filter((day, index) => {
      if (index === 0) return false;
      return day.value > portfolioHistory[index - 1].value;
    }).length;

    const winRate = (positiveDays / (portfolioHistory.length - 1)) * 100;

    return {
      totalValue: latest,
      dailyChange,
      dailyChangePercent,
      totalReturn,
      winRate,
      totalDays: portfolioHistory.length - 1,
      positiveDays,
    };
  }, [portfolioHistory]);

  const topPerformers = useMemo(() => {
    return assets
      .filter(asset => asset.change !== 0)
      .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
      .slice(0, 5);
  }, [assets]);

  return (
    <div className="space-y-8">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Total Portfolio</div>
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-400 text-lg">􀣉</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {performanceMetrics ? formatPrice(performanceMetrics.totalValue) : '—'}
          </div>
          <div className="text-white/60 text-sm">Current value</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Daily Change</div>
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <span className="text-green-400 text-lg">􀱤</span>
            </div>
          </div>
          <div className={`text-3xl font-bold mb-2 ${
            performanceMetrics?.dailyChange >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {performanceMetrics ? formatPrice(performanceMetrics.dailyChange) : '—'}
          </div>
          <div className={`text-sm font-medium ${
            performanceMetrics?.dailyChangePercent >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {performanceMetrics ? formatChange(performanceMetrics.dailyChangePercent) : '—'}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Total Return</div>
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-purple-400 text-lg">􀓩</span>
            </div>
          </div>
          <div className={`text-3xl font-bold mb-2 ${
            performanceMetrics?.totalReturn >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {performanceMetrics ? formatChange(performanceMetrics.totalReturn) : '—'}
          </div>
          <div className="text-white/60 text-sm">Since inception</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white/60 text-sm font-medium">Win Rate</div>
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <span className="text-orange-400 text-lg">􀆔</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {performanceMetrics ? `${performanceMetrics.winRate.toFixed(1)}%` : '—'}
          </div>
          <div className="text-white/60 text-sm">
            {performanceMetrics ? `${performanceMetrics.positiveDays}/${performanceMetrics.totalDays} days` : '—'}
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Performance Analysis</h3>
          <div className="flex gap-2">
            {['1W', '1M', '3M', '1Y'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioHistory}>
              <defs>
                <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.systemBlue} stopOpacity={0.3}/>
                  <stop offset="50%" stopColor={C.systemBlue} stopOpacity={0.1}/>
                  <stop offset="95%" stopColor={C.systemBlue} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{fill: C.gray[600], fontSize: 12}}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{fill: C.gray[600], fontSize: 12}}
                tickFormatter={(value) => formatPrice(value)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: C.bgSecondary,
                  border: `1px solid ${C.separatorOpaque}`,
                  borderRadius: '12px',
                  color: C.textPrimary,
                }}
                formatter={(value: number) => [formatPrice(value), 'Portfolio Value']}
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={C.systemBlue}
                strokeWidth={2}
                dot={false}
                fill="url(#analyticsGradient)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Insights & Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Insights */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Market Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-sm">􀌮</span>
                </div>
                <div className="text-white font-medium">AI-Powered Analysis</div>
              </div>
              <div className="text-white/70 text-sm">
                Advanced algorithms analyze market trends, volatility patterns, and correlation data to provide actionable insights.
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-sm">􀋦</span>
                </div>
                <div className="text-white font-medium">Risk Management</div>
              </div>
              <div className="text-white/70 text-sm">
                Automated position sizing, stop-loss recommendations, and portfolio diversification suggestions.
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 text-sm">􀐯</span>
                </div>
                <div className="text-white font-medium">Market Sentiment</div>
              </div>
              <div className="text-white/70 text-sm">
                Real-time sentiment analysis from news, social media, and trading patterns to gauge market mood.
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Top Performers</h3>
          <div className="space-y-4">
            {topPerformers.map((asset, index) => (
              <div key={asset.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-white/70 text-xs font-bold">
                      {asset.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{asset.name}</div>
                    <div className="text-white/60 text-xs">{asset.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-sm">{formatPrice(asset.price)}</div>
                  <div className={`text-xs font-medium ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatChange(asset.change)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Apple-style Login Screen Component
function LoginScreen({ onLogin }: { onLogin: (user: any) => void }) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const updateForm = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (error) setError('');
  };

  const handleLogin = async () => {
    if (!form.email.includes('@') || form.password.length < 4) {
      setError('Please enter valid email and password (min 4 characters)');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (form.email === 'demo@apex.com' && form.password === 'demo') {
      const user = {
        name: 'Demo Trader',
        email: form.email,
        id: 'demo-user',
        avatar: null,
      };
      SecureSession.set('user', user);
      onLogin(user);
    } else {
      setError('Invalid credentials. Use demo@apex.com / demo for demo access.');
    }

    setIsLoading(false);
  };

  const handleSignup = async () => {
    if (!form.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate account creation delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const user = {
      name: form.name.trim(),
      email: form.email.toLowerCase(),
      id: `user-${Date.now()}`,
      avatar: null,
    };

    SecureSession.set('user', user);
    onLogin(user);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6">
            <span className="text-3xl font-bold text-white">A</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to Apex Trader</h1>
          <p className="text-white/60">Professional trading platform</p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Mode Toggle */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
            <button
              onClick={() => {
                setMode('login');
                setError('');
                setForm({ name: '', email: '', password: '', confirm: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setError('');
                setForm({ name: '', email: '', password: '', confirm: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                mode === 'signup'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateForm('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && (mode === 'login' ? handleLogin() : handleSignup())}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => updateForm('password', e.target.value)}
                placeholder={mode === 'login' ? 'Enter your password' : 'Create a password (min 6 chars)'}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && (mode === 'login' ? handleLogin() : handleSignup())}
              />
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={form.confirm}
                  onChange={(e) => updateForm('confirm', e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
                />
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-red-400 text-lg">􀁡</span>
                <span className="text-red-400 text-sm font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={mode === 'login' ? handleLogin : handleSignup}
            disabled={isLoading}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
              </div>
            ) : (
              mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>

          {/* Demo Account Info */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-400 text-lg">􀌮</span>
              <span className="text-blue-400 text-sm font-medium">Demo Account</span>
            </div>
            <div className="text-white/70 text-sm">
              <div className="font-mono bg-white/10 px-2 py-1 rounded text-xs">
                demo@apex.com / demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const simpleHash = (str: string) => {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(16).padStart(8, '0');
};
const DEMO_PIN_HASH = simpleHash('1234');
const genUUID = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

// Rate limiters
const OrderRateLimiter = (() => {
  const ts: number[] = [];
  return {
    check(max = 5, win = 10000) {
      const now = Date.now(), valid = ts.filter(t => now - t < win);
      ts.length = 0;
      valid.forEach(t => ts.push(t));
      if (valid.length >= max) return false;
      ts.push(now);
      return true;
    }
  };
})();
const AiRateLimiter = (() => {
  const ts: number[] = [];
  return {
    check(max = 10, win = 60000) {
      const now = Date.now(), valid = ts.filter(t => now - t < win);
      ts.length = 0;
      valid.forEach(t => ts.push(t));
      if (valid.length >= max) return false;
      ts.push(now);
      return true;
    }
  };
})();

// Indicator calculations
function calcEMA(prices: number[], period: number): (number | null)[] {
  if (prices.length < period) return [];
  const k = 2 / (period + 1), result = new Array(prices.length).fill(null);
  let ema = prices.slice(0, period).reduce((s, v) => s + v, 0) / period;
  result[period - 1] = ema;
  for (let i = period; i < prices.length; i++) {
    ema = prices[i] * k + ema * (1 - k);
    result[i] = +ema.toFixed(4);
  }
  return result;
}

function calcBollinger(prices: number[], period = 20, sd = 2): { mid: number | null; upper: number | null; lower: number | null }[] {
  const result = new Array(prices.length).fill(null).map(() => ({ mid: null, upper: null, lower: null }));
  for (let i = period - 1; i < prices.length; i++) {
    const sl = prices.slice(i - period + 1, i + 1), mean = sl.reduce((s, v) => s + v, 0) / period, sdv = Math.sqrt(sl.reduce((s, v) => s + (v - mean) ** 2, 0) / period);
    result[i] = { mid: +mean.toFixed(4), upper: +(mean + sd * sdv).toFixed(4), lower: +(mean - sd * sdv).toFixed(4) };
  }
  return result;
}

function calcRSI(prices: number[], period = 14): (number | null)[] {
  const result = new Array(prices.length).fill(null);
  if (prices.length < period + 1) return result;
  let gains = 0, losses = 0;
  for (let i = 1; i <= period; i++) {
    const d = prices[i] - prices[i - 1];
    if (d > 0) gains += d;
    else losses -= d;
  }
  let ag = gains / period, al = losses / period;
  result[period] = al === 0 ? 100 : +(100 - 100 / (1 + ag / al)).toFixed(2);
  for (let i = period + 1; i < prices.length; i++) {
    const d = prices[i] - prices[i - 1];
    ag = (ag * (period - 1) + Math.max(0, d)) / period;
    al = (al * (period - 1) + Math.max(0, -d)) / period;
    result[i] = al === 0 ? 100 : +(100 - 100 / (1 + ag / al)).toFixed(2);
  }
  return result;
}

function calcVWAP(candles: any[]): (number | null)[] {
  let cv = 0, cV = 0;
  return candles.map(c => {
    const tp = (c.h + c.l + c.c) / 3;
    cv += tp * c.v;
    cV += c.v;
    return cV > 0 ? +(cv / cV).toFixed(4) : null;
  });
}

function calcMACD(prices: number[], fast = 12, slow = 26, signal = 9): { macd: number | null; signal: number | null; histogram: number | null }[] {
  const ef = calcEMA(prices, fast), es = calcEMA(prices, slow);
  const ml = prices.map((_, i) => ef[i] != null && es[i] != null ? +(ef[i] - es[i]).toFixed(4) : null);
  const vm = ml.filter(v => v != null), sl2 = calcEMA(vm, signal);
  let si = 0;
  const sf = ml.map(v => v != null ? (sl2[si++] ?? null) : null);
  return ml.map((m, i) => ({ macd: m, signal: sf[i], histogram: m != null && sf[i] != null ? +(m - sf[i]).toFixed(4) : null }));
}

function calcATR(candles: any[], period = 14): (number | null)[] {
  if (candles.length < 2) return new Array(candles.length).fill(null);
  const tr = candles.map((c, i) => i === 0 ? c.h - c.l : Math.max(c.h - c.l, Math.abs(c.h - candles[i - 1].c), Math.abs(c.l - candles[i - 1].c)));
  const result = new Array(candles.length).fill(null);
  if (candles.length < period) return result;
  let atr = tr.slice(0, period).reduce((s, v) => s + v, 0) / period;
  result[period - 1] = +atr.toFixed(4);
  for (let i = period; i < candles.length; i++) {
    atr = (atr * (period - 1) + tr[i]) / period;
    result[i] = +atr.toFixed(4);
  }
  return result;
}

function calcSupertrend(candles: any[], period = 10, mult = 3): { upper: number | null; lower: number | null; trend: number | null }[] {
  const atr = calcATR(candles, period);
  let pU = null, pL = null, trend = 1;
  return candles.map((c, i) => {
    if (atr[i] == null) return { upper: null, lower: null, trend: null };
    const hl2 = (c.h + c.l) / 2;
    let upper = hl2 + mult * atr[i], lower = hl2 - mult * atr[i];
    if (pU !== null) upper = Math.min(upper, pU);
    if (pL !== null) lower = Math.max(lower, pL);
    if (c.c > (pU || upper)) trend = 1;
    else if (c.c < (pL || lower)) trend = -1;
    pU = upper;
    pL = lower;
    return { upper: +upper.toFixed(4), lower: +lower.toFixed(4), trend };
  });
}

function calcStochastic(candles: any[], kP = 14, dP = 3): { k: number | null; d: number | null }[] {
  const result = candles.map(() => ({ k: null, d: null }));
  for (let i = kP - 1; i < candles.length; i++) {
    const sl = candles.slice(i - kP + 1, i + 1), hh = Math.max(...sl.map(c => c.h)), ll = Math.min(...sl.map(c => c.l));
    result[i].k = hh === ll ? 50 : +((candles[i].c - ll) / (hh - ll) * 100).toFixed(2);
  }
  const kVals = result.map(r => r.k).filter(v => v != null), dVals = calcEMA(kVals, dP);
  let di = 0;
  result.forEach(r => {
    if (r.k != null) r.d = dVals[di++] ?? null;
  });
  return result;
}

// Asset data
const ASSETS_INIT = [
  { id: 'NIFTY50', name: 'Nifty 50', type: 'index', exch: 'NSE', price: 22150.30, prev: 21980.50, vol: 0.0008, sector: 'Index' },
  { id: 'BANKNIFTY', name: 'Bank Nifty', type: 'index', exch: 'NSE', price: 47240.60, prev: 46980.20, vol: 0.001, sector: 'Index' },
  { id: 'NIFTYIT', name: 'Nifty IT Index', type: 'index', exch: 'NSE', price: 32840.50, prev: 32120.30, vol: 0.0007, sector: 'Index' },
  { id: 'MIDCAP150', name: 'Nifty Midcap 150', type: 'index', exch: 'NSE', price: 18420.80, prev: 18200.40, vol: 0.0009, sector: 'Index' },
  { id: 'SENSEX', name: 'BSE Sensex', type: 'index', exch: 'BSE', price: 73120.40, prev: 72840.20, vol: 0.0008, sector: 'Index' },
  { id: 'RELIANCE', name: 'Reliance Industries', type: 'stock', exch: 'NSE', price: 2847.30, prev: 2878.50, vol: 0.0009, sector: 'Energy' },
  { id: 'TCS', name: 'Tata Consultancy', type: 'stock', exch: 'NSE', price: 3542.10, prev: 3510.40, vol: 0.001, sector: 'IT' },
  { id: 'INFY', name: 'Infosys Ltd.', type: 'stock', exch: 'NSE', price: 1547.80, prev: 1535.20, vol: 0.0012, sector: 'IT' },
  { id: 'HDFCBANK', name: 'HDFC Bank', type: 'stock', exch: 'NSE', price: 1623.50, prev: 1598.70, vol: 0.0011, sector: 'Banking' },
  { id: 'SBIN', name: 'State Bank of India', type: 'stock', exch: 'NSE', price: 742.30, prev: 728.90, vol: 0.0015, sector: 'Banking' },
  { id: 'WIPRO', name: 'Wipro Ltd.', type: 'stock', exch: 'NSE', price: 468.20, prev: 475.60, vol: 0.0013, sector: 'IT' },
  { id: 'ADANIENT', name: 'Adani Enterprises', type: 'stock', exch: 'NSE', price: 2432.60, prev: 2380.10, vol: 0.002, sector: 'Conglomerate' },
  { id: 'TATAMOTORS', name: 'Tata Motors', type: 'stock', exch: 'NSE', price: 892.40, prev: 878.30, vol: 0.0018, sector: 'Auto' },
  { id: 'MARUTI', name: 'Maruti Suzuki', type: 'stock', exch: 'NSE', price: 12840.50, prev: 12680.30, vol: 0.0009, sector: 'Auto' },
  { id: 'ITC', name: 'ITC Limited', type: 'stock', exch: 'NSE', price: 468.90, prev: 462.40, vol: 0.001, sector: 'FMCG' },
  { id: 'AXISBANK', name: 'Axis Bank', type: 'stock', exch: 'NSE', price: 1142.80, prev: 1120.40, vol: 0.0012, sector: 'Banking' },
  { id: 'BAJFINANCE', name: 'Bajaj Finance', type: 'stock', exch: 'NSE', price: 7842.30, prev: 7680.50, vol: 0.0013, sector: 'NBFC' },
  { id: 'SUNPHARMA', name: 'Sun Pharma', type: 'stock', exch: 'NSE', price: 1742.50, prev: 1710.80, vol: 0.001, sector: 'Pharma' },
  { id: 'LTIM', name: 'LTIMindtree', type: 'stock', exch: 'NSE', price: 5842.40, prev: 5680.20, vol: 0.0011, sector: 'IT' },
  { id: 'HINDUNILVR', name: 'Hindustan Unilever', type: 'stock', exch: 'NSE', price: 2542.60, prev: 2510.80, vol: 0.0008, sector: 'FMCG' },
  { id: 'AAPL', name: 'Apple Inc.', type: 'stock', exch: 'NASDAQ', price: 189.50, prev: 187.26, vol: 0.001, sector: 'Technology' },
  { id: 'NVDA', name: 'NVIDIA Corp.', type: 'stock', exch: 'NASDAQ', price: 875.40, prev: 862.10, vol: 0.002, sector: 'Technology' },
  { id: 'MSFT', name: 'Microsoft Corp.', type: 'stock', exch: 'NASDAQ', price: 420.15, prev: 415.20, vol: 0.001, sector: 'Technology' },
  { id: 'GOOGL', name: 'Alphabet Inc.', type: 'stock', exch: 'NASDAQ', price: 175.80, prev: 172.40, vol: 0.0011, sector: 'Technology' },
  { id: 'AMZN', name: 'Amazon.com Inc.', type: 'stock', exch: 'NASDAQ', price: 198.45, prev: 195.20, vol: 0.0012, sector: 'Technology' },
  { id: 'TSLA', name: 'Tesla Inc.', type: 'stock', exch: 'NASDAQ', price: 185.30, prev: 180.50, vol: 0.002, sector: 'Auto/EV' },
  { id: 'META', name: 'Meta Platforms', type: 'stock', exch: 'NASDAQ', price: 542.80, prev: 535.40, vol: 0.0013, sector: 'Technology' },
  { id: 'SPY', name: 'SPDR S&P 500 ETF', type: 'index', exch: 'NYSE', price: 524.80, prev: 521.40, vol: 0.0007, sector: 'Index' },
  { id: 'BTC/USD', name: 'Bitcoin', type: 'crypto', exch: 'Crypto', price: 67420.50, prev: 65800.00, vol: 0.0025, sector: 'Crypto' },
  { id: 'ETH/USD', name: 'Ethereum', type: 'crypto', exch: 'Crypto', price: 3521.80, prev: 3480.20, vol: 0.002, sector: 'Crypto' },
  { id: 'SOL/USD', name: 'Solana', type: 'crypto', exch: 'Crypto', price: 185.40, prev: 178.20, vol: 0.003, sector: 'Crypto' },
  { id: 'GOLD', name: 'Gold Spot', type: 'commodity', exch: 'COMEX', price: 2342.50, prev: 2335.20, vol: 0.0006, sector: 'Metals' },
  { id: 'SILVER', name: 'Silver Spot', type: 'commodity', exch: 'COMEX', price: 27.84, prev: 27.42, vol: 0.0014, sector: 'Metals' },
  { id: 'CRUDE', name: 'Crude Oil WTI', type: 'commodity', exch: 'NYMEX', price: 78.92, prev: 77.53, vol: 0.0012, sector: 'Energy' },
  { id: 'EUR/USD', name: 'Euro / US Dollar', type: 'forex', exch: 'FX', price: 1.0842, prev: 1.0815, vol: 0.0003, sector: 'Forex' },
  { id: 'USD/INR', name: 'US Dollar / INR', type: 'forex', exch: 'FX', price: 83.24, prev: 83.18, vol: 0.0002, sector: 'Forex' },
];

const PORT_INIT = [
  { id: 'RELIANCE', qty: 10, avg: 2780.50, sl: 2700, tp: 3000 },
  { id: 'TCS', qty: 5, avg: 3480.00, sl: 3350, tp: 3700 },
  { id: 'HDFCBANK', qty: 15, avg: 1590.00, sl: 1550, tp: 1700 },
  { id: 'BTC/USD', qty: 0.1, avg: 61200.00, sl: 58000, tp: 72000 },
  { id: 'AAPL', qty: 8, avg: 178.20, sl: 170, tp: 200 },
  { id: 'GOLD', qty: 2, avg: 2310.00, sl: 2250, tp: 2450 },
];
const BALANCE_INIT = 1000000;

// Session storage
const _store = new Map();
const SecureSession = {
  set(k: string, v: any, e = 8 * 60 * 60 * 1000) {
    try {
      _store.set(k, { v, exp: Date.now() + e });
      if (typeof localStorage !== 'undefined') localStorage.setItem(k, JSON.stringify({ v, exp: Date.now() + e }));
    } catch {}
  },
  get(k: string) {
    try {
      const m = _store.get(k);
      if (m) {
        if (Date.now() > m.exp) {
          _store.delete(k);
          return null;
        }
        return m.v;
      }
      if (typeof localStorage === 'undefined') return null;
      const raw = localStorage.getItem(k);
      if (!raw) return null;
      const { v, exp } = JSON.parse(raw);
      if (Date.now() > exp) {
        localStorage.removeItem(k);
        return null;
      }
      _store.set(k, { v, exp });
      return v;
    } catch {
      return null;
    }
  },
  clear() {
    ['apex_user', 'apex_token', 'apex_session'].forEach(k => {
      _store.delete(k);
      try {
        if (typeof localStorage !== 'undefined') localStorage.removeItem(k);
      } catch {}
    });
  },
};

// Generate candles
function genCandles(base: number, n = 120, ms = 60000) {
  let p = base * (0.91 + Math.random() * 0.07);
  const now = Date.now();
  return Array.from({ length: n }, (_, i) => {
    const v = 0.007 + Math.random() * 0.005, o = p, c = Math.max(0.0001, o + (Math.random() - 0.478) * o * v), h = Math.max(o, c) * (1 + Math.random() * v * 0.4), l = Math.min(o, c) * (1 - Math.random() * v * 0.4);
    p = c;
    return { t: now - (n - i) * ms, o: +o.toFixed(4), h: +h.toFixed(4), l: +l.toFixed(4), c: +c.toFixed(4), v: Math.floor(300 + Math.random() * 9000) };
  });
}

function genPortHistory(base: number, n = 60) {
  let v = base * 0.88;
  return Array.from({ length: n }, (_, i) => {
    v = Math.max(0, v + (Math.random() - 0.44) * v * 0.003);
    return { i, value: Math.round(v) };
  });
}

// Utility functions for drawing
const hexToRgba = (hex: string, a: number) => {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};
const rrect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
};

// Main App Component
export default function ApexTrader() {
  const [user, setUser] = useState(() => SecureSession.get('apex_user'));
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1100);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assets, setAssets] = useState(() => ASSETS_INIT.map(a => ({ ...a, change: (a.price - a.prev) / a.prev * 100 })));
  const [candles, setCandles] = useState(() => Object.fromEntries(ASSETS_INIT.map(a => [a.id, genCandles(a.price)])));
  const [portfolio, setPortfolio] = useState(PORT_INIT);
  const [balance, setBalance] = useState(BALANCE_INIT);
  const [orders, setOrders] = useState([]);
  const [pending, setPending] = useState([]);
  const [tab, setTab] = useState('dashboard');
  const [selId, setSelId] = useState('NIFTY50');
  const [tf, setTf] = useState('5m');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [fType, setFType] = useState('all');
  const [toast, setToast] = useState(null);
  const [obBook, setOBBook] = useState({ bids: [], asks: [] });
  const [portHist, setPortHist] = useState([]);
  const [aiChat, setAiChat] = useState([{ role: 'assistant', content: '👋 Hi! I\'m APEX AI — powered by Claude.\n\nI can help with:\n• Market analysis & trading signals\n• Portfolio risk & MTF strategy\n• IPO analysis & GMP tracking\n• Mutual fund comparison\n• Trade journal insights\n\nWhat would you like to explore?' }]);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [oForm, setOForm] = useState({ side: 'buy', kind: 'market', qty: '', qtyVal: '', limitPrice: '', sl: '', tp: '', leverage: 1, slOn: false, tpOn: false, trailSL: false, trailPct: '2', atrSL: false });
  const [confirmOrder, setConfirmOrder] = useState(null);
  const [indicators, setIndicators] = useState({ ema9: false, ema21: true, bb: false, vwap: false, rsi: false, macd: false, supertrend: false, stoch: false, atr: false });
  const [alerts, setAlerts] = useState([{ id: 1, symbol: 'NIFTY50', type: 'above', price: 22500, triggered: false, note: 'Resistance breakout' }, { id: 2, symbol: 'BTC/USD', type: 'below', price: 65000, triggered: false, note: 'Key support' }]);
  const [alertForm, setAlertForm] = useState({ symbol: '', type: 'above', price: '', note: '' });
  const [journal, setJournal] = useState([{ id: 1, date: '2025-01-10', symbol: 'RELIANCE', side: 'buy', qty: 5, entry: 2780, exit: 2847, pnl: 335, emotion: 'confident', setup: 'Breakout', notes: 'Clear resistance break on volume' }, { id: 2, date: '2025-01-08', symbol: 'TCS', side: 'sell', qty: 3, entry: 3510, exit: 3420, pnl: -270, emotion: 'fearful', setup: 'SL hit', notes: 'Should have waited for confirmation' }]);
  const [journalForm, setJournalForm] = useState({ symbol: '', side: 'buy', qty: '', entry: '', exit: '', pnl: '', emotion: 'calm', setup: '', notes: '' });
  const [notifications, setNotifications] = useState([{ id: 1, type: 'alert', msg: 'NIFTY50 touched 22,150 resistance', time: Date.now() - 180000, read: false }, { id: 2, type: 'filled', msg: 'BUY 0.1 BTC/USD @ 67420 — FILLED', time: Date.now() - 3600000, read: false }, { id: 3, type: 'system', msg: 'Market opens in 2 hours', time: Date.now() - 7200000, read: true }]);
  const [showNotifs, setShowNotifs] = useState(false);
  const [chartFullscreen, setChartFullscreen] = useState(false);
  const [sessionExpiry, setSessionExpiry] = useState(null);
  const inactiveTimerRef = useRef(null);
  const [riskCalc, setRiskCalc] = useState({ entry: '', sl: '', target: '', capital: '100000', riskPct: '2' });
  const [gForm, setGForm] = useState({ symbol: 'NIFTY50', side: 'buy', qty: '', trigger: '', triggerType: 'above', limitPrice: '', sl: '', tp: '' });
  const [watchlist, setWatchlist] = useState(['NIFTY50', 'BANKNIFTY', 'RELIANCE', 'TCS', 'HDFCBANK', 'BTC/USD', 'AAPL', 'NVDA']);
  const [scannerMode, setScannerMode] = useState('gainers');
  const [oiExpiry, setOiExpiry] = useState('weekly');
  const [oneTapActive, setOneTapActive] = useState(false);
  const [desktopCustomMode, setDesktopCustomMode] = useState(false);
  const [mobileSwipeTab, setMobileSwipeTab] = useState(0);
  const [mobileTab, setMobileTab] = useState('quote');
  const [customLayout, setCustomLayout] = useState({ showOB: true, showScanner: true, showWL: true, showOI: true });

  const assetsRef = useRef(assets), balanceRef = useRef(balance), portfolioRef = useRef(portfolio), execFillRef = useRef(null), contentRef = useRef(null), toastTimer = useRef(null), chatEndRef = useRef(null), lastActivity = useRef(Date.now());
  const MAX_ORDERS = 500;
  const setOrdersCapped = useCallback((updater) => {
    setOrders(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return next.length > MAX_ORDERS ? next.slice(0, MAX_ORDERS) : next;
    });
  }, []);

  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current); }, []);
  useEffect(() => { const f = () => { const w = window.innerWidth, m = w < 768; setIsMobile(m); if (!m) setSidebarOpen(false); setSidebarCollapsed(w >= 768 && w < 1100); }; window.addEventListener('resize', f, { passive: true }); return () => window.removeEventListener('resize', f); }, []);
  assetsRef.current = assets; balanceRef.current = balance; portfolioRef.current = portfolio;

  const selAsset = useMemo(() => assets.find(a => a.id === selId), [assets, selId]);
  const holding = useMemo(() => portfolio.find(h => h.id === selId), [portfolio, selId]);
  const portVal = useMemo(() => portfolio.reduce((s, h) => { const a = assets.find(x => x.id === h.id); return s + (a ? a.price * h.qty : 0); }, 0), [portfolio, assets]);
  const totalVal = balance + portVal;
  const costBasis = useMemo(() => portfolio.reduce((s, h) => s + h.avg * h.qty, 0), [portfolio]);
  const totalPnl = portVal - costBasis;
  const totalPct = costBasis > 0 ? totalPnl / costBasis * 100 : 0;
  const holdPnl = holding && selAsset ? (selAsset.price - holding.avg) * holding.qty : 0;
  const holdPct = holding && selAsset ? (selAsset.price - holding.avg) / holding.avg * 100 : 0;
  const unreadNotifs = notifications.filter(n => !n.read).length;
  const activeAlerts = alerts.filter(a => !a.triggered).length;

  const initDone = useRef(false);
  useEffect(() => { if (initDone.current) return; initDone.current = true; setPortHist(genPortHistory(BALANCE_INIT + PORT_INIT.reduce((s, h) => { const a = ASSETS_INIT.find(x => x.id === h.id); return s + (a ? a.price * h.qty : 0); }, 0))); }, []);
  useEffect(() => { if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' }); }, [aiChat, aiLoading]);

  useEffect(() => {
    if (!user) return;
    const SESSION_TIMEOUT = 30 * 60 * 1000;
    const resetTimer = () => { lastActivity.current = Date.now(); setSessionExpiry(Date.now() + SESSION_TIMEOUT); if (inactiveTimerRef.current) clearTimeout(inactiveTimerRef.current); inactiveTimerRef.current = setTimeout(() => { showToast('Session expired', 'warning'); setTimeout(() => { SecureSession.clear(); setUser(null); }, 2000); }, SESSION_TIMEOUT); };
    const evts = ['mousedown', 'keydown', 'touchstart', 'scroll']; evts.forEach(e => window.addEventListener(e, resetTimer, { passive: true })); resetTimer();
    return () => { evts.forEach(e => window.removeEventListener(e, resetTimer)); if (inactiveTimerRef.current) clearTimeout(inactiveTimerRef.current); };
  }, [user]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const map: { [key: string]: string | null } = { '1': 'dashboard', '2': 'chart', '3': 'markets', '4': 'portfolio', '5': 'orders', '6': 'analytics', '7': 'dualchart', '8': 'mtf', '9': 'desktop', 'd': 'desktop', 'h': null };
      if (map[e.key] !== undefined && map[e.key] !== null) setTab(map[e.key]);
      if (e.key === 'h' && !e.ctrlKey) setShowHotkeys(p => !p);
      if (e.key === 'b' && !e.ctrlKey) { setOForm(f => ({ ...f, side: 'buy' })); setTab('chart'); }
      if (e.key === 's' && !e.ctrlKey) { setOForm(f => ({ ...f, side: 'sell' })); setTab('chart'); }
      if (e.key === 'l' && !e.ctrlKey) setOForm(f => ({ ...f, kind: 'limit' }));
      if (e.key === 'm' && !e.ctrlKey) setOForm(f => ({ ...f, kind: 'market' }));
      if (e.key === 'Escape') { setConfirmOrder(null); setShowNotifs(false); setChartFullscreen(false); setSidebarOpen(false); setShowHotkeys(false); }
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  const showToast = useCallback((msg: string, type = 'success') => { setToast({ msg, type }); if (toastTimer.current) clearTimeout(toastTimer.current); toastTimer.current = setTimeout(() => setToast(null), 3200); }, []);
  const checkAlerts = useCallback(() => { const cur = assetsRef.current; setAlerts(prev => prev.map(alert => { if (alert.triggered) return alert; const a = cur.find(x => x.id === alert.symbol); if (!a) return alert; const triggered = (alert.type === 'above' && a.price >= alert.price) || (alert.type === 'below' && a.price <= alert.price); if (triggered) { const msg = `🔔 Alert: ${sanitize(alert.symbol)} ${alert.type === 'above' ? '▲ above' : '▼ below'} ${fp(alert.price)}`; showToast(msg, 'warning'); setNotifications(prev => [{ id: Date.now(), type: 'alert', msg: sanitize(msg), time: Date.now(), read: false }, ...prev]); return { ...alert, triggered: true }; } return alert; })); }, [showToast]);
  const checkGTT = useCallback(() => { const cur = assetsRef.current; setGttOrders(prev => { const toFill = []; const rem = prev.filter(g => { const a = cur.find(x => x.id === g.assetId); if (!a) return true; if (g.status === 'active') { const hit = (g.triggerType === 'above' && a.price >= g.trigger) || (g.triggerType === 'below' && a.price <= g.trigger); if (hit) { toFill.push({ ...g, ep: g.limitPrice || a.price }); return false; } } return true; }); toFill.forEach(g => { execFillRef.current?.({ side: g.side, kind: 'gtt', qty: g.qty, assetId: g.assetId, leverage: 1, sl: g.sl, tp: g.tp, avg: g.side === 'sell' ? (portfolioRef.current.find(h => h.id === g.assetId)?.avg || 0) : 0 }, g.ep, true); showToast(`🎯 GTT: ${g.side.toUpperCase()} ${g.qty} ${g.assetId} @ ${fp(g.ep)}`, 'success'); }); return rem; }); }, [showToast]);
  const processSLTP = useCallback(() => { const cur = assetsRef.current, port = portfolioRef.current; const triggered = [], remaining = []; for (const h of port) { const a = cur.find(x => x.id === h.id); if (!a) { remaining.push(h); continue; } if (h.sl != null && a.price <= h.sl) triggered.push({ type: 'sl', h, a }); else if (h.tp != null && a.price >= h.tp) triggered.push({ type: 'tp', h, a }); else remaining.push(h); } if (!triggered.length) return; let balDelta = 0; const newOrders = []; for (const { type, h, a } of triggered) { balDelta += a.price * h.qty; newOrders.push({ id: genUUID(), assetId: h.id, side: 'sell', kind: type === 'sl' ? 'stop-loss' : 'take-profit', qty: h.qty, ep: a.price, avg: h.avg, pnl: (a.price - h.avg) * h.qty, time: Date.now(), status: 'filled' }); showToast(type === 'sl' ? `⚡ SL: ${h.id} @ ${fp(a.price)}` : `🎯 TP: ${h.id} @ ${fp(a.price)}`, type === 'sl' ? 'warning' : 'success'); } setBalance(b => b + balDelta); setOrdersCapped(o => [...newOrders, ...o]); setPortfolio(remaining); }, [showToast, setOrdersCapped]);
  const processPendingOrders = useCallback(() => { const cur = assetsRef.current; setPending(prev => { const fill = []; const rem = prev.filter(o => { const a = cur.find(x => x.id === o.assetId); if (!a) return true; if (o.kind === 'limit' && o.side === 'buy' && a.price <= o.limitPrice) { fill.push({ ...o, ep: a.price }); return false; } if (o.kind === 'limit' && o.side === 'sell' && a.price >= o.limitPrice) { fill.push({ ...o, ep: a.price }); return false; } if (o.kind === 'stop' && o.side === 'buy' && a.price >= o.limitPrice) { fill.push({ ...o, ep: a.price }); return false; } if (o.kind === 'stop' && o.side === 'sell' && a.price <= o.limitPrice) { fill.push({ ...o, ep: a.price }); return false; } return true; }); if (fill.length) setTimeout(() => fill.forEach(o => execFillRef.current?.(o, o.ep, true)), 0); return rem; }); }, []);
  const execFill = useCallback((o, ep, auto = false) => { const qty = parseFloat(o.qty); if (!qty || qty <= 0 || !isFinite(qty)) return; const cost = qty * ep, avgBuy = o.avg ?? (portfolioRef.current.find(h => h.id === o.assetId)?.avg ?? ep), pnl = o.side === 'sell' ? (ep - avgBuy) * qty : 0; if (o.side === 'buy') { setBalance(b => b - cost); setPortfolio(p => { const ex = p.find(h => h.id === o.assetId); if (ex) return p.map(h => h.id === o.assetId ? { ...h, qty: h.qty + qty, avg: (h.avg * h.qty + cost) / (h.qty + qty), sl: o.sl ?? h.sl, tp: o.tp ?? h.tp } : h); return [...p, { id: o.assetId, qty, avg: ep, sl: o.sl ?? null, tp: o.tp ?? null }]; }); } else { setBalance(b => b + cost); setPortfolio(p => p.map(h => h.id === o.assetId ? { ...h, qty: Math.max(0, h.qty - qty) } : h).filter(h => h.qty > 0.000001)); } setOrdersCapped(prev => [{ ...o, ep, status: 'filled', time: Date.now(), id: genUUID(), pnl }, ...prev]); if (!auto) showToast(`✓ ${o.side.toUpperCase()} ${qty} ${o.assetId} @ ${fp(ep)} FILLED`, 'success'); else showToast(`⚡ AUTO: ${o.side.toUpperCase()} ${qty} ${o.assetId} @ ${fp(ep)}`, 'info'); }, [showToast, setOrdersCapped]);
  execFillRef.current = execFill;

  useEffect(() => {
    const iv = setInterval(() => {
      setAssets(prev => prev.map(a => { const d = (Math.random() - 0.488) * a.price * a.vol; const np = Math.max(0.0001, isFinite(a.price + d) ? a.price + d : a.price); return { ...a, price: np, change: (np - a.prev) / a.prev * 100 }; }));
      setCandles(prev => { const nx = {}; Object.entries(prev).forEach(([id, arr]) => { const last = arr[arr.length - 1], asset = assetsRef.current.find(x => x.id === id); const np = asset ? asset.price : last.c, isNew = Date.now() - last.t > 60000; if (isNew) nx[id] = [...arr.slice(-119), { t: Date.now(), o: last.c, h: Math.max(last.c, np), l: Math.min(last.c, np), c: np, v: Math.floor(100 + Math.random() * 4000) }]; else nx[id] = [...arr.slice(0, -1), { ...last, h: Math.max(last.h, np), l: Math.min(last.l, np), c: np, v: last.v + Math.floor(Math.random() * 40) }]; }); return nx; });
      setPortHist(prev => { if (!prev.length) return prev; const last = prev[prev.length - 1], np = Math.max(0, last.value + (Math.random() - 0.44) * last.value * 0.003); return [...prev.slice(-59), { i: prev.length, value: Math.round(np) }]; });
      processSLTP(); processPendingOrders(); checkAlerts(); checkGTT();
    }, 1500); return () => clearInterval(iv);
  }, [processSLTP, processPendingOrders, checkAlerts, checkGTT]);

  useEffect(() => { if (!selAsset) return; const p = selAsset.price; const bids = Array.from({ length: 16 }, (_, i) => ({ p: +(p * (1 - 0.0003 * (i + 1) - Math.random() * 0.00006)).toFixed(4), s: Math.floor(40 + Math.random() * 1400) })).sort((a, b) => b.p - a.p); const asks = Array.from({ length: 16 }, (_, i) => ({ p: +(p * (1 + 0.0003 * (i + 1) + Math.random() * 0.00006)).toFixed(4), s: Math.floor(40 + Math.random() * 1400) })).sort((a, b) => a.p - b.p); let c = 0; bids.forEach(b => { c += b.s; b.cum = c; }); c = 0; asks.forEach(a => { c += a.s; a.cum = c; }); const mx = Math.max(...bids.map(b => b.cum), ...asks.map(a => a.cum)); bids.forEach(b => b.pct = b.cum / mx * 100); asks.forEach(a => a.pct = a.cum / mx * 100); setOBBook({ bids, asks }); }, [selId, selAsset?.price]);

  const submitOrder = useCallback((sideOverride, kindOverride) => {
    const qty = parseFloat(oForm.qty); if (!qty || qty <= 0) { showToast('Enter a valid quantity', 'error'); return; } if (!selAsset) { showToast('No asset selected', 'error'); return; }
    const side = sideOverride ?? oForm.side; const kind = kindOverride ?? oForm.kind;
    const sl = oForm.slOn && oForm.sl ? parseFloat(oForm.sl) : null, tp = oForm.tpOn && oForm.tp ? parseFloat(oForm.tp) : null, price = kind === 'market' ? selAsset.price : parseFloat(oForm.limitPrice || selAsset.price);
    const validErr = validateOrder(qty, price, side === 'buy' ? balanceRef.current : null, side === 'sell' ? holding : null, side); if (validErr) { showToast(validErr, 'error'); return; }
    if (kind === 'market') { const cost = qty * selAsset.price / (oForm.leverage || 1); if (side === 'buy' && cost > balanceRef.current) { showToast('Insufficient balance', 'error'); return; } if (side === 'sell' && (!holding || holding.qty < qty)) { showToast('Insufficient position', 'error'); return; } setConfirmOrder({ side, kind: 'market', qty, assetId: selAsset.id, leverage: oForm.leverage, sl, tp, avg: holding?.avg ?? selAsset.price, price: selAsset.price, estimatedValue: qty * selAsset.price }); }
    else { const lp = parseFloat(oForm.limitPrice); if (!lp || lp <= 0) { showToast('Enter valid limit/stop price', 'error'); return; } setPending(p => [{ side, kind, qty, assetId: selAsset.id, limitPrice: lp, leverage: oForm.leverage, sl, tp, time: Date.now(), id: genUUID(), status: 'pending' }, ...p]); showToast(`${kind.toUpperCase()} placed: ${qty} ${selAsset.id} @ ${fp(lp)}`, 'info'); }
  }, [oForm, selAsset, holding, showToast]);

  const tapLimitOrder = useCallback((side, pricePct) => { if (!selAsset) return; if (!OrderRateLimiter.check(5, 10000)) { showToast('Too many orders', 'error'); return; } const lp = +(selAsset.price * (1 + pricePct / 100)).toFixed(4), qty = parseFloat(oForm.qty) || 1; setPending(p => [{ side, kind: 'limit', qty, assetId: selAsset.id, limitPrice: lp, leverage: 1, sl: null, tp: null, time: Date.now(), id: genUUID(), status: 'pending' }, ...p]); showToast(`⚡ 1-Tap: ${side.toUpperCase()} ${qty} ${selAsset.id} @ ${fp(lp)}`, 'success'); }, [selAsset, oForm.qty, showToast]);

  const confirmAndExecute = useCallback(() => { if (!confirmOrder) return; execFill(confirmOrder, confirmOrder.price); setConfirmOrder(null); }, [confirmOrder, execFill]);

  const sendAiMessage = useCallback(async () => { let msg = ''; setAiInput(prev => { msg = prev.trim(); return ''; }); await Promise.resolve(); if (!msg) return; if (!AiRateLimiter.check(10, 60000)) { showToast('Max 10 AI messages/min', 'warning'); return; } setAiChat(c => [...c, { role: 'user', content: sanitize(msg) }]); setAiLoading(true);
  try { await new Promise(r => setTimeout(r, 800)); const cur = assetsRef.current; const resp = { nifty: `📊 NIFTY 50 Analysis\n\nCurrent: ${fp(cur.find(a => a.id === 'NIFTY50')?.price || 22150)}\n\n▶ Outlook: Mildly bullish — holding 22,000 support\n▶ Resistance: 22,500 → 23,000\n▶ RSI: ~58 (neutral-bullish)\n▶ EMA21 acting as support\n\n📌 Strategy: Hold longs, add dips to 21,900.\n\n⚠ Not financial advice.`, reliance: `📊 RELIANCE Analysis\n\nCurrent: ${fp(cur.find(a => a.id === 'RELIANCE')?.price || 2847)}\n\n▶ Consolidating near ATH\n▶ Jio re-rating catalyst in FY25\n▶ Support: ₹2700 | Resistance: ₹3000\n\n📌 Strategy: Hold. Fresh entry on pullback to ₹2750.\n\n⚠ Not financial advice.`, risk: `📊 Portfolio Risk Assessment\n\nIT: ~28% (TCS + INFY)\nEnergy: ~22% (RELIANCE)\nBanking: ~18% | Crypto: ~12%\n\nRisk Level: MODERATE ✅\n▶ Good diversification\n▶ Sharpe: ~1.6\n\n⚠ Not financial advice.`, ipo: `📋 IPO Analysis\n\nTop performers:\n▶ Bajaj Housing Finance: +114% ✅\n▶ Waaree Energies: +67% ✅\n▶ Ola Electric: -50% ❌\n\nUpcoming:\n▶ Hexaware Tech: GMP ₹45 (₹674 issue)\n▶ Ather Energy: GMP ₹22 (OPEN)\n\n⚠ Not financial advice.`, mtf: `⚡ MTF Strategy\n\nMTF = 4x leverage on NSE-approved stocks\n▶ Interest: 0.035%/day = ~12.8% annual\n▶ Best for: 1-5 day momentum trades\n▶ Always use SL with MTF!\n\n⚠ MTF amplifies losses too. Not financial advice.`, mf: `📊 Top Mutual Fund Picks\n\n▶ Parag Parikh Flexi Cap: 34.5% (1Y) ⭐⭐⭐⭐⭐\n▶ Quant Small Cap: 68.4% (1Y) - High Risk\n▶ HDFC Index Nifty 50: 26.8% (1Y) - Safe\n\n📌 Invest via SIP for rupee cost averaging.\n\n⚠ Not financial advice.`, default: `📊 APEX AI Ready\n\nAsk me:\n• "Analyze NIFTY"\n• "IPO outlook"\n• "MTF strategy"\n• "Best mutual funds"\n• "Portfolio risk"\n\nConnect Anthropic API for full AI capabilities.` }; const k = msg.toLowerCase().includes('ipo') ? 'ipo' : msg.toLowerCase().includes('mtf') || msg.toLowerCase().includes('margin') ? 'mtf' : msg.toLowerCase().includes('mutual') || msg.toLowerCase().includes('mf') ? 'mf' : msg.toLowerCase().includes('nifty') ? 'nifty' : msg.toLowerCase().includes('reliance') ? 'reliance' : msg.toLowerCase().includes('risk') || msg.toLowerCase().includes('portfolio') ? 'risk' : 'default'; setAiChat(c => [...c, { role: 'assistant', content: resp[k] }]); } catch { setAiChat(c => [...c, { role: 'assistant', content: '❌ AI service unavailable.' }]); } setAiLoading(false); }, [showToast]);

  const riskCalcResult = useMemo(() => { const e = parseFloat(riskCalc.entry), sl = parseFloat(riskCalc.sl), t = parseFloat(riskCalc.target), cap = parseFloat(riskCalc.capital), rPct = parseFloat(riskCalc.riskPct); if (!e || !sl || e === sl || !isFinite(e) || !isFinite(sl)) return null; if (!isFinite(cap) || cap <= 0 || !isFinite(rPct) || rPct <= 0) return null; const riskPerUnit = Math.abs(e - sl), maxRiskAmt = cap * (rPct / 100), positionSize = Math.max(0, Math.floor(maxRiskAmt / riskPerUnit)), totalRisk = positionSize * riskPerUnit, reward = t && isFinite(t) ? Math.abs(t - e) * positionSize : null, rrRatio = t && isFinite(t) && riskPerUnit > 0 ? Math.abs(t - e) / riskPerUnit : null; return { riskPerUnit, maxRiskAmt, positionSize, totalRisk, reward, rrRatio }; }, [riskCalc]);

  const filtered = useMemo(() => assets.filter(a => (fType === 'all' || a.type === fType) && (!debouncedSearch || a.id.toLowerCase().includes(debouncedSearch.toLowerCase()) || a.name.toLowerCase().includes(debouncedSearch.toLowerCase()))), [assets, fType, debouncedSearch]);
  const topGain = useMemo(() => [...assets].sort((a, b) => b.change - a.change).slice(0, 8), [assets]);
  const topLoss = useMemo(() => [...assets].sort((a, b) => a.change - b.change).slice(0, 8), [assets]);
  const topVol = useMemo(() => [...assets].sort((a, b) => b.vol - a.vol).slice(0, 8), [assets]);
  const selC = candles[selId] || [];
  const pieData = useMemo(() => portfolio.map(h => { const a = assets.find(x => x.id === h.id); return { name: h.id, value: a ? a.price * h.qty : 0 }; }).filter(d => d.value > 0), [portfolio, assets]);
  const portColor = cc(totalPnl);
  const dayPnl = portHist.length >= 2 ? portHist[portHist.length - 1].value - portHist[portHist.length - 2].value : 0;
  const watchlistAssets = useMemo(() => watchlist.map(id => assets.find(a => a.id === id)).filter(Boolean), [watchlist, assets]);
  const scannerResults = useMemo(() => { if (scannerMode === 'gainers') return topGain; if (scannerMode === 'losers') return topLoss; if (scannerMode === 'volume') return topVol; return assets.filter(a => { const c = candles[a.id] || []; if (c.length < 20) return false; const h20 = Math.max(...c.slice(-20).slice(0, -1).map(x => x.c)); return a.price > h20; }).slice(0, 8); }, [scannerMode, topGain, topLoss, topVol, assets, candles]);

  const NAV = [
    { id: 'dashboard', emoji: '⬛', label: 'Dashboard' },
    { id: 'chart', emoji: '📊', label: 'Chart & Trade' },
    { id: 'dualchart', emoji: '⊞', label: 'Dual Chart' },
    { id: 'markets', emoji: '🌐', label: 'Markets' },
    { id: 'mtf', emoji: '⚡', label: 'MTF Trading' },
    { id: 'desktop', emoji: '🖥', label: 'Desktop Mode' },
    { id: 'mobile', emoji: '📱', label: 'Mobile Mode' },
    { id: 'portfolio', emoji: '💼', label: 'Portfolio' },
    { id: 'orders', emoji: '📋', label: 'Orders' },
    { id: 'analytics', emoji: '📈', label: 'Analytics' },
    { id: 'leaderboard', emoji: '🏆', label: 'Leaderboard' },
    { id: 'ai', emoji: '🤖', label: 'AI Assistant' },
    { id: 'alerts', emoji: '🔔', label: 'Alerts', badge: activeAlerts > 0 },
    { id: 'journal', emoji: '📓', label: 'Trade Journal' },
    { id: 'risk', emoji: '🧮', label: 'Risk Calc' },
    { id: 'gtt', emoji: '⏰', label: 'GTT Orders' },
  ];

  if (!user) return <LoginScreen onLogin={u => setUser(u)} />;

  // Render the main UI
  return (
    <div className="h-screen bg-bg0 text-text flex">
      {/* Sidebar */}
      <div className={`bg-bg2 border-r border-border flex flex-col ${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ${isMobile ? 'hidden' : ''}`}>
        <div className="p-4 border-b border-border flex items-center gap-2 justify-between">
          {!sidebarCollapsed && <div className="flex-1"><div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">⬛ APEX</div><div className="text-xs text-muted">TRADER PRO</div></div>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="text-muted hover:text-text">☰</button>
        </div>
        {!sidebarCollapsed && user && <div className="p-4 border-b border-border"><div className="text-sm font-semibold">{user.name}</div><div className="text-xs text-muted">{user.email}</div><div className={`text-xs ${portColor === G ? 'text-green-500' : 'text-red-500'}`}>{inr(totalVal)} total</div></div>}
        <div className="flex-1 overflow-auto">
          {NAV.map(n => (
            <button key={n.id} onClick={() => setTab(n.id)} className={`w-full flex items-center gap-3 p-3 hover:bg-bg3 transition-colors ${tab === n.id ? 'bg-bg4 border-r-2 border-blue-500' : ''}`}>
              <span className="text-lg">{n.emoji}</span>
              {!sidebarCollapsed && <span className="flex-1 text-left text-sm">{n.label}</span>}
              {n.badge && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <button onClick={() => { SecureSession.clear(); setUser(null); }} className="w-full bg-red-500/20 text-red-500 py-2 rounded hover:bg-red-500/30 transition-colors">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-12 bg-bg2 border-b border-border flex items-center justify-between px-4">
          {isMobile && <button onClick={() => setSidebarOpen(true)} className="text-muted">☰</button>}
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold">{inr(totalVal)}</div>
            <div className={`text-sm ${portColor === G ? 'text-green-500' : 'text-red-500'}`}>{pct(totalPnl)}</div>
            <button onClick={() => setShowNotifs(!showNotifs)} className="relative text-muted hover:text-text">
              🔔
              {unreadNotifs > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {tab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-bg3 border border-border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Portfolio Value</h3>
                <div className="text-2xl font-bold">{inr(totalVal)}</div>
                <div className={`text-sm ${portColor === G ? 'text-green-500' : 'text-red-500'}`}>{pct(totalPct)}</div>
              </div>
              <div className="bg-bg3 border border-border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Today's P&L</h3>
                <div className={`text-2xl font-bold ${dayPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>{inr(dayPnl)}</div>
              </div>
              <div className="bg-bg3 border border-border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Active Positions</h3>
                <div className="text-2xl font-bold">{portfolio.length}</div>
              </div>
            </div>
          )}

          {tab === 'chart' && (
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <select value={selId} onChange={e => setSelId(e.target.value)} className="bg-bg0 border border-border rounded px-3 py-2">
                  {assets.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="flex-1 bg-bg3 border border-border rounded-lg p-4">
                <div className="text-center text-muted">Chart component would go here</div>
              </div>
            </div>
          )}

          {/* Add more tabs as needed */}
          <div className="text-center text-muted mt-8">
            More features coming soon...
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="w-64 h-full bg-bg2 border-r border-border" onClick={e => e.stopPropagation()}>
            {/* Same sidebar content */}
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-bg3 border border-border rounded-lg p-4 shadow-lg">
          <div className={`text-sm ${toast.type === 'success' ? 'text-green-500' : toast.type === 'error' ? 'text-red-500' : 'text-yellow-500'}`}>
            {toast.msg}
          </div>
        </div>
      )}
    </div>
  );
}

// Login Screen Component
function LoginScreen({ onLogin }: { onLogin: (user: any) => void }) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const updateForm = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (error) setError('');
  };

  const handleLogin = async () => {
    if (!form.email.includes('@') || form.password.length < 4) {
      setError('Please enter valid email and password (min 4 characters)');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (form.email === 'demo@apex.com' && form.password === 'demo') {
      const user = {
        name: 'Demo Trader',
        email: form.email,
        id: 'demo-user',
        avatar: null,
      };
      SecureSession.set('user', user);
      onLogin(user);
    } else {
      setError('Invalid credentials. Use demo@apex.com / demo for demo access.');
    }

    setIsLoading(false);
  };

  const handleSignup = async () => {
    if (!form.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate account creation delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const user = {
      name: form.name.trim(),
      email: form.email.toLowerCase(),
      id: `user-${Date.now()}`,
      avatar: null,
    };

    SecureSession.set('user', user);
    onLogin(user);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6">
            <span className="text-3xl font-bold text-white">A</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to Apex Trader</h1>
          <p className="text-white/60">Professional trading platform</p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Mode Toggle */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
            <button
              onClick={() => {
                setMode('login');
                setError('');
                setForm({ name: '', email: '', password: '', confirm: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setError('');
                setForm({ name: '', email: '', password: '', confirm: '' });
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                mode === 'signup'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateForm('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && (mode === 'login' ? handleLogin() : handleSignup())}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => updateForm('password', e.target.value)}
                placeholder={mode === 'login' ? 'Enter your password' : 'Create a password (min 6 chars)'}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && (mode === 'login' ? handleLogin() : handleSignup())}
              />
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={form.confirm}
                  onChange={(e) => updateForm('confirm', e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
                />
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-red-400 text-lg">􀁡</span>
                <span className="text-red-400 text-sm font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={mode === 'login' ? handleLogin : handleSignup}
            disabled={isLoading}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
              </div>
            ) : (
              mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>

          {/* Demo Account Info */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-400 text-lg">􀌮</span>
              <span className="text-blue-400 text-sm font-medium">Demo Account</span>
            </div>
            <div className="text-white/70 text-sm">
              <div className="font-mono bg-white/10 px-2 py-1 rounded text-xs">
                demo@apex.com / demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}