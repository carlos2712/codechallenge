using Xunit;
using System.Collections.Generic;
using codechallenge.Controllers;

namespace codechallenge.Tests
{
    public class Tests
    {
        [Fact]
        public void TestDetailsView()
        {
            var controller = new HackerNewsController();
            var result = controller.Get(10);
            string r = result.ToString();
            Assert.NotNull(result);
        }
    }
}