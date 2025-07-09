
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Camera, Heart, MessageCircle, Share2, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CommunityHubScreen = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: 1,
      author: "राम कुमार",
      location: "लुधियाना, पंजाब",
      timeAgo: "2 घंटे पहले",
      crop: "गेहूं",
      title: "पत्तियों पर पीले धब्बे",
      description: "मेरी गेहूं की फसल की पत्तियों पर पीले धब्बे दिखाई दे रहे हैं। क्या यह कोई बीमारी है?",
      image: "🌾",
      likes: 12,
      comments: 8,
      isLiked: false,
      tags: ["रोग", "गेहूं", "पत्तियां"],
      bestAnswer: "यह पत्ती झुलसा रोग हो सकता है। मैन्कोजेब का छिड़काव करें।"
    },
    {
      id: 2,
      author: "सुनीता देवी",
      location: "हरियाणा",
      timeAgo: "5 घंटे पहले",
      crop: "टमाटर",
      title: "टमाटर में फल गलन",
      description: "टमाटर के फल पकने से पहले गल जा रहे हैं। कैसे बचाऊं?",
      image: "🍅",
      likes: 18,
      comments: 15,
      isLiked: true,
      tags: ["टमाटर", "फल", "गलन"],
      bestAnswer: "कैल्शियम की कमी है। कैल्शियम क्लोराइड का स्प्रे करें।"
    },
    {
      id: 3,
      author: "विजय सिंह",
      location: "मेरठ, उत्तर प्रदेश",
      timeAgo: "1 दिन पहले",
      crop: "मक्का",
      title: "मक्का में कीट समस्या",
      description: "मक्का के पौधों में छोटे कीड़े दिखाई दे रहे हैं। कौन सा कीटनाशक इस्तेमाल करूं?",
      image: "🌽",
      likes: 25,
      comments: 20,
      isLiked: false,
      tags: ["कीट", "मक्का", "कीटनाशक"],
      bestAnswer: "क्लोरपायरीफॉस का प्रयोग करें। शाम के समय स्प्रे करें।"
    }
  ];

  const filterOptions = [
    { key: "all", label: "सभी" },
    { key: "wheat", label: "गेहूं" },
    { key: "tomato", label: "टमाटर" },
    { key: "corn", label: "मक्का" },
    { key: "rice", label: "धान" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">समुदाय केंद्र</h1>
              <p className="text-sm text-gray-600">Community Hub</p>
            </div>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Plus size={16} className="mr-1" />
            पोस्ट करें
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search and Filter */}
        <Card className="p-4 farmer-shadow">
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="समस्या खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline" size="sm">
              <Search size={16} />
            </Button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {filterOptions.map((option) => (
              <Button
                key={option.key}
                variant={filter === option.key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(option.key)}
                className="whitespace-nowrap"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* Create Post Card */}
        <Card className="p-4 farmer-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">👨‍🌾</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-2">अपनी समस्या साझा करें</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Camera size={16} className="mr-1" />
                  फोटो
                </Button>
                <Button variant="outline" size="sm">
                  सवाल लिखें
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-4 farmer-shadow">
              {/* Post Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">👨‍🌾</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-800">{post.author}</h4>
                    <Badge variant="outline" className="text-xs">
                      {post.crop}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600">{post.location} • {post.timeAgo}</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-3">
                <h3 className="font-medium text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{post.description}</p>
                
                {/* Post Image */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-4xl">{post.image}</span>
                </div>

                {/* Tags */}
                <div className="flex gap-1 mb-3">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Best Answer */}
                {post.bestAnswer && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-3">
                    <p className="text-xs font-medium text-green-800 mb-1">सबसे अच्छा जवाब</p>
                    <p className="text-sm text-green-700">{post.bestAnswer}</p>
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-1 ${post.isLiked ? 'text-red-500' : 'text-gray-600'}`}
                  >
                    <Heart size={16} className={post.isLiked ? 'fill-current' : ''} />
                    <span className="text-sm">{post.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                    <MessageCircle size={16} />
                    <span className="text-sm">{post.comments}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <Share2 size={16} />
                  </Button>
                </div>
                
                <Button size="sm" variant="outline">
                  जवाब दें
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-4">
          <Button variant="outline">
            और पोस्ट देखें
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityHubScreen;
