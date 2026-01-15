import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { supabase } from '../utils/supabaseClient';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  overflow: hidden;
  font-family: 'MS Sans Serif', sans-serif;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: white;
  border-bottom: 2px solid #808080;
  margin-bottom: 10px;
  box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #000;
`;

const Button = styled.button`
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  padding: 4px 12px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  
  &:active {
    border: 2px solid #404040;
    border-right-color: #fff;
    border-bottom-color: #fff;
  }
  
  &:disabled {
    color: #808080;
    cursor: default;
  }
`;

const Corkboard = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  padding: 10px;
  background-image: radial-gradient(#a0a0a0 1px, transparent 1px);
  background-size: 20px 20px;
  background-color: #e0e0e0;
  border: 2px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
  box-shadow: inset 1px 1px 0 #000;
`;

interface PostcardStyleProps {
    bgcolor?: string;
}

const PostcardItem = styled.div<PostcardStyleProps>`
  width: 200px;
  height: 150px;
  background-color: ${props => props.bgcolor || '#fffec8'};
  padding: 10px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  transform: rotate(${() => Math.random() * 6 - 3}deg);
  transition: transform 0.2s;
  cursor: default;
  position: relative;

  &:hover {
    transform: scale(1.05) rotate(0deg);
    z-index: 10;
  }
`;

const Pin = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  width: 12px;
  height: 12px;
  background: red;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const PostMessage = styled.div`
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-y: auto;
  margin-bottom: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const PostFooter = styled.div`
  font-size: 0.8rem;
  text-align: right;
  font-weight: bold;
  color: #555;
  border-top: 1px dashed #999;
  padding-top: 4px;
`;

const FormOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const FormWindow = styled.div`
  width: 300px;
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  padding: 2px;
`;

const TitleBar = styled.div`
  background: navy;
  color: white;
  padding: 2px 4px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background: #c0c0c0;
  border: 1px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
  
  label {
    display: block;
    margin-bottom: 4px;
  }
  
  input, textarea {
    width: 100%;
    padding: 4px;
    font-family: 'Courier New', monospace;
    border: 2px solid #808080;
    border-right-color: #fff;
    border-bottom-color: #fff;
    box-shadow: inset 1px 1px 0 #000;
  }
`;

const ColorPicker = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

const ColorOption = styled.div<{ color: string; selected: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  cursor: pointer;
  border: ${props => props.selected ? '2px solid black' : '1px solid gray'};
`;

const colors = ['#fffec8', '#ffcccc', '#ccffcc', '#cce5ff', '#e5ccff'];

interface Postcard {
    id: string;
    sender_name: string;
    message: string;
    style: {
        backgroundColor: string;
    };
    created_at: string;
}

const PostcardApp: React.FC = () => {
    const [postcards, setPostcards] = useState<Postcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        color: colors[0]
    });
    const [submitting, setSubmitting] = useState(false);

    const fetchPostcards = async () => {
        try {
            const { data, error } = await supabase
                .from('postcards')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPostcards(data || []);
        } catch (error) {
            console.error('Error fetching postcards:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPostcards();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const newPostcard = {
                sender_name: formData.name,
                message: formData.message,
                style: { backgroundColor: formData.color }
            };

            const { data, error } = await supabase
                .from('postcards')
                .insert([newPostcard])
                .select();

            if (error) throw error;

            if (data) {
                setPostcards([data[0], ...postcards]);
                setShowForm(false);
                setFormData({ name: '', message: '', color: colors[0] });
            }
        } catch (error) {
            console.error('Error submitting postcard:', error);
            alert('Failed to send postcard. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container>
            <Toolbar>
                <div>
                    <strong>Guestbook</strong> - Say something, don't be shy 👋 ({postcards.length} messages)
                </div>
                <Button onClick={() => setShowForm(true)}>New Postcard</Button>
            </Toolbar>

            <Corkboard>
                {loading ? (
                    <div>Loading messages...</div>
                ) : postcards.length === 0 ? (
                    <div>No messages yet. Be the first to leave one!</div>
                ) : (
                    postcards.map((card) => (
                        <PostcardItem key={card.id} bgcolor={card.style?.backgroundColor}>
                            <Pin />
                            <PostMessage>{card.message}</PostMessage>
                            <PostFooter>- {card.sender_name}</PostFooter>
                        </PostcardItem>
                    ))
                )}
            </Corkboard>

            {showForm && (
                <FormOverlay>
                    <FormWindow>
                        <TitleBar>
                            <span>Write a Postcard</span>
                            <CloseButton onClick={() => setShowForm(false)}>x</CloseButton>
                        </TitleBar>
                        <form onSubmit={handleSubmit}>
                            <InputGroup>
                                <label>From:</label>
                                <input
                                    required
                                    maxLength={30}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                />
                            </InputGroup>
                            <InputGroup>
                                <label>Message:</label>
                                <textarea
                                    required
                                    maxLength={150}
                                    rows={4}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Write a short message..."
                                />
                            </InputGroup>
                            <InputGroup>
                                <label>Card Color:</label>
                                <ColorPicker>
                                    {colors.map(c => (
                                        <ColorOption
                                            key={c}
                                            color={c}
                                            selected={formData.color === c}
                                            onClick={() => setFormData({ ...formData, color: c })}
                                        />
                                    ))}
                                </ColorPicker>
                            </InputGroup>
                            <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                <Button type="button" onClick={() => setShowForm(false)}>Cancel</Button>
                                <Button type="submit" disabled={submitting}>
                                    {submitting ? 'Sending...' : 'Send'}
                                </Button>
                            </div>
                        </form>
                    </FormWindow>
                </FormOverlay>
            )}
        </Container>
    );
};

export default PostcardApp;
