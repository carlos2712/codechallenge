using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace codechallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HackerNewsController : ControllerBase
    {
        public HackerNewsController()
        {

        }

        [HttpGet]
        public async Task<ActionResult<string>> Get(int top)
        {
            string url = "https://hacker-news.firebaseio.com/v0/newstories.json";
            List<HackerNews> allNews = new List<HackerNews>();
            int newstop = 10;
            if (top != 0){
                newstop = top;
            }
            using (HttpClient client = new HttpClient())
            {
                string lastNew = await client.GetStringAsync(url);

                int[] stories = JsonConvert.DeserializeObject<int[]>(lastNew);

                for (int i = 0; i < newstop; i++)
                {
                    url = "https://hacker-news.firebaseio.com/v0/item/" + stories[i].ToString() + ".json?print=pretty";
                    string newStory = await client.GetStringAsync(url);
                    HackerNews jNews = JsonConvert.DeserializeObject<HackerNews>(newStory);
                    allNews.Add(jNews);
                }
                return JsonConvert.SerializeObject(allNews);
            }
        }
    }
}
