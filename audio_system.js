// audio_system.js - Web Audio API Sound Effects & High-Quality Natural Female Teacher Speech

class SoundManager {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.speechEnabled = true;
        this.selectedVoice = null;
        this.arabicVoice = null;
        this.speechRate = 0.76; // Calm, deliberate, teacher-like pace for primary 3 kids
        this.speechPitch = 1.0;
        this.isSpeaking = false;
        this.initVoices();
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    initVoices() {
        if (!('speechSynthesis' in window)) return;

        const pickVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (!voices || voices.length === 0) return;

            // 1. Prioritize high-quality human/natural English & Multilingual female teacher voices
            const preferredEnglishPatterns = [
                "Microsoft Emma Multilingual Online (Natural)",
                "Microsoft Emma Online (Natural)",
                "Microsoft Jenny Online (Natural)",
                "Microsoft Aria Online (Natural)",
                "Microsoft Michelle Online (Natural)",
                "Microsoft Sonia Online (Natural)",
                "Microsoft Libby Online (Natural)",
                "Microsoft Zira",
                "Google US English",
                "Google UK English Female",
                "Samantha",
                "Victoria"
            ];

            for (const pattern of preferredEnglishPatterns) {
                const found = voices.find(v => v.name.includes(pattern));
                if (found) {
                    this.selectedVoice = found;
                    break;
                }
            }

            if (!this.selectedVoice) {
                this.selectedVoice = voices.find(v => v.lang.startsWith('en') && !v.name.toLowerCase().includes('male')) 
                                  || voices.find(v => v.lang.startsWith('en')) 
                                  || voices[0];
            }

            // 2. Prioritize natural Egyptian/Arabic female voices for native explanations
            const preferredArabicPatterns = [
                "Microsoft سلمى Online (Natural)",
                "Microsoft Hoda",
                "Microsoft شاكر Online (Natural)",
                "Microsoft فاطمة Online (Natural)",
                "Microsoft ليلى Online (Natural)"
            ];

            for (const pattern of preferredArabicPatterns) {
                const found = voices.find(v => v.name.includes(pattern) || (v.lang === 'ar-EG' && v.name.includes(pattern)));
                if (found) {
                    this.arabicVoice = found;
                    break;
                }
            }

            if (!this.arabicVoice) {
                this.arabicVoice = voices.find(v => v.lang === 'ar-EG') 
                                || voices.find(v => v.lang.startsWith('ar')) 
                                || this.selectedVoice;
            }

            console.log("[SoundManager] English Teacher Voice:", this.selectedVoice ? this.selectedVoice.name : "Default");
            console.log("[SoundManager] Arabic Teacher Voice:", this.arabicVoice ? this.arabicVoice.name : "Default");
        };

        pickVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = pickVoices;
        }
    }

    getVoiceName() {
        if (!this.selectedVoice) return "Natural English Teacher";
        const name = this.selectedVoice.name;
        if (name.includes("Jenny")) return "Teacher Jenny (Natural Voice)";
        if (name.includes("Aria")) return "Teacher Aria (Natural Voice)";
        if (name.includes("Zira")) return "Teacher Zira";
        if (name.includes("Google")) return "Teacher Google US";
        if (name.includes("Samantha")) return "Teacher Samantha";
        return name.split('-')[0].trim();
    }

    playTone(freq, type, duration, delay = 0, gainLevel = 0.15) {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;

        setTimeout(() => {
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            } catch (e) {
                console.warn('Audio tone error:', e);
            }
        }, delay * 1000);
    }

    correct() {
        this.playTone(523.25, 'triangle', 0.15, 0, 0.2);
        this.playTone(659.25, 'triangle', 0.15, 0.08, 0.2);
        this.playTone(783.99, 'triangle', 0.18, 0.16, 0.2);
        this.playTone(1046.50, 'sine', 0.35, 0.25, 0.25);
    }

    incorrect() {
        this.playTone(330, 'sine', 0.2, 0, 0.15);
        this.playTone(260, 'sine', 0.3, 0.15, 0.15);
    }

    levelUp() {
        const notes = [440, 554.37, 659.25, 880, 783.99, 880, 1108.73];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'triangle', 0.25, idx * 0.1, 0.22);
        });
    }

    click() {
        this.playTone(600, 'sine', 0.05, 0, 0.08);
    }

    starEarned() {
        this.playTone(880, 'sine', 0.1, 0, 0.2);
        this.playTone(1320, 'triangle', 0.25, 0.07, 0.25);
    }

    popWord() {
        this.playTone(850, 'sine', 0.08, 0, 0.12);
        this.playTone(1200, 'triangle', 0.1, 0.03, 0.15);
    }

    speak(text, onBoundary = null, onEnd = null, lang = 'en-US') {
        if (!this.speechEnabled || !('speechSynthesis' in window)) return;
        
        // Check if text has Arabic characters
        const hasArabic = /[\u0600-\u06FF]/.test(text);
        const hasEnglish = /[a-zA-Z]/.test(text);

        // If mixed bilingual text, use speakBilingual
        if (hasArabic && hasEnglish) {
            this.speakBilingual(text, null, null, onEnd);
            return;
        }

        window.speechSynthesis.cancel();
        this.isSpeaking = true;

        const cleanText = text
            .replace(/[*_#`[\]()]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        const utterance = new SpeechSynthesisUtterance(cleanText);

        if (hasArabic) {
            utterance.voice = this.arabicVoice || this.selectedVoice;
            utterance.lang = (this.arabicVoice && this.arabicVoice.lang) || 'ar-EG';
            utterance.rate = 0.85;
            utterance.pitch = 1.05;
        } else {
            if (!this.selectedVoice) this.initVoices();
            utterance.voice = this.selectedVoice;
            utterance.lang = (this.selectedVoice && this.selectedVoice.lang) || lang;
            utterance.rate = this.speechRate;
            utterance.pitch = this.speechPitch;
        }

        if (onBoundary) {
            utterance.onboundary = (e) => {
                if (e.name === 'word') {
                    onBoundary(e.charIndex, e.charLength || 0);
                }
            };
        }

        utterance.onend = () => {
            this.isSpeaking = false;
            if (onEnd) onEnd();
        };

        utterance.onerror = () => {
            this.isSpeaking = false;
            if (onEnd) onEnd();
        };

        window.speechSynthesis.speak(utterance);
    }

    speakBilingual(text, onStart = null, onSegment = null, onEnd = null) {
        if (!this.speechEnabled || !('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        this.isSpeaking = true;

        if (!this.selectedVoice || !this.arabicVoice) {
            this.initVoices();
        }

        // Clean markdown, formulas, and emojis for smooth pronunciation
        let cleaned = text
            .replace(/\\rightarrow/g, ' to ')
            .replace(/[\$\*\#\_\[\]\(\)\{\}]/g, ' ')
            .replace(/[•\-\+]/g, ' ')
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
            .trim();

        // Split into coherent sentence chunks
        const rawLines = cleaned.split(/[\n\r]+/);
        const segments = [];

        rawLines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) return;
            // Split line by sentence punctuation
            const frags = trimmed.split(/([.!?;،؛]+)/);
            for (let i = 0; i < frags.length; i += 2) {
                const part = (frags[i] + (frags[i + 1] || '')).trim();
                if (part.length > 1) {
                    const isAr = /[\u0600-\u06FF]/.test(part);
                    segments.push({ text: part, isArabic: isAr });
                }
            }
        });

        if (segments.length === 0) {
            this.isSpeaking = false;
            if (onEnd) onEnd();
            return;
        }

        if (onStart) onStart();

        let currentIdx = 0;
        const playNextSegment = () => {
            if (!this.isSpeaking || currentIdx >= segments.length) {
                this.isSpeaking = false;
                if (onEnd) onEnd();
                return;
            }

            const seg = segments[currentIdx++];
            if (onSegment) onSegment(seg, currentIdx - 1, segments.length);

            const utt = new SpeechSynthesisUtterance(seg.text);
            if (seg.isArabic) {
                utt.voice = this.arabicVoice || this.selectedVoice;
                utt.lang = (this.arabicVoice && this.arabicVoice.lang) || 'ar-EG';
                utt.rate = 0.85;
                utt.pitch = 1.05;
            } else {
                utt.voice = this.selectedVoice;
                utt.lang = (this.selectedVoice && this.selectedVoice.lang) || 'en-US';
                utt.rate = this.speechRate;
                utt.pitch = this.speechPitch;
            }

            utt.onend = () => {
                setTimeout(playNextSegment, 140);
            };

            utt.onerror = () => {
                setTimeout(playNextSegment, 60);
            };

            window.speechSynthesis.speak(utt);
        };

        playNextSegment();
    }

    playPcmAudio(base64Data, onStart = null, onEnd = null) {
        if (!this.speechEnabled) return;
        this.stopSpeaking();
        this.init();
        if (!this.ctx) return;

        try {
            const binary = atob(base64Data);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
            const int16 = new Int16Array(bytes.buffer);

            const buffer = this.ctx.createBuffer(1, int16.length, 24000);
            const channel = buffer.getChannelData(0);
            for (let i = 0; i < int16.length; i++) {
                channel[i] = int16[i] / 32768.0;
            }

            const source = this.ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(this.ctx.destination);

            this.activePcmSource = source;
            this.isSpeaking = true;

            source.onended = () => {
                this.isSpeaking = false;
                this.activePcmSource = null;
                if (onEnd) onEnd();
            };

            if (onStart) onStart();
            source.start(0);
        } catch (e) {
            console.warn("[SoundManager] PCM audio playback error:", e);
            this.isSpeaking = false;
            if (onEnd) onEnd();
        }
    }

    stopSpeaking() {
        this.isSpeaking = false;
        if (this.activePcmSource) {
            try { this.activePcmSource.stop(); } catch(e){}
            this.activePcmSource = null;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }
}

window.soundManager = new SoundManager();
