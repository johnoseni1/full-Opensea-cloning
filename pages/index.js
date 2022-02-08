
import React, {useEffect} from 'react';
import Head from 'next/head';
import { useWeb3 } from '@3rdweb/hooks';
import Header from '../components/Header';
import Hero from '../components/Hero';
import toast, { Toaster } from 'react-hot-toast';
import { client } from '../lib/sanityClient';