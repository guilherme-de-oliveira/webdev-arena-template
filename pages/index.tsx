import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  BookOpen,
  Bookmark,
  BookmarkPlus,
  Search,
  Ellipsis,
  ChevronLeft,
  Settings,
  ExternalLink,
  Filter
} from "lucide-react";

const contentLibrary = [
  { id: 1, title: "Anna's Diary", author: "Ava Quinn", role: "Writer" },
  { id: 2, title: "Magic Garden", author: "Lina Bradley", role: "Narrator" },
  { id: 3, title: "Sacred Bridge", author: "Harper Vale", role: "Storyteller" },
  // { id: 4, title: "Space Rangers", author: "Dorian Lynwood", role: "Explorer" },
];

export default function AudiobookApp() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Content Library");
  const [detailId, setDetailId] = useState<number | null>(null);
  const [chapter, setChapter] = useState("Chapter 1");
  const [currentTime, setCurrentTime] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const duration = 100;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selected = contentLibrary.find((item) => item.id === selectedId);
  const detailItem = contentLibrary.find((item) => item.id === detailId);
  const [currentTimeMap, setCurrentTimeMap] = useState<Record<number, number>>({});
  const WISDOM_TREE_ID = 999;
  const isWisdomBookmarked = bookmarkedIds.includes(WISDOM_TREE_ID);
  
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});
  useEffect(() => {
    const interval = setInterval(() => {
      if (playingId !== null && audioRefs.current[playingId]) {
        const audio = audioRefs.current[playingId]!;
        setCurrentTimeMap(prev => ({
          ...prev,
          [playingId]: audio.currentTime
        }));
      }
    }, 500); // Update twice a second
  
    return () => clearInterval(interval);
  }, [playingId]);
  
  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  
  const handleTimeUpdate = (id: number) => {
    const current = audioRefs.current[id]?.currentTime || 0;
    setCurrentTimeMap(prev => ({ ...prev, [id]: current }));
  };

  const handleSliderChange = (id: number, value: number) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = value;
      setCurrentTimeMap(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleBookmark = () => {
    if (!detailId) return;
    setBookmarkedIds((prev) => {
      const isBookmarked = prev.includes(detailId);
      const updated = isBookmarked ? prev.filter((id) => id !== detailId) : [...prev, detailId];
      return updated;
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const isBookmarked = detailId !== null && bookmarkedIds.includes(detailId);

  const filterOptions = ["Menu", "Essentials", "Articles", "News"];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredLibrary = contentLibrary.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [avatars, setAvatars] = useState<string[]>([]);
  const addAvatar = () => {
    if (avatars.length < 5) {
      setAvatars([
        ...avatars,
        `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
      ]);
    }
  };
  
  const [loadingAudioId, setLoadingAudioId] = useState<number | null>(null);

  const wisdomAudioRef = useRef<HTMLAudioElement | null>(null);
const [wisdomPlaying, setWisdomPlaying] = useState(false);
const [wisdomCurrentTime, setWisdomCurrentTime] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    if (wisdomAudioRef.current && wisdomPlaying) {
      setWisdomCurrentTime(wisdomAudioRef.current.currentTime);
    }
  }, 500);
  return () => clearInterval(interval);
}, [wisdomPlaying]);


  return (
    <div className="flex h-screen font-sans relative bg-white">
      {/* Sidebar */}
      <aside className="w-64 text-white p-4 flex flex-col justify-between bg-[#0f172a]">
        <div>
          <h1 className="text-lg font-bold mb-8">Content App</h1>
          <nav className="space-y-2">
            {["Content Library", "Discovery", "Wisdom Tree"].map((item) => (
              <div
                key={item}
                className={`cursor-pointer flex items-center gap-2 p-2 rounded ${activeTab === item ? "bg-white text-black" : "hover:bg-gray-700"}`}
                onClick={() => setActiveTab(item)}
              >
                <BookOpen size={16} />
                {item}
              </div>
            ))}
          </nav>
          <hr className="my-4 border-gray-600" />
          <div className="flex items-center justify-between p-2 cursor-pointer hover:text-white">
            <span className="text-gray-400 text-sm">News Updates</span>
            <span className="bg-white text-black text-xs font-bold rounded-full px-2 py-0.5">3</span>
          </div>
        </div>
        <div className="text-gray-400 text-sm pl-2">3 New Updates</div>
      </aside>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="absolute top-20 right-10 bg-white border rounded shadow-md z-50 p-4 text-sm w-48 text-black">
          {filterOptions.map(option => (
            <div
              key={option}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => {
                setActiveTab(option);
                setShowFilterModal(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      { !detailId && activeTab === "Content Library" && (
          <main className="flex-1 p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Content</h2>
              <Ellipsis
                className="cursor-pointer text-[#0f172a]"
                onClick={() => setShowFilterModal(!showFilterModal)}
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contentLibrary.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 pb-7 border rounded-lg cursor-pointer ${selectedId === item.id ? "bg-black text-white" : "bg-white text-black"} transition-all`}
                  onClick={() => {
                    setSelectedId(item.id);
                    setDetailId(item.id);
                  }}
                >
                  <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                    📘
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.author}</p>
                  <ExternalLink
                    size={14}
                    className="text-sm mt-2 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDetailId(item.id);
                    }}
                  />
                </div>
              ))}
            </div>
          </main>
        )}  
        
        { detailId && activeTab === "Content Library" && (
          <main className="flex-1 p-6 overflow-y-auto">
            {/* Detail View as before */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="flex items-center text-sm text-gray-600 hover:underline"
                onClick={() => setDetailId(null)}
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-black">{detailItem?.title}</h2>
                {/* <Ellipsis size={16} className="text-gray-500 cursor-pointer" /> */}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">👤</div>
              <div>
                <p className="text-sm font-medium bg-white text-black">{detailItem?.author}</p>
                <p className="text-xs text-gray-500">{detailItem?.role}</p>
              </div>
            </div>

            <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded mb-4">
              📘 Cover Placeholder
            </div>

            <div className="flex gap-2 mb-4">
              {["Chapter 1", "Chapter 2", "Chapter 3"].map((ch) => (
                <button
                  key={ch}
                  className={`px-3 py-1 rounded text-sm border ${chapter === ch ? "bg-black text-white" : "bg-white text-black"}`}
                  onClick={() => setChapter(ch)}
                >
                  {ch}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
              <span>{(currentTime / 60).toFixed(2)}</span>
              <span>{(duration / 60).toFixed(2)}</span>
            </div>

            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => handleSliderChange(0, Number(e.target.value))}
              className="w-full mb-4"
            />

            <audio
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              onTimeUpdate={handleTimeUpdate(0)}
              onEnded={() => setPlaying(false)}
            />

            <div className="flex items-center gap-4">
              <button
                className="p-2 rounded-full bg-black text-white"
                onClick={() => setPlaying(!playing)}
              >
                {playing ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button className="text-sm border px-3 py-1 rounded hover:bg-gray-100 bg-white text-black">Top 10</button>
              {isBookmarked ? (
                <Bookmark size={20} className="text-black cursor-pointer" onClick={handleBookmark} />
              ) : (
                <BookmarkPlus size={20} className="text-gray-600 cursor-pointer" onClick={handleBookmark} />
              )}
            </div>

            {showToast && (
              <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg text-sm">
                {isBookmarked ? "Added to bookmark" : "Removed from bookmark"}
              </div>
            )}
          </main>
        )}

      {/* Discovery Page */}
      {activeTab === "Discovery" && (
        <div className="flex-1 p-8 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              {avatars.map((url, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src={url} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
              <button onClick={addAvatar} className="text-xl font-semibold text-black">+</button>
            </div>

            <Ellipsis
                className="cursor-pointer text-[#0f172a]"
                onClick={() => setShowFilterModal(!showFilterModal)}
              />          
          </div>

          <div className="flex flex-col items-center gap-2 text-5xl mb-6 text-black">{filteredLibrary.length} <p className="text-xs text-black">new materials</p></div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Find what you love"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">Novels <span className="text-gray-400 font-semibold">Sci-fi</span></h2>
          {filteredLibrary.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow mb-4">
              <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${item.id + 1}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-black">{item.author}</div>
                  <div className="text-xs text-black">{item.role}</div>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto cursor-pointer text-black"
                  onClick={() => setDetailId(item.id)}
                />
              </div>
              <div className="text-xs text-black mb-1">{item.title}</div>
              <div className="font-bold text-lg text-black">Episode 6</div>

            <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
            {/* <div className="flex justify-between text-xs text-gray-500 mb-1"> */}
              <span>{formatTime(currentTimeMap[item.id] || 0)}</span>
              <span>{formatTime(duration)}</span>
            {/* </div> */}

            </div>
            <input
                type="range"
                min={0}
                max={duration}
                value={currentTimeMap[item.id] || 0}
                onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                className="w-full mb-4"
              />
            <audio
              ref={(el) => (audioRefs.current[item.id] = el)}
              onTimeUpdate={() => handleTimeUpdate(item.id)}
              onWaiting={() => setLoadingAudioId(item.id)}
              onCanPlay={() => setLoadingAudioId(null)}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              preload="metadata"
            />


            <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const audio = audioRefs.current[item.id];
                if (!audio) return;

                if (playingId === item.id) {
                  audio.pause();
                  setPlayingId(null);
                } else {
                  Object.values(audioRefs.current).forEach((a) => a?.pause());
                  audio.play();
                  setPlayingId(item.id);
                  setLoadingAudioId(item.id); // Trigger loading spinner
                }
              }}
              className="p-2 rounded-full bg-black text-white flex items-center justify-center w-10 h-10"
            >
              {loadingAudioId === item.id ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : playingId === item.id ? (
                <Pause size={16} />
              ) : (
                <Play size={16} />
              )}
            </button>


              {isBookmarked ? (
                <Bookmark size={20} className="text-black cursor-pointer" onClick={() => {
                  setSelectedId(item.id);
                  setDetailId(item.id);
                  handleBookmark();
                }} />
              ) : (
                <BookmarkPlus size={20} className="text-gray-600 cursor-pointer" onClick={() => {
                  setSelectedId(item.id);
                  setDetailId(item.id);
                  handleBookmark();
                }} />
              )}
            </div>

            {showToast && (
              <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg text-sm">
                {isBookmarked ? "Added to bookmark" : "Removed from bookmark"}
              </div>
            )}
            </div>
          ))}
        </div>
      )}

{/* Wisdom Tree Page */}
{!detailItem && activeTab === "Wisdom Tree" && (
        <div className="flex-1 p-8 bg-white">
          <div className="flex items-center gap-4 mb-4 justify-between">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${1}`} alt="avatar" className="w-full h-full object-cover" />
                </div>           
               <div className="text-black">
              <div className="font-semibold text-sm">Rachel Brown</div>
              <div className="text-xs text-gray-500">Psychologist</div>
            </div>
            <Ellipsis
                className="cursor-pointer text-[#0f172a]"
                onClick={() => setShowFilterModal(!showFilterModal)}
              />   
          </div>

          <h2 className="text-3xl font-bold mb-6 text-black">Wisdom Tree</h2>

          <div className="w-full h-80 bg-gray-200 rounded mb-8 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">
              ✖
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span className="text-black">Childhood</span>
            <span className="text-black">Prolog</span>
          </div>

          <audio
            ref={wisdomAudioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            preload="metadata"
          />

          <input
            type="range"
            min={0}
            max={duration}
            value={wisdomCurrentTime}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (wisdomAudioRef.current) {
                wisdomAudioRef.current.currentTime = value;
                setWisdomCurrentTime(value);
              }
            }}
            className="w-full mb-4"
          />

          <div className="bg-black text-white rounded p-4 flex justify-between items-center text-lg font-mono mb-4">
            <span>{String(Math.floor(wisdomCurrentTime)).padStart(2, '0')}</span>
            <span>{String(duration).padStart(2, '0')}</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                if (!wisdomAudioRef.current) return;
                if (wisdomPlaying) {
                  wisdomAudioRef.current.pause();
                } else {
                  wisdomAudioRef.current.play();
                }
                setWisdomPlaying(!wisdomPlaying);
              }}
              className="px-4 py-2 rounded border text-sm text-black"
            >
              {wisdomPlaying ? "Pause" : "Play"}
            </button>
            <button className="text-xs text-gray-600">Top 10</button>
            <button
              onClick={() => {
                setBookmarkedIds((prev) => {
                  return prev.includes(WISDOM_TREE_ID)
                    ? prev.filter((id) => id !== WISDOM_TREE_ID)
                    : [...prev, WISDOM_TREE_ID];
                });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              }}
            >
              {isWisdomBookmarked ? (
                <BookmarkPlus className="text-black" size={18} />
              ) : (
                <Bookmark className="text-gray-600" size={18} />
              )}
            </button>
          </div>
        </div>
      )}

    </div>
  )
}