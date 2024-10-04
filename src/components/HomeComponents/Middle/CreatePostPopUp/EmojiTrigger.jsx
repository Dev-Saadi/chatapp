import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { Feeling } from "../../../../svg/Feeling";
import OutSideClick from "../../../../functions/click";

const EmojiTrigger = ({ typeText, settypeText, textRef, changePart }) => {
  const [emojiPicker, setemojiPicker] = useState(false);
  const [cursorPosition, setcursorPosition] = useState();
  const clickOutside = useRef(null);

  const submitEmoji = ({ emoji }, event) => {
    const ref = textRef.current;
    ref.focus();
    const start = typeText.substring(0, ref.selectionStart);
    const end = typeText.substring(ref.selectionStart);
    const newText = start + emoji + end;
    settypeText(newText);
    setcursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  OutSideClick(clickOutside, () => {
    setemojiPicker(false);
  });

  return (
    <>
      <div
        className={`${
          changePart ? "flex items-start justify-between mt-5" : "mt-5"
        }`}
      >
        <textarea
          maxLength={100}
          value={typeText}
          onChange={(e) => settypeText(e.target.value)}
          ref={textRef}
          placeholder="What's on your mind ?"
          className={`${
            changePart
              ? "w-11/12 resize-none min-h-28 outline-none p-3 rounded-2xl font-gilroyMedium text-base"
              : "w-full resize-none min-h-28 outline-none p-3 rounded-2xl font-gilroyMedium text-base"
          }`}
        />
        {changePart && (
          <div
            //   ref={clickOutside}
            className="cursor-pointer relative text-yellow"
          >
            <div onClick={() => setemojiPicker((prev) => !prev)}>
              <Feeling />
            </div>
            {emojiPicker && (
              <div className="absolute top-6 right-0 z-10">
                <EmojiPicker onEmojiClick={submitEmoji} />
              </div>
            )}
          </div>
        )}
      </div>

      {!changePart && (
        <div className="flex items-center justify-between mb-3 mt-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-hover_color to-blueTeal cursor-pointer"></div>
          <div
            //   ref={clickOutside}
            className="cursor-pointer relative text-yellow"
          >
            <div onClick={() => setemojiPicker((prev) => !prev)}>
              <Feeling />
            </div>
            {emojiPicker && (
              <div className="absolute bottom-6 right-0">
                <EmojiPicker onEmojiClick={submitEmoji} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmojiTrigger;
