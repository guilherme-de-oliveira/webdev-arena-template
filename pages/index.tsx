import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, EllipsisVertical, Clock, Search, Dot, Menu } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const newsItems = [
    {
      id: 231,
      title: "US Senate Passes Landmark Infrastructure Bill",
      readTime: "5 min read",
      description: "A historic $1.2 trillion plan to rebuild America's roads, bridges, and broadband networks.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://picsum.photos/id/231/400/400"
    },
    {
      id: 232,
      title: "Global Leaders Gather for Climate Summit in Paris",
      readTime: "5 min read",
      description: "Discussions center around emissions targets, clean energy innovations, and climate finance.",
      img: "https://picsum.photos/id/232/400/400"
    },
    {
      id: 233,
      title: "Tech Giant Unveils Breakthrough in Quantum Computing",
      readTime: "5 min read",
      description: "Promises to revolutionize industries from cryptography to pharmaceuticals.",
      img: "https://picsum.photos/id/233/400/400"
    },
    {
      id: 234,
      title: "New Vaccine Shows Promise Against Emerging Virus Variant",
      readTime: "5 min read",
      description: "Early trials show increased efficacy and fewer side effects compared to earlier versions.",
      img: ""
    },
    {
      id: 235,
      title: "Electric Vehicle Sales Surge Globally in 2025",
      readTime: "5 min read",
      description: "Consumers embrace sustainability with record-breaking EV purchases this year.",
      img: "https://picsum.photos/id/235/400/400"
    },
    {
      id: 236,
      title: "Breakthrough in Renewable Energy Storage Unveiled",
      readTime: "5 min read",
      description: "Scientists develop a new battery with 5x energy density. Scientists develop a new battery with 5x energy density. Scientists develop a new battery with 5x energy density.",
      img: "https://picsum.photos/id/236/400/400"
    },
    {
      id: 237,
      title: "Archaeologists Discover Ancient City in the Amazon",
      readTime: "5 min read",
      description: "Findings could rewrite the history of early civilizations in South America. Findings could rewrite the history of early civilizations in South America. Findings could rewrite the history of early civilizations in South America.",
      img: ""
    },
    {
      id: 238,
      title: "AI Beats Human Champions in Multi-Disciplinary Games",
      readTime: "5 min read",
      description: "A new AI sets records in both strategic and creative competitions.",
      img: "https://picsum.photos/id/238/400/400"
    },
    {
      id: 239,
      title: "Mars Rover Sends Back Most Detailed Images Yet",
      readTime: "5 min read",
      description: "NASA reveals unprecedented surface detail from the red planet.",
      img: "https://picsum.photos/id/239/400/400"
    },
    {
      id: 240,
      title: "Cities Turn to Smart Infrastructure to Combat Climate Change",
      readTime: "5 min read",
      description: "Urban centers are deploying technology to reduce emissions and improve resilience.",
      img: "https://picsum.photos/id/240/400/400"
    }
  ];

  const newsItems2 = [
    {
      id: 231,
      title: "Global Cybersecurity Summit Addresses Rising Threats",
      readTime: "5 min read",
      description:
        "Leading experts and policymakers gather for a global cybersecurity summit to discuss strategies for combating the escalating threats in the digital landscape.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://picsum.photos/id/231/400/400"

    },
    {
      id: 232,
      title: "Artificial Intelligence Enhances Early Cancer Detection",
      readTime: "5 min read",
      description:
        "Advancements in artificial intelligence contribute to early cancer detection, offering a more accurate and efficient diagnosis that could significantly impact treatment results.",
        img: "https://picsum.photos/id/232/400/400"

    },
    {
      id: 233,
      title: "Tech Entrepreneur Shares Tips for Work-Life Balance",
      readTime: "5 min read",
      description:
        "Adedeji Adeboye shares insights on achieving a healthy work-life balance in the fast-paced tech industry. The article explores practical tips for maintaining balanced well-being.",
        img: "https://picsum.photos/id/233/400/400"
    },
    {
      id: 234,
      title: "Disney Unveils New Streaming Service with Exclusive Content",
      readTime: "5 min read",
      description:
        "Disney announces the launch of a new streaming service, featuring exclusive content from beloved franchises. The move further intensifies the competition in the streaming industry.",
        img: "https://picsum.photos/id/234/400/400"
    },
    {
      id: 235,
      title: "Olympic Board Reveals Host City for 2032 Summer Games",
      readTime: "5 min read",
      description:
        "The International Olympic Committee announces the host city for the 2032 Summer Games, sparking excitement and anticipation among sports enthusiasts worldwide.",
        img: "https://picsum.photos/id/235/400/400"

    },
    {
      id: 236,
      title: "Researchers Make Wave in Alzheimer’s Disease Treatment",
      readTime: "5 min read",
      description:
        "Scientists achieve a significant breakthrough in Alzheimer’s disease treatment, offering hope for millions affected by the condition. The research unveils promising results.",
        img: "https://picsum.photos/id/236/400/400"
    },
    {
      id: 237,
      title: "Hollywood Icon Receives Lifetime Achievement Award",
      readTime: "5 min read",
      description:
        "A beloved Hollywood star is honoured with a prestigious lifetime achievement award, recognizing their exceptional contributions to the film industry over the years.",
        img: "https://picsum.photos/id/237/400/400"

    },
    {
      id: 238,
      title: "Epic Cross-Country Cycling Race Kicks Off",
      readTime: "5 min read",
      description:
        "Cyclists from around the world embark on an epic cross-country race, challenging their endurance and showcasing the spirit of adventure in the world of competitive cycling.",
        img: "https://picsum.photos/id/238/400/400"
      },
  ];

  const cookingItems = [
    {
      id: 31,
      title: "Italian Pasta",
      readTime: "5 min read",
      description:
        "Leading experts and policymakers gather for a global cybersecurity summit to discuss strategies for combating the escalating threats in the digital landscape.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "https://picsum.photos/id/31/400/400"
      },
    {
      id: 32,
      title: "The art of cooking",
      readTime: "5 min read",
      description:
        "Advancements in artificial intelligence contribute to early cancer detection, offering a more accurate and efficient diagnosis that could significantly impact treatment results.",
        img: "https://picsum.photos/id/232/400/400"
      },
    {
      id: 33,
      title: "Roasted portatoes",
      readTime: "5 min read",
      description:
        "Adedeji Adeboye shares insights on achieving a healthy work-life balance in the fast-paced tech industry. The article explores practical tips for maintaining balanced well-being.",
        img: "https://picsum.photos/id/33/400/400"
      },
    {
      id: 34,
      title: "Vegetarion food like never",
      img: "https://picsum.photos/id/34/400/400",
      readTime: "5 min read",
      description:
        "Disney announces the launch of a new streaming service, featuring exclusive content from beloved franchises. The move further intensifies the competition in the streaming industry.",
    },
  ];

  const bestOf2025Items = [
    {
      id: 301,
      title: "Blockbuster Bliss: Top 2025 Movies That Owned the Big Screen",
      description: "From heartwarming dramas to action-packed adventures, explore the must-watch films that dominated cinemas and captured audiences' hearts in 2025.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://picsum.photos/id/301/400/400",
      readTime: "5 min read"
    },
    {
      id: 302,
      title: "TikTok Triumphs: The Viral Trends That Defined 2025",
      description: "Delve into the TikTok trends that took the internet by storm, from dance crazes to challenges that kept us scrolling and sharing throughout the year.",
      img: "https://picsum.photos/id/302/400/400",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "TV Shows: Best Shows That Glued Us to the Couch in 2025",
      description: "Uncover the television series that kept us binge-watching, laughing, and crying, making 2025 a remarkable year for small-screen entertainment.",
      img: "https://picsum.photos/id/3/400/400",
      readTime: "4 min read"
    }
  ];

  const categories = [
    "Politics",
    "Climate",
    "Technology",
    "Health",
    "Transportation",
    "Energy",
    "Archaeology",
    "Artificial Intelligence",
    "Space",
    "Urban Development"
  ];

  const [selectedItem, setSelectedItem] = React.useState<{
    id: number;
    title: string;
    description: string;
    img: string;
    readTime: string;
  } | null>(null);  
    React.useEffect(() => {
      const updateSelectedItem = () => {
        const hash = window.location.hash.substring(1);
        const id = parseInt(hash, 10);
        const item = newsItems2.find((news) => news.id === id);
        setSelectedItem(item || null);
      };
  
      updateSelectedItem();
      window.addEventListener('hashchange', updateSelectedItem);
      return () => window.removeEventListener('hashchange', updateSelectedItem);
      // eslint-disable-next-line
    }, []); // as we are working with mock data, disable eslint for it
  
    function NewsItemDetail() {
      if (selectedItem) {
        return (
          <div className="p-4 mr-auto space-y-4 mb-[150px] 2xl:px-40 xl:px-30 lg:px-24">
            <Link key={selectedItem.id} href={``} scroll={false} >
              <button
                onClick={() => setSelectedItem(null)}
                className="text-black text-sm hover:underline"
              >
                ← Back
              </button>
            </Link>
            <h2 className="text-xl font-bold">{selectedItem.title}</h2>
            <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{selectedItem.readTime}</span>
                </div>
            {selectedItem.img && (
            <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover">

                  </img>
            )}
            <p className="text-gray-700">{selectedItem.description}</p>

          </div>
        );
      }
    }
    const [searchItem, setSearchItem] = React.useState<boolean>(false);
    const [searchItemDetail, setSearchItemDetail] = React.useState<string>('');

    function SearchItem() {
      if (searchItem) {
        return (
          <div className="p-4 mr-auto space-y-4 mb-[150px] 2xl:px-40 xl:px-30 lg:px-24">
            <Link href={``} scroll={false} >
              <button
                onClick={() => {
                  setSearchItem(false);
                  setSearchItemDetail('')
                }}
                className="text-black text-sm hover:underline"
              >
                ← Back
              </button>
            </Link>
            <h2 className="text-xl font-bold">Search:</h2>
            <p className="text-gray-700">{searchItemDetail}</p>

          </div>
        );
      }
    }
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [subscribed, setSubscribed] = React.useState<boolean>(false)

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required.");
      setSubscribed(false)
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSubscribed(false)
      return;
    }

    setError(""); // Clear error
    // Proceed with subscription logic
    setSubscribed(true);
  };

  const [bookmarks, setBookmarks] = React.useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };
  const [inputValue, setInputValue] = React.useState('');


  const [query, setQuery] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="bg-white text-black">
      {/* Navigation */}
      <header className="flex flex-wrap md:flex-nowrap justify-between 2xl:px-40 xl:px-30 lg:px-24 items-center p-4 gap-4">
        
        {/* Logo + Botão Hamburguer */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold">ZENITH</div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Menu Mobile (com animação) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:hidden flex flex-col space-y-2 text-sm overflow-hidden"
            >
              <a href="#home" className="hover:underline">Home</a>
              <a href="#latest-news" className="hover:underline">Latest News</a>
              <a href="#top-picks" className="hover:underline">Top Picks</a>
              <a href="#best-of-2025" className="hover:underline">Best of 2025</a>
              <a href="#newsletter" className="hover:underline">Newsletter</a>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-row space-x-4 text-sm w-full md:w-auto">
          <a onClick={() => setSearchItem(false)} href="#home" className="hover:underline">Home</a>
          <a onClick={() => setSearchItem(false)} href="#latest-news" className="hover:underline">Latest News</a>
          <a onClick={() => setSearchItem(false)} href="#top-picks" className="hover:underline">Top Picks</a>
          <a onClick={() => setSearchItem(false)} href="#best-of-2025" className="hover:underline">Best of 2025</a>
          <a onClick={() => setSearchItem(false)} href="#newsletter" className="hover:underline">Newsletter</a>
        </nav>

      {/* Campo de busca + botões */}
      <div
        className={`${
          isMenuOpen ? 'hidden' : 'hidden'
        } md:flex flex-col sm:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto`}
      >
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-gray-100 border-gray-800 rounded-full text-sm flex-1 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.hash = `#${encodeURIComponent(query.trim())}`;
                if (query == '') { 
                  setSearchItem(false)
                } else {
                  setSearchItem(true)
                }
                setSearchItemDetail(query.trim())
              }
            }}
          />
          <Search onClick={() => {
             window.location.hash = `#${encodeURIComponent(query.trim())}`;
             if (query == '') { 
              setSearchItem(false)
            } else {
              setSearchItem(true)
            }
             setSearchItemDetail(query.trim())
          }
          } 
          size={16} className="tabsolute right-3 top-1/2 -translate-x-[250%]" />
        </div>
        <div className="flex space-x-2 flex-nowrap">
          <a href="#signin" className="px-4 py-2 text-black text-sm font-medium rounded-full text-nowrap">Sign In</a>
          <a href="#signup" className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-full text-nowrap">Sign Up</a>
        </div>
      </div>
    </header>
    <div className="flex flex-row items-center w-full space-x-2 p-4 md:hidden">
  {/* Campo de busca */}
  <div className="flex flex-1 relative">
    <input
      type="text"
      placeholder="Search"
      className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          window.location.hash = `#search/${encodeURIComponent(query.trim())}`;
          if (query == '') { 
            setSearchItem(false)
          } else {
            setSearchItem(true)
          }
          setSearchItemDetail(query.trim())
        }
      }}
    />
    <Search onClick={() => {
             window.location.hash = `#search/${encodeURIComponent(query.trim())}`;
             if (query == '') { 
              setSearchItem(false)
            } else {
              setSearchItem(true)
            }             setSearchItemDetail(query.trim())
          } 
        } 
      size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
  </div>

  {/* Botões */}
  <div className="flex space-x-2 shrink-0">
    <a href="#signin" className="px-4 py-2 text-black text-sm font-medium rounded-full whitespace-nowrap">Sign In</a>
    <a href="#signup" className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-full whitespace-nowrap">Sign Up</a>
  </div>
</div>



      {/* Header with Large Logo and Categories */}
      <section id="home" className="border-gray-400 2xl:px-40 xl:px-30 lg:px-24">
        <div className="text-5xl md:text-9xl font-bold text-center text-gray-100 tracking-wider mb-4">ZENITH</div>
        <div className="border-t border-gray-300" />
        <div className="flex justify-between items-center px-4 lg:px-0 xl:px-0 py-2 text-sm">
          <div className="flex overflow-x-auto whitespace-nowrap gap-1 text-black scrollbar-hide items-center">
              <a href="#Politics" className="hover:underline">Politics</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#WorldNews" className="hover:underline">World News</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#BusinessandFinance" className="hover:underline">Business and Finance</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#ScienceandTechnology" className="hover:underline">Science and Technology</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#Entertainment" className="hover:underline">Entertainment</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#Sports" className="hover:underline">Sports</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#Wellness" className="hover:underline">Wellness</a><span className="flex-shrink-0"><Dot size={32}/></span>
              <a href="#Lifestyle" className="hover:underline">Lifestyle</a>
          </div>
          <div className="items-center space-x-2 text-gray-700 hidden xl:flex">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none text-sm px-2 py-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    window.location.hash = `#search/${encodeURIComponent(inputValue.trim())}`;
                    if (inputValue == '') { 
                      setSearchItem(false)
                    } else {
                      setSearchItem(true)
                    }                    setSearchItemDetail(inputValue.trim())
                }
              }}
            />
            <svg
            onClick={() => {
              window.location.hash = `#search/${encodeURIComponent(inputValue.trim())}`;
              if (inputValue == '') { 
                setSearchItem(false)
              } else {
                setSearchItem(true)
              }              setSearchItemDetail(inputValue.trim())
            }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>
        <hr className="my-8 mt-0 mb-1 border-gray-300" />
      </section>

      <NewsItemDetail/>
      <SearchItem/>
      {/* Latest News Section */}
      { !selectedItem && !searchItem  &&
      <>
      <section id="latest-news" className="2xl:px-40 xl:px-30 lg:px-24 p-4 pb-0">
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {[0, 4, 7].map((start, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 ${
                index === 0 ? 'md:col-span-3' : index === 1 ? 'md:col-span-6' : 'md:col-span-3'
              }`}
            >
              {newsItems.slice(start, start + (index === 1 ? 3 : 4)).map((item, idx) => (
                <Link key={item.id} href={`#${item.id}`} scroll={false} onClick={() => setSelectedItem(item)}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-md"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                >
                  {item.img && index == 1 && (
                    <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-96 object-cover"
                  />
                  )}

                  {item.img && index != 1 && (
                    <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  )}
                  
                  <div className="space-y-2 p-2">
                  {index === 1 ? (
                    <h3 className="font-semibold text-2xl">{item.title}</h3>
                  ) : (
                    <h3 className="font-semibold text-md">{item.title}</h3>
                  )}
                    
                    <p className="text-sm text-gray-600 line-clamp-4">  {item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>3 min read</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleBookmark(item.id);
                          }}
                          className={`hover:text-black ${bookmarks.includes(item.id) ? 'text-black' : 'text-gray-400'}`}
                        >
                          <Bookmark
                            size={16}
                            fill={bookmarks.includes(item.id) ? 'currentColor' : 'none'}
                          />
                        </button>
                        <button className="hover:text-black" onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation();
                        }}>
                          <EllipsisVertical size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
              ))}
              {index === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 border rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="my-8 mb-1 border-gray-300" />

      </section>

      {/* Top Picks Section */}
      <section id="top-picks" className="2xl:px-40 xl:px-30 lg:px-24 p-4">
        <h2 className="text-xl font-semibold mb-4">Top Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {newsItems2.map((item, index) => (
            <Link key={item.id} href={`#${item.id}`} scroll={false} onClick={() => setSelectedItem(item)}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              key={item.id}
              className="flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-md"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="space-y-2 p-2">
                <h3 className="font-semibold text-md leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-tight line-clamp-4">{item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleBookmark(item.id);
                      }}
                      className={`hover:text-black ${bookmarks.includes(item.id) ? 'text-black' : 'text-gray-400'}`}
                    >
                      <Bookmark
                        size={16}
                        fill={bookmarks.includes(item.id) ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button className="hover:text-black" onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation();
                        }}>
                      <EllipsisVertical size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
        <hr className="my-8 mb-1 border-gray-300" />

      </section>

      {/* Best of 2025 Section */}
      <section id="best-of-2025" className="2xl:px-40 xl:px-30 lg:px-24 px-4">
        <h2 className="text-xl font-semibold mb-6 pb-2">Best of 2025</h2>
        <div className="grid gap-8">
          {bestOf2025Items.map((item) => (
            <Link key={item.id} href={`#${item.id}`} scroll={false} onClick={() => setSelectedItem(item)}>
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b pb-6 cursor-pointer transition-transform duration-200">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">  {item.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{item.readTime}</span>
                </div>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
            </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Cooking Section */}
      <section className="2xl:px-40 xl:px-30 lg:px-24 p-4">
        <h2 className="text-xl font-semibold mb-4">Cooking</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cookingItems.map((item, index) => (
            <Link key={item.id} href={`#${item.id}`} scroll={false} onClick={() => setSelectedItem(item)}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              key={item.id}
              className="flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-md"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={`https://picsum.photos/id/${item.id}/400/300`}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 space-y-2">
                <h3 className="font-semibold text-md leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-tight line-clamp-4">
                    {item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleBookmark(item.id);
                      }}
                      className={`hover:text-black ${bookmarks.includes(item.id) ? 'text-black' : 'text-gray-400'}`}
                    >
                      <Bookmark
                        size={16}
                        fill={bookmarks.includes(item.id) ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button className="hover:text-black" onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation();
                        }}>
                      <EllipsisVertical size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="2xl:px-40 xl:px-30 lg:px-24 px-4 py-12 bg-white text-black">
        <h2 className="text-xl font-semibold mb-6 border-t pt-6">Newsletter</h2>

        <p className="text-4xl font-semibold mb-4">
          Subscribe to our newsletter now and step into a world of timely updates, curated stories,
          <span className="text-gray-400">
            {" "}
            and behind-the-scenes glimpses. Whether you are a tech enthusiast, a foodie, or a pop
            culture connoisseur, our newsletter caters to all tastes and interests.
          </span>
        </p>
<div className="flex flex-col space-y-2 max-w-md">
      <div className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className={`px-4 py-2 bg-gray-100 rounded-full text-sm w-full ${
            error ? "border border-red-500" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="px-4 py-2 bg-gray-200 text-black text-sm font-medium rounded-full"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
        {subscribed && (
          <p className="text-green-600 text-sm mt-2">Thanks for subscribing!</p>
        )}
      </section>
      </>
    }

      {/* Footer */}
      <footer className="bg-black text-white 2xl:px-40 xl:px-30 lg:px-24 p-4 text-sm">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-4 mb-4 gap-4">
    <div className="flex flex-wrap gap-2 md:space-x-4">
      <a href="#home" className="hover:underline">Homepage</a>
      <a href="#product" className="hover:underline">Product</a>
      <a href="#solutions" className="hover:underline">Solutions</a>
      <a href="#pricing" className="hover:underline">Pricing</a>
      <a href="#news" className="hover:underline">News</a>
    </div>
    <div className="flex flex-wrap gap-2 md:space-x-4">
      <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
      <a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a>
      <a href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
      <a href="https://tiktok.com" target="_blank" className="hover:underline">TikTok</a>
      <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
    </div>
  </div>

  <div className="text-5xl md:text-9xl font-bold text-center text-gray-800 tracking-wider mb-4">ZENITH</div>

  <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <span>© 2025 Appose Blog. All Rights Reserved.</span>
    <div className="flex flex-wrap gap-2 md:space-x-4">
      <a href="#privacy" className="hover:underline">Privacy Policy</a>
      <a href="#terms" className="hover:underline">Terms of Service</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </div>
  </div>
</footer>
    </div>
  );
}
