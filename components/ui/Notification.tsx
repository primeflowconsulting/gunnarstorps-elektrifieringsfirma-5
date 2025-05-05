"use client";

import React, { useEffect } from 'react';
import Icon from './Icon';

type NotificationType = 'success' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  visible: boolean;
  onClose: () => void;
}

export default function Notification({ message, type, visible, onClose }: NotificationProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 left-4 md:left-auto md:w-96 z-50 transform transition-all duration-300 ease-in-out">
      <div 
        className={`rounded-lg shadow-lg p-4 flex items-center ${
          type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}
      >
        <div className={`flex-shrink-0 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          <Icon name={type === 'success' ? 'bolt' : 'close'} className="w-5 h-5" />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={onClose}
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                type === 'success' 
                  ? 'text-green-500 hover:bg-green-100 focus:ring-green-600' 
                  : 'text-red-500 hover:bg-red-100 focus:ring-red-600'
              }`}
            >
              <span className="sr-only">Stäng</span>
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
