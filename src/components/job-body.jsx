import Button from "./shared/button";

const JobBody = () => {
  return (
    <section className="mt-8 bg-white dark:bg-slate-900 dark:text-slate-50 rounded-md shadow-sm p-4 mb-8">
      <div className="w-full flex flex-col md:flex-row md:items-center">
        <div className="mr-auto">
          <p className="text-xs text-slate-400">1w ago . part time</p>
          <h2 className="text-2xl font-bold capitalize">
            senior software engineer{" "}
          </h2>
          <span className="text-xs text-slate-400">united kingdom</span>
        </div>
        <Button text={`apply now`} />
      </div>

      <p className="pt-8 text-slate-950 dark:text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac felis
        laoreet, bibendum massa vitae, vulputate erat. Duis vulputate urna eu
        lectus scelerisque, vel tincidunt dui dignissim. Quisque nec urna
        tincidunt, elementum ipsum vel, auctor tellus. Sed dictum posuere velit,
        non fermentum mauris. Vivamus interdum vitae nibh id egestas. Praesent
        volutpat aliquet neque a consequat. Suspendisse velit diam, malesuada
        quis tellus sit amet, fermentum elementum nisi.
      </p>
      <p className="pt-8 text-slate-950 dark:text-slate-400">
        Donec imperdiet massa quis lectus semper bibendum. Sed magna dui,
        interdum sed nisl vitae, aliquet rhoncus odio. Duis a magna vitae elit
        porta lobortis at at magna. Nam consequat in elit at porta. Curabitur
        dictum tempor lacinia. Duis hendrerit ipsum eget elit pulvinar, ac
        vulputate ante volutpat. In hac habitasse platea dictumst. Ut vitae
        lacus lobortis, cursus orci a, placerat sapien.
      </p>

      <aside className="pt-8 text-slate-950 dark:text-slate-400">
        <h5 className="font-bold capitalize pb-2 dark:text-slate-50">
          requirements
        </h5>
        <p>
          Nulla facilisi. Etiam egestas vitae nisl in finibus. Maecenas sed
          magna est. Donec a urna congue ex rutrum luctus non eu mauris. Nulla
          viverra turpis vel ipsum sollicitudin aliquet. In imperdiet diam
          velit, et elementum est facilisis a. Morbi in eleifend lorem.
          interdum.
        </p>
        <ul className=" list-disc p-4">
          <li>Maecenas a suscipit massa. Sed ac faucibus lorem. </li>
          <li>
            Nunc eu venenatis sapien. Pellentesque malesuada tempus purus, ut
            iaculis libero dapibus id.
          </li>
          <li> Interdum et malesuada fames ac ante ipsum primis in faucibus</li>
          <li>
            Sed at orci diam. Aenean sed malesuada lacus. Donec sit amet augue
            purus.
          </li>
        </ul>
      </aside>
      <aside>
        <h5 className="font-bold capitalize pb-2 dark:text-slate-50">
          what you will do
        </h5>
        <p className="text-slate-950 dark:text-slate-400">
          Nulla facilisi. Etiam egestas vitae nisl in finibus. Maecenas sed
          magna est. Donec a urna congue ex rutrum luctus non eu mauris. Nulla
          viverra turpis vel ipsum sollicitudin aliquet. In imperdiet diam
          velit, et elementum est facilisis a. Morbi in eleifend lorem.
          interdum.
        </p>
        <ol className=" list-decimal p-4 text-slate-950 dark:text-slate-400">
          <li>Maecenas a suscipit massa. Sed ac faucibus lorem. </li>
          <li>
            Nunc eu venenatis sapien. Pellentesque malesuada tempus purus, ut
            iaculis libero dapibus id.
          </li>
          <li> Interdum et malesuada fames ac ante ipsum primis in faucibus</li>
          <li>
            Sed at orci diam. Aenean sed malesuada lacus. Donec sit amet augue
            purus.
          </li>
        </ol>
      </aside>
    </section>
  );
};

export default JobBody;
